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

export async function speak(text: string, onEnd?: () => void) {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.95;
  utterance.pitch = 0.85;
  utterance.volume = 1;

  const voices = await loadVoices();
  const maleNames = ['daniel', 'luciano', 'jorge', 'rafael', 'felipe', 'antonio', 'marcos'];
  let ptVoice: SpeechSynthesisVoice | undefined;
  for (const name of maleNames) {
    ptVoice = voices.find(v => v.lang.startsWith('pt') && v.name.toLowerCase().includes(name));
    if (ptVoice) break;
  }
  if (!ptVoice) {
    ptVoice = voices.find(v => v.lang === 'pt-BR') || voices.find(v => v.lang.startsWith('pt'));
  }
  if (ptVoice) {
    utterance.voice = ptVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  window.speechSynthesis.cancel();
}
