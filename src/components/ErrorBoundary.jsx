import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Birthday site error:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-[#1a1520] px-6 py-16 text-center text-cream">
          <h1 className="font-display text-3xl text-gold-soft">Something didn&apos;t load</h1>
          <p className="mx-auto mt-4 max-w-lg text-cream/75">
            The page hit an error while rendering. Open the browser developer console (F12 → Console) for
            details, or refresh after saving your latest edits in the code.
          </p>
          <pre className="mx-auto mt-8 max-w-3xl overflow-auto rounded-lg border border-white/10 bg-black/30 p-4 text-left text-sm text-red-200/90">
            {String(this.state.error?.message || this.state.error)}
          </pre>
          <button
            type="button"
            className="mt-8 rounded-full bg-gold px-6 py-3 font-medium text-midnight"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
