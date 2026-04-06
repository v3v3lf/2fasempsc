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
let globalOnEnd: (() => void) | undefined;
let globalOnBoundary: ((charIndex: number) => void) | undefined;

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
  // Limpar a fila atual antes de cancelar para abortar a sequência anterior
  currentChunks = [];
  window.speechSynthesis.cancel();
  
  currentChunks = chunkText(text, 1500);
  currentChunkIndex = 0;
  globalOnEnd = onEnd;
  globalOnBoundary = onBoundary;
  
  // Pegar vozes de modo síncrono para não perder a interação do usuário (bug do Android)
  const voices = window.speechSynthesis.getVoices();
  let selectedVoice = voices.find(v => v.name === voiceName);
  
  if (!selectedVoice && voices.length > 0) {
    selectedVoice = voices.find(v => v.lang === 'pt-BR' && v.name.toLowerCase().includes('google')) || 
                    voices.find(v => v.lang === 'pt-BR') || 
                    voices.find(v => v.lang.startsWith('pt'));
  }
  
  playNextChunk(rate ?? 0.95, selectedVoice);
}

function playNextChunk(rate: number, voice?: SpeechSynthesisVoice) {
  if (currentChunkIndex >= currentChunks.length) {
    globalOnEnd?.();
    return;
  }
  
  const chunk = currentChunks[currentChunkIndex];
  const utterance = new SpeechSynthesisUtterance(chunk.text);
  utterance.lang = 'pt-BR';
  utterance.rate = rate;
  utterance.pitch = 1.0;
  utterance.volume = 1;
  
  if (voice) {
    utterance.voice = voice;
  }
  
  utterance.onboundary = (e) => {
    globalOnBoundary?.(chunk.offset + e.charIndex);
  };
  
  utterance.onend = () => {
    // Avançar apenas se a fila ainda estiver válida
    if (currentChunks.length === 0) return;
    currentChunkIndex++;
    playNextChunk(rate, voice);
  };
  
  utterance.onerror = (e) => {
    // Ignorar erro se tiver sido cancelado intencionalmente
    if (currentChunks.length === 0) return;
    console.error('TTS Error', e);
    currentChunkIndex++;
    playNextChunk(rate, voice);
  };
  
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  currentChunks = [];
  window.speechSynthesis.cancel();
}

export function pauseSpeaking() {
  window.speechSynthesis.pause();
}

export function resumeSpeaking() {
  window.speechSynthesis.resume();
}
