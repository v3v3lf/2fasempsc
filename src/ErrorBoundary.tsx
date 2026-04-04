import React, { ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen w-screen bg-red-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Erro na Aplicação</h1>
            <p className="text-gray-700 mb-4">
              {this.state.error?.message || 'Algo deu errado. Tente recarregar a página.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Recarregar Página
            </button>
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                Detalhes do erro
              </summary>
              <pre className="mt-2 bg-gray-100 p-4 rounded text-xs overflow-auto text-red-600">
                {this.state.error?.toString()}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
