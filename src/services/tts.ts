import localforage from 'localforage';

const audioCache = localforage.createInstance({
  name: 'juridical-audio-cache',
  storeName: 'audios',
});

let voicesLoaded = false;

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      voicesLoaded = true;
      resolve(voices);
      return;
    }

    window.speechSynthesis.onvoiceschanged = () => {
      const loaded = window.speechSynthesis.getVoices();
      voicesLoaded = true;
      resolve(loaded);
    };

    setTimeout(() => {
      if (!voicesLoaded) {
        resolve(window.speechSynthesis.getVoices());
      }
    }, 1000);
  });
}

export interface VoiceOption {
  name: string;
  label: string;
  lang: string;
}

export async function getAvailableVoices(): Promise<VoiceOption[]> {
  const voices = await loadVoices();
  const ptVoices = voices.filter(v => v.lang.startsWith('pt'));

  const result: VoiceOption[] = [
    { name: '', label: 'Automática', lang: 'pt-BR' },
  ];

  for (const voice of ptVoices) {
    result.push({
      name: voice.name,
      label: `${voice.name} (${voice.lang})`,
      lang: voice.lang,
    });
  }

  return result;
}

export async function speak(text: string, onEnd?: () => void, rate?: number, voiceName?: string) {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = rate ?? 0.95;
  utterance.pitch = 1.0;
  utterance.volume = 1;

  const voices = await loadVoices();

  if (voiceName) {
    const selected = voices.find(v => v.name === voiceName);
    if (selected) {
      utterance.voice = selected;
    }
  }

  if (!utterance.voice) {
    let ptVoice: SpeechSynthesisVoice | undefined;
    ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.toLowerCase().includes('google'));
    if (!ptVoice) {
      ptVoice = voices.find(v => v.lang === 'pt-BR');
    }
    if (!ptVoice) {
      ptVoice = voices.find(v => v.lang.startsWith('pt'));
    }
    if (ptVoice) {
      utterance.voice = ptVoice;
    }
  }

  if (onEnd) {
    utterance.onend = onEnd;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  window.speechSynthesis.cancel();
}

export async function generateGeminiAudio(text: string, apiKey: string): Promise<ArrayBuffer> {
  const { GoogleGenAI, Modality } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: [{
        role: 'user',
        parts: [{ text }]
      }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          languageCode: 'pt-BR',
        },
      },
    });

    console.log('Gemini TTS response:', JSON.stringify(response, null, 2));

    if (!response.candidates || !response.candidates[0]?.content?.parts) {
      const textResponse = response.text;
      if (textResponse) {
        console.log('Model returned text instead of audio:', textResponse);
      }
      throw new Error('Resposta inválida do Gemini. Verifique se o modelo suporta geração de áudio.');
    }

    const part = response.candidates[0].content.parts.find(p => p.inlineData?.data);
    if (!part?.inlineData?.data) {
      const textPart = response.candidates[0].content.parts.find(p => p.text);
      if (textPart?.text) {
        console.log('Model returned text:', textPart.text.substring(0, 200));
      }
      throw new Error('Nenhum áudio na resposta do Gemini. O modelo pode não suportar geração de áudio.');
    }

    const binaryString = atob(part.inlineData.data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  } catch (error) {
    console.error('Erro detalhado na geração de áudio:', error);
    throw error;
  }
}

export async function getCachedAudio(docId: string): Promise<ArrayBuffer | null> {
  try {
    const cached = await audioCache.getItem<ArrayBuffer>(docId);
    return cached;
  } catch {
    return null;
  }
}

export async function saveAudioToCache(docId: string, audioData: ArrayBuffer): Promise<void> {
  try {
    await audioCache.setItem(docId, audioData);
  } catch (error) {
    console.error('Failed to cache audio:', error);
  }
}
