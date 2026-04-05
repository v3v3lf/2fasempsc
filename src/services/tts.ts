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

export async function speak(text: string, onEnd?: () => void, rate?: number) {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = rate ?? 0.95;
  utterance.pitch = 1.0;
  utterance.volume = 1;

  const voices = await loadVoices();

  // Priority: Google pt-BR (most natural) > other Google pt > pt-BR > any pt
  let ptVoice: SpeechSynthesisVoice | undefined;

  // 1st: Google Português do Brasil
  ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.toLowerCase().includes('google'));

  // 2nd: Any Google Portuguese
  if (!ptVoice) {
    ptVoice = voices.find(v => v.lang.startsWith('pt') && v.name.toLowerCase().includes('google'));
  }

  // 3rd: Microsoft Maria (Windows pt-BR)
  if (!ptVoice) {
    ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.toLowerCase().includes('maria'));
  }

  // 4th: Microsoft Daniel (Windows pt-BR male)
  if (!ptVoice) {
    ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.toLowerCase().includes('daniel'));
  }

  // 5th: Any pt-BR
  if (!ptVoice) {
    ptVoice = voices.find(v => v.lang === 'pt-BR');
  }

  // 6th: Any Portuguese
  if (!ptVoice) {
    ptVoice = voices.find(v => v.lang.startsWith('pt'));
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
