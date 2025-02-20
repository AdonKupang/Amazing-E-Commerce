import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              Oops! Terjadi Kesalahan
            </h1>
            <p className="text-fluid-base text-gray-600 mb-8">
              Mohon maaf, terjadi kesalahan teknis. Silakan muat ulang halaman atau hubungi tim support.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Muat Ulang Halaman
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="mt-8 p-4 bg-gray-100 rounded-lg text-left overflow-auto text-sm">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 