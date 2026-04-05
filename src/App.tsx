import { useState, useEffect } from 'react';
import { documents, LegalDocument, DocumentCategory } from './data/documents';
import { speak, stopSpeaking } from './services/tts';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<DocumentCategory>('Crime');
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
      speak(selectedDoc.content, () => setIsSpeaking(false));
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

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-md px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {sidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-3xl font-bold text-blue-900 truncate">📚 Peças Jurídicas</h1>
          <p className="text-gray-500 text-xs md:text-sm mt-0.5">{documents.length} documentos disponíveis</p>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside className={`
          fixed md:relative z-30 md:z-auto
          top-0 left-0 h-full md:h-auto
          w-72 md:w-80
          bg-white border-r border-gray-200 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0 md:translate-x-0' : '-translate-x-full md:-translate-x-full'}
          ${isMobile ? 'shadow-2xl' : ''}
        `}>
          <div className="p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
            <div className="flex flex-wrap gap-2">
              {(['Crime', 'Cível', 'Teoria - Crime', 'Teoria - Cível'] as DocumentCategory[]).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    ? 'bg-blue-50 text-blue-800 font-medium border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {doc.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto p-3 md:p-6 lg:p-8">
          {selectedDoc ? (
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4 md:mb-6 gap-2">
                <h2 className="text-lg md:text-2xl font-bold text-blue-900 flex-1 min-w-0 truncate">{selectedDoc.title}</h2>
                <button
                  onClick={handlePlay}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-sm md:text-base font-medium transition-all shadow-sm flex-shrink-0 ${
                    isSpeaking
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSpeaking ? (
                    <>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <rect x="6" y="4" width="4" height="12" rx="1" />
                        <rect x="12" y="4" width="4" height="12" rx="1" />
                      </svg>
                      <span className="hidden sm:inline">Parar</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                      <span className="hidden sm:inline">Ouvir</span>
                    </>
                  )}
                </button>
              </div>
              <div className="prose prose-gray max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed text-xs md:text-sm">
                  {selectedDoc.content}
                </pre>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Selecione um documento na barra lateral
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
