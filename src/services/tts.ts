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

export async function speak(
  text: string,
  onEnd?: () => void,
  rate?: number,
  voiceName?: string,
  onBoundary?: (charIndex: number) => void,
) {
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

  if (onBoundary) {
    utterance.onboundary = (event) => {
      onBoundary(event.charIndex);
    };
  }

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = () => onEnd();
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  window.speechSynthesis.cancel();
}
