import { useState, useEffect, useRef } from 'react';
import { documents, LegalDocument, DocumentCategory } from './data/documents';
import { speak, stopSpeaking, getAvailableVoices, VoiceOption, generateGeminiAudio, getCachedAudio, saveAudioToCache } from './services/tts';

const FONT_SIZES = [
  { label: 'A-', value: 'text-xs' },
  { label: 'A', value: 'text-sm' },
  { label: 'A+', value: 'text-base' },
  { label: 'A++', value: 'text-lg' },
  { label: 'A+++', value: 'text-xl' },
  { label: 'A++++', value: 'text-2xl' },
  { label: 'A+++++', value: 'text-3xl' },
];

const SPEED_OPTIONS = [0.70, 0.80, 0.90, 0.95, 1.00, 1.10, 1.20, 1.30, 1.40];

const THEMES = {
  light: {
    name: 'Claro',
    bg: 'bg-white',
    text: 'text-gray-900',
    headerBg: 'bg-white',
    headerText: 'text-gray-900',
    headerSubtext: 'text-gray-500',
    sidebarBg: 'bg-white',
    sidebarBorder: 'border-gray-200',
    sidebarText: 'text-gray-700',
    sidebarActive: 'bg-blue-50 text-blue-800 border-blue-600',
    sidebarHover: 'hover:bg-gray-50',
    cardBg: 'bg-white',
    contentText: 'text-gray-700',
    btnIcon: 'text-gray-600',
    btnBg: 'bg-gray-100',
    btnHover: 'hover:bg-gray-200',
    emptyText: 'text-gray-400',
    overlay: 'bg-black/30',
    speedMenuBg: 'bg-white',
    speedMenuBorder: 'border-gray-200',
    speedMenuActive: 'bg-blue-50 text-blue-700',
    speedMenuHover: 'hover:bg-gray-50',
    speedMenuText: 'text-gray-700',
  },
  gray: {
    name: 'Cinza',
    bg: 'bg-gray-200',
    text: 'text-gray-900',
    headerBg: 'bg-gray-300',
    headerText: 'text-gray-900',
    headerSubtext: 'text-gray-600',
    sidebarBg: 'bg-gray-100',
    sidebarBorder: 'border-gray-300',
    sidebarText: 'text-gray-800',
    sidebarActive: 'bg-gray-300 text-gray-900 border-gray-600',
    sidebarHover: 'hover:bg-gray-200',
    cardBg: 'bg-gray-100',
    contentText: 'text-gray-800',
    btnIcon: 'text-gray-700',
    btnBg: 'bg-gray-200',
    btnHover: 'hover:bg-gray-300',
    emptyText: 'text-gray-500',
    overlay: 'bg-black/40',
    speedMenuBg: 'bg-gray-100',
    speedMenuBorder: 'border-gray-300',
    speedMenuActive: 'bg-gray-300 text-gray-900',
    speedMenuHover: 'hover:bg-gray-200',
    speedMenuText: 'text-gray-800',
  },
  dark: {
    name: 'Escuro',
    bg: 'bg-gray-950',
    text: 'text-white',
    headerBg: 'bg-gray-900',
    headerText: 'text-white',
    headerSubtext: 'text-gray-400',
    sidebarBg: 'bg-gray-900',
    sidebarBorder: 'border-gray-700',
    sidebarText: 'text-gray-300',
    sidebarActive: 'bg-gray-800 text-white border-blue-400',
    sidebarHover: 'hover:bg-gray-800',
    cardBg: 'bg-gray-900',
    contentText: 'text-gray-200',
    btnIcon: 'text-gray-300',
    btnBg: 'bg-gray-800',
    btnHover: 'hover:bg-gray-700',
    emptyText: 'text-gray-600',
    overlay: 'bg-black/60',
    speedMenuBg: 'bg-gray-800',
    speedMenuBorder: 'border-gray-600',
    speedMenuActive: 'bg-gray-700 text-white',
    speedMenuHover: 'hover:bg-gray-700',
    speedMenuText: 'text-gray-300',
  },
  sepia: {
    name: 'Sépia',
    bg: 'bg-amber-50',
    text: 'text-amber-950',
    headerBg: 'bg-amber-100',
    headerText: 'text-amber-950',
    headerSubtext: 'text-amber-700',
    sidebarBg: 'bg-amber-50',
    sidebarBorder: 'border-amber-200',
    sidebarText: 'text-amber-900',
    sidebarActive: 'bg-amber-200 text-amber-950 border-amber-700',
    sidebarHover: 'hover:bg-amber-100',
    cardBg: 'bg-amber-50',
    contentText: 'text-amber-900',
    btnIcon: 'text-amber-800',
    btnBg: 'bg-amber-100',
    btnHover: 'hover:bg-amber-200',
    emptyText: 'text-amber-400',
    overlay: 'bg-black/30',
    speedMenuBg: 'bg-amber-50',
    speedMenuBorder: 'border-amber-200',
    speedMenuActive: 'bg-amber-200 text-amber-950',
    speedMenuHover: 'hover:bg-amber-100',
    speedMenuText: 'text-amber-900',
  },
};

type ThemeKey = keyof typeof THEMES;

export default function App() {
  const [activeCategory, setActiveCategory] = useState<DocumentCategory>('Crime');
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [fontSizeIdx, setFontSizeIdx] = useState(1);
  const [speedIdx, setSpeedIdx] = useState(4);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showFontMenu, setShowFontMenu] = useState(false);
  const [showVoiceMenu, setShowVoiceMenu] = useState(false);
  const [voices, setVoices] = useState<VoiceOption[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>(() => {
    return localStorage.getItem('preferredVoice') || '';
  });
  const [theme, setTheme] = useState<ThemeKey>('light');
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('geminiApiKey') || '');
  const [useGeminiTts, setUseGeminiTts] = useState(() => localStorage.getItem('useGeminiTts') === 'true');
  const [geminiAudioLoading, setGeminiAudioLoading] = useState(false);
  const [geminiAudioSrc, setGeminiAudioSrc] = useState<string | null>(null);
  const [geminiAudioPlaying, setGeminiAudioPlaying] = useState(false);
  const [geminiAudioProgress, setGeminiAudioProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const t = THEMES[theme];
  const filteredDocs = documents.filter(doc => doc.category === activeCategory);

  useEffect(() => {
    getAvailableVoices().then(setVoices);
  }, []);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (filteredDocs.length > 0 && !selectedDoc) {
      setSelectedDoc(filteredDocs[0]);
    } else if (selectedDoc && selectedDoc.category !== activeCategory) {
      setSelectedDoc(filteredDocs.length > 0 ? filteredDocs[0] : null);
    }
    stopSpeaking();
    setIsSpeaking(false);
  }, [activeCategory]);

  const handlePlay = async () => {
    if (isSpeaking || geminiAudioPlaying) {
      stopSpeaking();
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsSpeaking(false);
      setGeminiAudioPlaying(false);
    } else if (selectedDoc) {
      if (useGeminiTts && apiKey) {
        const docId = selectedDoc.id;
        let audioData = await getCachedAudio(docId);
        
        if (!audioData) {
          setGeminiAudioLoading(true);
          try {
            audioData = await generateGeminiAudio(selectedDoc.content, apiKey);
            await saveAudioToCache(docId, audioData);
          } catch (error) {
            console.error('Failed to generate Gemini audio:', error);
            setGeminiAudioLoading(false);
            return;
          }
          setGeminiAudioLoading(false);
        }
        
        const blob = new Blob([audioData], { type: 'audio/mp3' });
        const url = URL.createObjectURL(blob);
        setGeminiAudioSrc(url);
        
        const audio = new Audio(url);
        audioRef.current = audio;
        
        audio.onended = () => {
          setGeminiAudioPlaying(false);
          setGeminiAudioProgress(0);
          URL.revokeObjectURL(url);
        };
        
        audio.ontimeupdate = () => {
          setGeminiAudioProgress((audio.currentTime / audio.duration) * 100);
        };
        
        audio.play();
        setGeminiAudioPlaying(true);
      } else {
        speak(selectedDoc.content, () => setIsSpeaking(false), SPEED_OPTIONS[speedIdx], selectedVoice);
        setIsSpeaking(true);
      }
    }
  };

  const handleSelectDoc = (doc: LegalDocument) => {
    stopSpeaking();
    setIsSpeaking(false);
    setSelectedDoc(doc);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  useEffect(() => {
    const close = () => {
      setShowSpeedMenu(false);
      setShowThemeMenu(false);
      setShowFontMenu(false);
      setShowVoiceMenu(false);
      setShowSettings(false);
    };
    if (showSpeedMenu || showThemeMenu || showFontMenu || showVoiceMenu || showSettings) {
      document.addEventListener('click', close);
      return () => document.removeEventListener('click', close);
    }
  }, [showSpeedMenu, showThemeMenu, showFontMenu, showVoiceMenu, showSettings]);

  const themeColors: Record<ThemeKey, string> = {
    light: 'bg-white border-gray-300',
    gray: 'bg-gray-400 border-gray-500',
    dark: 'bg-gray-900 border-gray-600',
    sepia: 'bg-amber-200 border-amber-400',
  };

  return (
    <div className={`flex flex-col min-h-screen w-full ${t.bg} transition-colors duration-300`}>
      <header className={`${t.headerBg} shadow-md px-3 py-2.5 flex items-center justify-center gap-3 flex-wrap`}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`p-2 rounded-lg ${t.btnHover} transition-colors flex-shrink-0`}
        >
          <svg className={`w-5 h-5 ${t.btnIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {sidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <h1 className={`text-xl md:text-2xl font-bold ${t.headerText}`}>MPSC</h1>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setShowFontMenu(!showFontMenu); setShowSpeedMenu(false); setShowThemeMenu(false); }}
              className={`flex items-center gap-1 px-2 py-1.5 ${t.btnBg} rounded-lg text-xs font-medium ${t.btnIcon} ${t.btnHover} transition-colors`}
            >
              <span className="font-bold">A</span>
              <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showFontMenu && (
              <div className={`absolute right-0 top-full mt-1 ${t.speedMenuBg} rounded-lg shadow-lg border ${t.speedMenuBorder} py-1 z-50 min-w-[100px]`}>
                {FONT_SIZES.map((fs, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setFontSizeIdx(i); setShowFontMenu(false); }}
                    className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                      fontSizeIdx === i
                        ? t.speedMenuActive
                        : `${t.speedMenuText} ${t.speedMenuHover}`
                    }`}
                  >
                    <span className={fs.value}>{fs.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setShowSpeedMenu(!showSpeedMenu); setShowThemeMenu(false); }}
              className={`flex items-center gap-1 px-2 py-1.5 ${t.btnBg} rounded-lg text-xs font-medium ${t.btnIcon} ${t.btnHover} transition-colors`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="hidden sm:inline">{SPEED_OPTIONS[speedIdx].toFixed(2)}x</span>
              <span className="sm:hidden">{SPEED_OPTIONS[speedIdx].toFixed(1)}x</span>
            </button>
            {showSpeedMenu && (
              <div className={`absolute right-0 top-full mt-1 ${t.speedMenuBg} rounded-lg shadow-lg border ${t.speedMenuBorder} py-1 z-50 min-w-[100px]`}>
                {SPEED_OPTIONS.map((speed, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSpeedIdx(i); setShowSpeedMenu(false); }}
                    className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                      speedIdx === i
                        ? t.speedMenuActive
                        : `${t.speedMenuText} ${t.speedMenuHover}`
                    }`}
                  >
                    {speed.toFixed(2)}x
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setShowThemeMenu(!showThemeMenu); setShowSpeedMenu(false); }}
              className={`flex items-center gap-1 px-2 py-1.5 ${t.btnBg} rounded-lg text-xs font-medium ${t.btnIcon} ${t.btnHover} transition-colors`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12.5" />
              </svg>
            </button>
            {showThemeMenu && (
              <div className={`absolute right-0 top-full mt-1 ${t.speedMenuBg} rounded-lg shadow-lg border ${t.speedMenuBorder} py-2 px-2 z-50 min-w-[140px]`}>
                <p className={`text-xs font-medium ${t.speedMenuText} px-2 pb-1.5`}>Tema</p>
                {(Object.keys(THEMES) as ThemeKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={(e) => { e.stopPropagation(); setTheme(key); setShowThemeMenu(false); }}
                    className={`w-full text-left px-3 py-1.5 text-sm transition-colors rounded flex items-center gap-2 ${
                      theme === key
                        ? t.speedMenuActive
                        : `${t.speedMenuText} ${t.speedMenuHover}`
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border ${themeColors[key]}`} />
                    {THEMES[key].name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setShowVoiceMenu(!showVoiceMenu); setShowThemeMenu(false); setShowSpeedMenu(false); setShowFontMenu(false); setShowSettings(false); }}
              className={`flex items-center gap-1 px-2 py-1.5 ${t.btnBg} rounded-lg text-xs font-medium ${t.btnIcon} ${t.btnHover} transition-colors`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            {showVoiceMenu && (
              <div className={`absolute right-0 top-full mt-1 ${t.speedMenuBg} rounded-lg shadow-lg border ${t.speedMenuBorder} py-1 z-50 min-w-[200px] max-h-64 overflow-y-auto`}>
                <p className={`text-xs font-medium ${t.speedMenuText} px-3 py-1.5 border-b ${t.speedMenuBorder}`}>Voz</p>
                {voices.length === 0 && (
                  <p className={`px-3 py-2 text-xs ${t.speedMenuText} italic`}>Carregando vozes...</p>
                )}
                {voices.map((voice, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVoice(voice.name);
                      localStorage.setItem('preferredVoice', voice.name);
                      setShowVoiceMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                      selectedVoice === voice.name
                        ? t.speedMenuActive
                        : `${t.speedMenuText} ${t.speedMenuHover}`
                    }`}
                  >
                    <span className="mr-1.5">{selectedVoice === voice.name ? '●' : '○'}</span>
                    {voice.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setShowSettings(!showSettings); setShowThemeMenu(false); setShowSpeedMenu(false); setShowFontMenu(false); setShowVoiceMenu(false); }}
              className={`flex items-center gap-1 px-2 py-1.5 ${t.btnBg} rounded-lg text-xs font-medium ${t.btnIcon} ${t.btnHover} transition-colors`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            {showSettings && (
              <div className={`absolute right-0 top-full mt-1 ${t.speedMenuBg} rounded-lg shadow-lg border ${t.speedMenuBorder} py-3 z-50 min-w-[280px]`}>
                <p className={`text-xs font-medium ${t.speedMenuText} px-3 pb-2 border-b ${t.speedMenuBorder} mb-2`}>Configurações de Áudio</p>
                <div className="px-3 py-2">
                  <div className="flex items-center justify-between mb-1">
                    <label className={`text-xs font-medium ${t.speedMenuText}`}>API Key do Gemini</label>
                    <a
                      href="https://aistudio.google.com/apikey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline"
                    >
                      Obter API Key
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Cole sua API key aqui..."
                      className={`flex-1 px-2 py-1.5 text-sm rounded border ${t.speedMenuBorder} ${t.speedMenuText} bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    />
                    <button
                      onClick={() => { localStorage.setItem('geminiApiKey', apiKey); }}
                      className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Salvar
                    </button>
                  </div>
                </div>
                <div className="px-3 py-2 border-t border-gray-100">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={useGeminiTts}
                      onChange={(e) => { setUseGeminiTts(e.target.checked); localStorage.setItem('useGeminiTts', e.target.checked.toString()); }}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className={`text-sm ${t.speedMenuText}`}>Usar Gemini TTS</span>
                  </label>
                  <p className={`text-xs ${t.speedMenuText} opacity-70 mt-1 ml-6`}>
                    {useGeminiTts ? 'Audio via IA (online)' : 'Voz do navegador (offline)'}
                  </p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handlePlay}
            disabled={geminiAudioLoading}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all shadow-sm disabled:opacity-50 ${
              isSpeaking || geminiAudioPlaying
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {geminiAudioLoading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="hidden sm:inline">Gerando...</span>
              </>
            ) : isSpeaking || geminiAudioPlaying ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="6" y="4" width="4" height="12" rx="1" />
                  <rect x="12" y="4" width="4" height="12" rx="1" />
                </svg>
                <span className="hidden sm:inline">Parar</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                <span className="hidden sm:inline">Ouvir</span>
              </>
            )}
          </button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {isMobile && sidebarOpen && (
          <div
            className={`fixed inset-0 ${t.overlay} z-20 md:hidden`}
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside className={`
          fixed md:relative z-30 md:z-auto
          top-0 left-0 h-full md:h-auto
          w-72 md:w-80
          ${t.sidebarBg} border-r ${t.sidebarBorder} overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0 md:translate-x-0' : '-translate-x-full md:hidden'}
          ${isMobile ? 'shadow-2xl' : ''}
        `}>
          <div className={`p-4 border-b ${t.sidebarBorder} sticky top-0 ${t.sidebarBg} z-10`}>
            <div className="flex flex-wrap gap-2">
              {(['Crime', 'Cível', 'Teoria - Crime', 'Teoria - Cível'] as DocumentCategory[]).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white'
                      : `${t.btnBg} ${t.sidebarText} ${t.btnHover}`
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <nav className="p-2">
            {filteredDocs.map(doc => (
              <button
                key={doc.id}
                onClick={() => handleSelectDoc(doc)}
                className={`w-full text-left px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-xs md:text-sm transition-colors mb-1 ${
                  selectedDoc?.id === doc.id
                    ? t.sidebarActive
                    : `${t.sidebarText} ${t.sidebarHover}`
                }`}
              >
                {doc.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto p-3 md:p-6 lg:p-8">
          {selectedDoc ? (
            <div className={`max-w-4xl mx-auto ${t.cardBg} rounded-xl shadow-lg p-4 md:p-6 lg:p-8`}>
              <h2 className={`text-lg md:text-2xl font-bold ${t.headerText} mb-4 md:mb-6`}>{selectedDoc.title}</h2>
              <div className="prose prose-gray max-w-none">
                <pre className={`whitespace-pre-wrap font-sans ${t.contentText} leading-relaxed ${FONT_SIZES[fontSizeIdx].value}`}>
                  {selectedDoc.content}
                </pre>
              </div>
            </div>
          ) : (
            <div className={`flex items-center justify-center h-full ${t.emptyText}`}>
              Selecione um documento na barra lateral
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
