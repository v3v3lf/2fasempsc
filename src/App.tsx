import { useState, useEffect } from 'react';
import { documents, LegalDocument, DocumentCategory } from './data/documents';

export default function App() {
  useEffect(() => {
    console.log('App mounted successfully');
    console.log('Documents loaded:', documents.length);
    if (documents.length > 0) {
      console.log('First document:', documents[0]);
    }
  }, []);

  const [activeCategory, setActiveCategory] = useState<DocumentCategory>('Crime');
  
  const [selectedDoc, setSelectedDoc] = useState<LegalDocument | null>(() => {
    const filtered = documents.filter(doc => doc.category === 'Crime');
    return filtered.length > 0 ? filtered[0] : null;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">📚 Peças Jurídicas</h1>
        
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-gray-700 mb-2"><strong>✅ Status:</strong> Aplicação carregada</p>
          <p className="text-gray-700 mb-2"><strong>📄 Documentos:</strong> {documents.length}</p>
          <p className="text-gray-700"><strong>📁 Categoria:</strong> {activeCategory}</p>
        </div>

        <div className="mb-6 flex gap-2 flex-wrap">
          {(['Crime', 'Cível', 'Teoria - Crime', 'Teoria - Cível'] as DocumentCategory[]).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {selectedDoc ? (
          <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{selectedDoc.title}</h2>
            <div className="max-h-64 overflow-y-auto mb-4">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {selectedDoc.content.substring(0, 800)}...
              </p>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ▶️ Ouvir Áudio
            </button>
          </div>
        ) : (
          <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 mb-6">
            ❌ Nenhum documento encontrado
          </div>
        )}

        <div className="p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
          <strong>✅ Sucesso!</strong> Se você vê esta página, a aplicação está funcionando corretamente.
        </div>
      </div>
    </div>
  );
}
