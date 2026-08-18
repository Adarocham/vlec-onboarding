import { useState } from 'react'
import { askAssistant } from '../services/anthropic'

export default function AssistantButton() {
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleAsk = async () => {
    if (!question.trim()) return

    setLoading(true)
    try {
      const answer = await askAssistant(question)
      setResponse(answer)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Assistant Button (Bottom Right) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-vlec hover:shadow-lg transition z-50 flex items-center justify-center text-white text-2xl"
        title="Preguntar al Asistente VLEC"
      >
        🤖
      </button>

      {/* Assistant Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end z-40">
          <div className="w-full md:w-96 bg-vlec-dark border-t border-vlec-primary rounded-t-lg p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Asistente VLEC</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            {response && (
              <div className="bg-vlec-primary/20 border border-vlec-primary rounded p-4 max-h-48 overflow-y-auto">
                <p className="text-white text-sm">{response}</p>
              </div>
            )}

            <div className="space-y-3">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="¿Qué quieres saber sobre VLEC?"
                className="w-full px-4 py-2 rounded bg-vlec-dark border border-vlec-primary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-vlec-secondary"
              />

              <button
                onClick={handleAsk}
                disabled={loading || !question.trim()}
                className="w-full bg-gradient-vlec hover:opacity-90 disabled:opacity-50 text-white font-bold py-2 px-4 rounded transition"
              >
                {loading ? 'Procesando...' : 'Preguntar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
