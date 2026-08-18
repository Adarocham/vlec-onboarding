import { useState } from 'react'
import { useOnboarding } from '../store'

const metrics = [
  {
    id: 'velocity',
    name: 'Velocidad',
    description: 'Palabras por minuto (PPM)',
    range: '140-170 PPM ideal',
    details: 'Demasiado rápido (>170): nerviosismo. Demasiado lento (<140): pierdes atención.'
  },
  {
    id: 'clarity',
    name: 'Claridad',
    description: 'Precisión de dicción',
    range: '80-100% recomendado',
    details: 'Baja claridad = articulación deficiente. Afecta directamente la comprensión.'
  },
  {
    id: 'volume',
    name: 'Volumen',
    description: 'Proyección de la voz',
    range: 'Consistente y firme',
    details: 'Bajo: inseguridad. Firme: autoridad. La proyección no es gritar - es controlar la sala.'
  },
  {
    id: 'fluency',
    name: 'Fluidez',
    description: 'Continuidad del discurso',
    range: '<3 disfluencias/min',
    details: 'Las disfluencias (eh, este...) son equivalentes verbales de la duda. Eliminarlas = credibilidad.'
  }
]

export default function Metrics() {
  const setScreen = useOnboarding((state) => state.setScreen)
  const [activeMetric, setActiveMetric] = useState('velocity')

  const current = metrics.find(m => m.id === activeMetric)

  return (
    <div className="w-full h-screen bg-gradient-vlec flex items-center justify-center p-8">
      <div className="bg-vlec-dark rounded-lg shadow-lg max-w-3xl w-full p-8 fade-in space-y-6">
        <h1 className="text-4xl font-bold text-white">Las 4 Métricas</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {metrics.map((metric) => (
            <button
              key={metric.id}
              onClick={() => setActiveMetric(metric.id)}
              className={`p-4 rounded-lg font-bold transition ${
                activeMetric === metric.id
                  ? 'bg-gradient-vlec text-white'
                  : 'bg-vlec-primary/20 text-gray-300 hover:text-white'
              }`}
            >
              {metric.name}
            </button>
          ))}
        </div>

        {current && (
          <div className="bg-vlec-primary/10 border-l-4 border-vlec-secondary p-6 rounded space-y-4 fade-in">
            <div>
              <h2 className="text-2xl font-bold text-vlec-secondary mb-2">{current.name}</h2>
              <p className="text-gray-300">{current.description}</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-400">Rango Recomendado:</p>
              <p className="text-lg font-semibold text-vlec-secondary">{current.range}</p>
            </div>

            <div className="bg-white/10 p-4 rounded">
              <p className="text-gray-200">{current.details}</p>
            </div>
          </div>
        )}

        <button
          onClick={() => setScreen('calibration')}
          className="w-full bg-gradient-vlec hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
