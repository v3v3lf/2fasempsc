import { useState, useEffect } from 'react';
import { documents, LegalDocument, DocumentCategory } from './data/documents';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<DocumentCategory>('Crime');
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(null);

  const filteredDocs = documents.filter(doc => doc.category === activeCategory);

  useEffect(() => {
    if (filteredDocs.length > 0 && !selectedDoc) {
      setSelectedDoc(filteredDocs[0]);
    } else if (selectedDoc && selectedDoc.category !== activeCategory) {
      setSelectedDoc(filteredDocs.length > 0 ? filteredDocs[0] : null);
    }
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-md px-6 py-4">
        <h1 className="text-3xl font-bold text-blue-900">📚 Peças Jurídicas</h1>
        <p className="text-gray-500 text-sm mt-1">{documents.length} documentos disponíveis</p>
      </header>

      <div className="flex flex-1">
        <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4 border-b border-gray-100">
            <div className="flex flex-wrap gap-2">
              {(['Crime', 'Cível', 'Teoria - Crime', 'Teoria - Cível'] as DocumentCategory[]).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
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
                onClick={() => setSelectedDoc(doc)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors mb-1 ${
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

        <main className="flex-1 overflow-y-auto p-8">
          {selectedDoc ? (
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">{selectedDoc.title}</h2>
              <div className="prose prose-gray max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed text-sm">
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
