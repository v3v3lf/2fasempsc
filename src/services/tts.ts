export function speak(text: string, onEnd?: () => void) {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.95;
  utterance.pitch = 0.85;
  utterance.volume = 1;

  const voices = window.speechSynthesis.getVoices();
  const maleNames = ['daniel', 'luciano', 'jorge', 'rafael', 'felipe', 'antonio', 'marcos', 'google'];
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
