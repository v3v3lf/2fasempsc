import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

const tts = new MsEdgeTTS();

async function check() {
  await tts.setMetadata("en-US-AriaNeural", OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const voices = tts.getVoices();
  console.log(typeof voices, Array.isArray(voices), voices.length);
  // console.log(voices);
}

check().catch(console.error);
