export default function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f0f9ff', minHeight: '100vh' }}>
      <h1 style={{ color: '#1e40af', fontSize: '32px', marginBottom: '20px' }}>
        ✅ Aplicação Funcionando!
      </h1>
      <p style={{ fontSize: '18px', color: '#374151', marginBottom: '10px' }}>
        Se você vê essa mensagem, significa que React está renderizando corretamente.
      </p>
      <p style={{ fontSize: '16px', color: '#666' }}>
        Timestamp: {new Date().toLocaleString()}
      </p>
      <button 
        onClick={() => alert('Botão está funcionando!')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Clique Aqui para Testar
      </button>
    </div>
  );
}
