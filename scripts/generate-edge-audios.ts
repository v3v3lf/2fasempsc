import fs from 'fs';
import path from 'path';
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { documents } from '../src/data/documents';

const tts = new MsEdgeTTS();

async function generateForDoc(doc: any, outDir: string) {
  const filePath = path.join(outDir, `${doc.id}.mp3`);
  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${doc.id}, already exists.`);
    return;
  }
  
  console.log(`Generating audio for ${doc.id}...`);
  try {
    const { audioStream } = tts.toStream(doc.content);
    
    return new Promise<void>((resolve, reject) => {
      const writeStream = fs.createWriteStream(filePath);
      audioStream.pipe(writeStream);
      
      writeStream.on('finish', () => {
        console.log(`Saved ${doc.id}.mp3`);
        resolve();
      });
      
      writeStream.on('error', (err) => {
        console.error(`Failed to save ${doc.id}.mp3:`, err);
        reject(err);
      });
      
      audioStream.on('error', (err) => {
        console.error(`Audio stream error for ${doc.id}:`, err);
        reject(err);
      });
    });
  } catch (error) {
    console.error(`Failed to trigger generation for ${doc.id}:`, error);
  }
}

async function main() {
  const outDir = path.join(process.cwd(), 'public', 'audios');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Set the voice and output format
  await tts.setMetadata("pt-BR-FranciscaNeural", OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

  // Process sequentially to avoid too many concurrent websocket connections or rate limits
  for (const doc of documents) {
    await generateForDoc(doc, outDir);
    // Small delay between requests
    await new Promise(r => setTimeout(r, 1000));
  }
  
  tts.close();
  console.log("All audio files generated successfully!");
}

main().catch(console.error);
