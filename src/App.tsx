import { useState, useEffect } from 'react';
import { documents, LegalDocument, DocumentCategory } from './data/documents';
import { speak, stopSpeaking } from './services/tts';

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
  const [theme, setTheme] = useState<ThemeKey>('light');

  const t = THEMES[theme];
  const filteredDocs = documents.filter(doc => doc.category === activeCategory);

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

  const handlePlay = () => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else if (selectedDoc) {
      speak(selectedDoc.content, () => setIsSpeaking(false), SPEED_OPTIONS[speedIdx]);
      setIsSpeaking(true);
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
    };
    if (showSpeedMenu || showThemeMenu || showFontMenu) {
      document.addEventListener('click', close);
      return () => document.removeEventListener('click', close);
    }
  }, [showSpeedMenu, showThemeMenu, showFontMenu]);

  const themeColors: Record<ThemeKey, string> = {
    light: 'bg-white border-gray-300',
    gray: 'bg-gray-400 border-gray-500',
    dark: 'bg-gray-900 border-gray-600',
    sepia: 'bg-amber-200 border-amber-400',
  };

  return (
    <div className={`flex flex-col min-h-screen w-full ${t.bg} transition-colors duration-300`}>
      <header className={`${t.headerBg} shadow-md px-3 py-2.5 flex items-center gap-2 flex-wrap`}>
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

        <div className="flex-1 min-w-0">
          <h1 className={`text-lg md:text-2xl font-bold ${t.headerText} truncate`}>📚 Peças Jurídicas</h1>
          <p className={`${t.headerSubtext} text-xs mt-0.5 hidden sm:block`}>{documents.length} documentos disponíveis</p>
        </div>

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

          <button
            onClick={handlePlay}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all shadow-sm ${
              isSpeaking
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSpeaking ? (
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
