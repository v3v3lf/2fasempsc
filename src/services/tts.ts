import { GoogleGenAI } from "@google/genai";
import localforage from "localforage";

// Initialize the Gemini API client - only if we have a valid API key
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const defaultAi = apiKey && apiKey.trim() ? new GoogleGenAI({ apiKey }) : null;

function getAiClient(customApiKey?: string) {
  if (customApiKey && customApiKey.trim()) {
    return new GoogleGenAI({ apiKey: customApiKey });
  }
  if (defaultAi) {
    return defaultAi;
  }
  // If no API key is available, throw a meaningful error
  throw new Error('Nenhuma chave de API do Gemini foi configurada. Por favor, configure a variável VITE_GEMINI_API_KEY ou use a chave customizada nas configurações.');
}

function createWavBlob(base64Data: string, sampleRate: number = 24000): Blob {
  const binaryString = atob(base64Data);
  const pcmData = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    pcmData[i] = binaryString.charCodeAt(i);
  }

  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = pcmData.length;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  // RIFF chunk descriptor
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');

  // fmt sub-chunk
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
  view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);

  // data sub-chunk
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  // Write PCM data
  const pcmView = new Uint8Array(buffer, 44);
  pcmView.set(pcmData);

  return new Blob([buffer], { type: 'audio/wav' });
}

export async function checkAudioCache(id: string): Promise<string | null> {
  try {
    const cachedBlob = await localforage.getItem<Blob>(`audio_${id}`);
    if (cachedBlob) {
      return URL.createObjectURL(cachedBlob);
    }
  } catch (err) {
    console.error("Cache check error:", err);
  }
  return null;
}

export async function generateAudio(text: string, id: string, customApiKey?: string): Promise<string> {
  try {
    // Check cache first
    const cachedUrl = await checkAudioCache(id);
    if (cachedUrl) {
      return cachedUrl;
    }

    const ai = getAiClient(customApiKey);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Kore" }, // Kore provides a smooth, calm voice
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      throw new Error("No audio data returned from Gemini TTS API");
    }

    // Gemini TTS returns raw PCM (16-bit, 24000Hz, Mono). We must add a WAV header.
    const blob = createWavBlob(base64Audio, 24000);
    
    // Save to cache
    await localforage.setItem(`audio_${id}`, blob);

    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("TTS Error:", error);
    throw error;
  }
}
