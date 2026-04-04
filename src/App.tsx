import { useState, useRef, useEffect } from 'react';
import { documents, LegalDocument, DocumentCategory } from './data/documents';
import { generateAudio, checkAudioCache } from './services/tts';
import { Play, Pause, Square, Download, FileText, Loader2, Scale, Database, Menu, WifiOff, Wifi, Key, ExternalLink, X } from 'lucide-react';

export default function App() {
  // Log that app is mounting
  useEffect(() => {
    console.log('App mounted successfully');
    console.log('Documents loaded:', documents.length);
  }, []);

  const [activeCategory, setActiveCategory] = useState<DocumentCategory>('Crime');
  
  // Filter documents by active category
  const filteredDocs = documents.filter(doc => doc.category === activeCategory);
  
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(() => {
    const filtered = documents.filter(doc => doc.category === 'Crime');
    return filtered.length > 0 ? filtered[0] : null;
  });
  const [audioUrls, setAudioUrls] = useState<Record<string, string>>({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBatchDownloading, setIsBatchDownloading] = useState(false);
  const [batchProgress, setBatchProgress] = useState(0);
  const [isPrefetching, setIsPrefetching] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [customApiKey, setCustomApiKey] = useState(() => localStorage.getItem('gemini_api_key') || '');
  const [tempApiKey, setTempApiKey] = useState('');
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Load cached audios on mount
  useEffect(() => {
    const loadCache = async () => {
      const newUrls: Record<string, string> = {};
      for (const doc of documents) {
        const cachedUrl = await checkAudioCache(doc.id);
        if (cachedUrl) {
          newUrls[doc.id] = cachedUrl;
        }
      }
      setAudioUrls(prev => ({ ...prev, ...newUrls }));
    };
    loadCache();
  }, []);

  // Background prefetcher to automatically generate and cache all audios
  useEffect(() => {
    let isMounted = true;
    const prefetch = async () => {
      for (const doc of documents) {
        if (!isMounted) break;
        const cachedUrl = await checkAudioCache(doc.id);
        if (!cachedUrl) {
          if (!navigator.onLine) continue; // Skip generating if offline
          
          let success = false;
          let retries = 0;
          const maxRetries = 3;

          while (!success && retries < maxRetries && isMounted) {
            try {
              const url = await generateAudio(doc.content, doc.id, customApiKey);
              if (isMounted) {
                setAudioUrls(prev => ({ ...prev, [doc.id]: url }));
              }
              success = true;
              // Wait 5 seconds between successful requests to be safe
              await new Promise(r => setTimeout(r, 5000));
            } catch (err: any) {
              console.error(`Prefetch failed for ${doc.id} (Attempt ${retries + 1}):`, err);
              retries++;
              
              // If it's a rate limit (429), wait significantly longer
              const isRateLimit = err.message?.includes('429') || err.status === 429;
              const delay = isRateLimit ? 15000 * retries : 5000;
              
              if (retries < maxRetries) {
                await new Promise(r => setTimeout(r, delay));
              }
            }
          }
        }
      }
      if (isMounted) setIsPrefetching(false);
    };
    
    const timeout = setTimeout(prefetch, 2000);
    
    return () => { 
      isMounted = false; 
      clearTimeout(timeout);
    };
  }, [customApiKey]); // Re-run if API key changes

  // Update selected doc when category changes
  useEffect(() => {
    const filtered = documents.filter(doc => doc.category === activeCategory);
    setSelectedDoc(filtered.length > 0 ? filtered[0] : null);
  }, [activeCategory]);

  // Stop audio when switching documents
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setError(null);
  }, [selectedDoc]);

  const handlePlayPause = async () => {
    if (!selectedDoc) {
      setError("Nenhum documento selecionado");
      return;
    }

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }

    // If we already have the audio for this doc, just play it
    if (audioUrls[selectedDoc.id]) {
      if (!audioRef.current) {
        audioRef.current = new Audio(audioUrls[selectedDoc.id]);
        audioRef.current.onended = () => setIsPlaying(false);
      } else if (audioRef.current.src !== audioUrls[selectedDoc.id]) {
        audioRef.current.src = audioUrls[selectedDoc.id];
      }
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }

    // Otherwise, generate the audio
    if (isOffline) {
      setError("Você está offline e este áudio ainda não foi salvo no aplicativo. Conecte-se à internet para gerá-lo pela primeira vez.");
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const url = await generateAudio(selectedDoc.content, selectedDoc.id, customApiKey);
      setAudioUrls((prev) => ({ ...prev, [selectedDoc.id]: url }));
      
      if (!audioRef.current) {
        audioRef.current = new Audio(url);
        audioRef.current.onended = () => setIsPlaying(false);
      } else {
        audioRef.current.src = url;
      }
      
      audioRef.current.play();
      setIsPlaying(true);
    } catch (err: any) {
      setError(`Erro ao gerar áudio: ${err.message || 'Erro desconhecido'}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleDownload = () => {
    if (!selectedDoc) return;
    const url = audioUrls[selectedDoc.id];
    if (!url) return;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `Audio_${selectedDoc.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.wav`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleBatchDownload = async () => {
    if (isOffline) {
      setError("Você está offline. O download em lote requer conexão com a internet caso algum áudio ainda não tenha sido gerado.");
      return;
    }

    setIsBatchDownloading(true);
    setBatchProgress(0);
    setError(null);
    
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      
      const newAudioUrls = { ...audioUrls };

      for (let i = 0; i < filteredDocs.length; i++) {
        const doc = filteredDocs[i];
        let url = newAudioUrls[doc.id];
        
        if (!url) {
          url = await generateAudio(doc.content, doc.id, customApiKey);
          newAudioUrls[doc.id] = url;
        }
        
        const response = await fetch(url);
        const blob = await response.blob();
        
        const filename = `Audio_${doc.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.wav`;
        zip.file(filename, blob);
        
        setBatchProgress(i + 1);
      }
      
      setAudioUrls(newAudioUrls);
      
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(zipBlob);
      a.download = `Audios_Juridicos_${activeCategory}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
    } catch (err: any) {
      setError(`Erro ao gerar lote de áudios: ${err.message || 'Erro desconhecido'}`);
      console.error(err);
    } finally {
      setIsBatchDownloading(false);
      setBatchProgress(0);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-80 shrink-0 bg-white border-r border-gray-200 flex flex-col h-full shadow-sm z-10">
          <div className="p-6 border-b border-gray-200 bg-blue-50">
          <h1 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <Scale className="w-6 h-6" />
            Peças Jurídicas
          </h1>
          <p className="text-sm text-blue-700 mt-2 mb-4">
            Modelos de documentos com leitura suave para aprendizado.
          </p>
          
          {isPrefetching && (
            <div className="flex items-center gap-2 text-xs text-blue-600 mb-4 bg-blue-100/50 p-2 rounded-md">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Salvando áudios no app em segundo plano...</span>
            </div>
          )}

          <button
            onClick={handleBatchDownload}
            disabled={isBatchDownloading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isBatchDownloading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Gerando {batchProgress}/{filteredDocs.length}...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Baixar Lote ({activeCategory})
              </>
            )}
          </button>
        </div>
        
        {/* Category Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          <button
            onClick={() => setActiveCategory('Crime')}
            className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
              activeCategory === 'Crime' 
                ? 'border-b-2 border-blue-600 text-blue-700 bg-white' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            Crime
          </button>
          <button
            onClick={() => setActiveCategory('Teoria - Crime')}
            className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
              activeCategory === 'Teoria - Crime' 
                ? 'border-b-2 border-blue-600 text-blue-700 bg-white' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            Teoria - Crime
          </button>
          <button
            onClick={() => setActiveCategory('Teoria - Cível')}
            className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
              activeCategory === 'Teoria - Cível' 
                ? 'border-b-2 border-blue-600 text-blue-700 bg-white' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            Teoria - Cível
          </button>
          <button
            onClick={() => setActiveCategory('Cível')}
            className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
              activeCategory === 'Cível' 
                ? 'border-b-2 border-blue-600 text-blue-700 bg-white' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            Cível
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {filteredDocs.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-start gap-3 ${
                selectedDoc?.id === doc.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <FileText className={`w-5 h-5 shrink-0 mt-0.5 ${selectedDoc?.id === doc.id ? 'text-blue-200' : 'text-gray-400'}`} />
              <span className="text-sm font-medium leading-snug">{doc.title}</span>
            </button>
          ))}
        </div>

        {/* Settings Button */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => {
              setTempApiKey(customApiKey);
              setIsSettingsOpen(true);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
          >
            <Key className="w-4 h-4" />
            Configurar Chave API
          </button>
        </div>
      </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6 shadow-sm z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {isOffline && (
              <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-sm font-medium border border-amber-200">
                <WifiOff className="w-4 h-4" />
                Modo Offline
              </div>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 -ml-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
              title={isSidebarOpen ? "Esconder menu" : "Mostrar menu"}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-gray-800">{selectedDoc?.title}</h2>
          </div>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium border border-gray-200">
            {activeCategory}
          </span>
        </header>

        {/* Document Text */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-sm border border-gray-100 pb-32">
            {!selectedDoc ? (
              <div className="p-4 bg-yellow-50 text-yellow-700 rounded-lg border border-yellow-200">
                Nenhum documento disponível para esta categoria.
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                    {error}
                  </div>
                )}
                <div className="prose prose-blue max-w-none">
                  {selectedDoc.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-gray-700 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </main>

        {/* Audio Controls (Sticky Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePlayPause}
                disabled={isLoading}
                className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                title={isPlaying ? "Pausar" : "Ouvir Áudio"}
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-6 h-6 fill-current" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-1" />
                )}
              </button>
              
              <button
                onClick={handleStop}
                disabled={!isPlaying && !audioUrls[selectedDoc?.id]}
                className="p-3 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
                title="Parar"
              >
                <Square className="w-5 h-5 fill-current" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              {audioUrls[selectedDoc?.id] && (
                <span className="flex items-center gap-1 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200" title="Salvo no cache do navegador">
                  <Database className="w-3.5 h-3.5" />
                  Salvo no App
                </span>
              )}
              <button
                onClick={handleDownload}
                disabled={!audioUrls[selectedDoc?.id]}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
                Baixar Áudio
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Key className="w-5 h-5 text-blue-600" />
                Configuração da API Gemini
              </h3>
              <button 
                onClick={() => setIsSettingsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-600">
                Para gerar novos áudios, você pode usar sua própria chave da API do Google Gemini. 
                Isso evita limites de uso da chave padrão. A chave fica salva apenas no seu navegador.
              </p>
              
              <div className="space-y-2">
                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">
                  Sua Chave API (Gemini)
                </label>
                <input
                  id="apiKey"
                  type="password"
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Obter uma chave API gratuita <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setCustomApiKey(tempApiKey);
                  localStorage.setItem('gemini_api_key', tempApiKey);
                  setIsSettingsOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Salvar Chave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
