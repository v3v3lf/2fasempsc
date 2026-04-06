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

let currentChunks: { text: string; offset: number }[] = [];
let currentChunkIndex = 0;
let currentRate = 0.95;
let currentVoice: SpeechSynthesisVoice | undefined;
let globalOnEnd: (() => void) | undefined;
let globalOnBoundary: ((charIndex: number) => void) | undefined;
let isPaused = false;

function chunkText(text: string, maxLength: number): { text: string; offset: number }[] {
  const chunks: { text: string; offset: number }[] = [];
  let start = 0;
  while (start < text.length) {
    let end = start + maxLength;
    if (end >= text.length) {
      chunks.push({ text: text.slice(start), offset: start });
      break;
    }
    
    // Procurar um bom local para quebra de texto
    let breakPoint = end;
    const lastPunct = Math.max(text.lastIndexOf('.', end), text.lastIndexOf('\n', end), text.lastIndexOf('?', end), text.lastIndexOf(';', end));
    
    if (lastPunct > start && lastPunct > end - 500) {
      breakPoint = lastPunct + 1;
    } else {
      const lastSpace = text.lastIndexOf(' ', end);
      if (lastSpace > start) {
        breakPoint = lastSpace + 1;
      }
    }
    
    chunks.push({ text: text.slice(start, breakPoint), offset: start });
    start = breakPoint;
  }
  return chunks;
}

export function speak(
  text: string,
  onEnd?: () => void,
  rate?: number,
  voiceName?: string,
  onBoundary?: (charIndex: number) => void,
) {
  currentChunks = [];
  window.speechSynthesis.cancel();
  
  currentChunks = chunkText(text, 1500);
  currentChunkIndex = 0;
  currentRate = rate ?? 0.95;
  globalOnEnd = onEnd;
  globalOnBoundary = onBoundary;
  isPaused = false;
  
  const voices = window.speechSynthesis.getVoices();
  let selectedVoice = voices.find(v => v.name === voiceName);
  
  if (!selectedVoice && voices.length > 0) {
    selectedVoice = voices.find(v => v.lang === 'pt-BR' && v.name.toLowerCase().includes('google')) || 
                    voices.find(v => v.lang === 'pt-BR') || 
                    voices.find(v => v.lang.startsWith('pt'));
  }
  
  currentVoice = selectedVoice;
  playNextChunk();
}

function playNextChunk() {
  if (currentChunkIndex >= currentChunks.length) {
    globalOnEnd?.();
    return;
  }
  
  const chunk = currentChunks[currentChunkIndex];
  const utterance = new SpeechSynthesisUtterance(chunk.text);
  utterance.lang = 'pt-BR';
  utterance.rate = currentRate;
  utterance.pitch = 1.0;
  utterance.volume = 1;
  
  if (currentVoice) {
    utterance.voice = currentVoice;
  }
  
  utterance.onboundary = (e) => {
    globalOnBoundary?.(chunk.offset + e.charIndex);
  };
  
  utterance.onend = () => {
    if (currentChunks.length === 0 || isPaused) return;
    currentChunkIndex++;
    playNextChunk();
  };
  
  utterance.onerror = (e) => {
    if (currentChunks.length === 0 || isPaused) return;
    console.error('TTS Error', e);
    currentChunkIndex++;
    playNextChunk();
  };
  
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  currentChunks = [];
  currentChunkIndex = 0;
  isPaused = false;
  window.speechSynthesis.cancel();
}

export function pauseSpeaking() {
  if (currentChunks.length === 0) return;
  isPaused = true;
  window.speechSynthesis.cancel();
}

export function resumeSpeaking() {
  if (currentChunks.length === 0 || currentChunkIndex >= currentChunks.length) return;
  isPaused = false;
  playNextChunk();
}
