import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';
import { documents } from '../src/data/documents';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

function createWavBuffer(base64Data: string, sampleRate: number = 24000): Buffer {
  const pcmData = Buffer.from(base64Data, 'base64');
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = pcmData.length;
  
  const buffer = Buffer.alloc(44 + dataSize);
  
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);
  
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);
  
  pcmData.copy(buffer, 44);
  
  return buffer;
}

async function generateForDoc(doc: any, outDir: string) {
  const filePath = path.join(outDir, `${doc.id}.wav`);
  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${doc.id}, already exists.`);
    return;
  }
  console.log(`Generating audio for ${doc.id}...`);
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: doc.content }] }],
      config: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Kore" },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const buffer = createWavBuffer(base64Audio, 24000);
      fs.writeFileSync(filePath, buffer);
      console.log(`Saved ${doc.id}.wav`);
    }
  } catch (error) {
    console.error(`Failed to generate audio for ${doc.id}:`, error);
  }
}

async function main() {
  const outDir = path.join(process.cwd(), 'public', 'audios');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Process in batches of 3 to avoid rate limits
  for (let i = 0; i < documents.length; i += 3) {
    const batch = documents.slice(i, i + 3);
    await Promise.all(batch.map(doc => generateForDoc(doc, outDir)));
    await new Promise(r => setTimeout(r, 2000)); // 2s delay between batches
  }
  console.log("All audio files generated successfully!");
}

main();
