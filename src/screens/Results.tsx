import { useOnboarding } from '../store'

export default function Results() {
  const reset = useOnboarding((state) => state.reset)

  const mockMetrics = {
    velocity: 155,
    clarity: 88,
    volume: 'Medio',
    fluency: 2.3
  }

  return (
    <div className="w-full h-screen bg-gradient-vlec flex items-center justify-center p-8">
      <div className="bg-vlec-dark rounded-lg shadow-lg max-w-2xl w-full p-8 fade-in space-y-6">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Tu Desempeño
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-vlec-primary/20 p-4 rounded">
            <p className="text-xs text-gray-400 uppercase">Velocidad</p>
            <p className="text-2xl font-bold text-vlec-secondary">{mockMetrics.velocity} PPM</p>
            <p className="text-xs text-green-400">✓ Dentro del rango (140-170)</p>
          </div>

          <div className="bg-vlec-primary/20 p-4 rounded">
            <p className="text-xs text-gray-400 uppercase">Claridad</p>
            <p className="text-2xl font-bold text-vlec-secondary">{mockMetrics.clarity}%</p>
            <p className="text-xs text-green-400">✓ Pronunciación clara</p>
          </div>

          <div className="bg-vlec-primary/20 p-4 rounded">
            <p className="text-xs text-gray-400 uppercase">Volumen</p>
            <p className="text-2xl font-bold text-vlec-secondary">{mockMetrics.volume}</p>
            <p className="text-xs text-green-400">✓ Proyección adecuada</p>
          </div>

          <div className="bg-vlec-primary/20 p-4 rounded">
            <p className="text-xs text-gray-400 uppercase">Fluidez (Disfluencias/min)</p>
            <p className="text-2xl font-bold text-yellow-400">{mockMetrics.fluency}</p>
            <p className="text-xs text-yellow-400">⚠ Mejora potencial</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm mb-6">
            Duración total: 3:45 minutos
          </p>

          <div className="space-y-3">
            <button
              onClick={() => alert('Dashboard en desarrollo')}
              className="w-full border-2 border-vlec-secondary hover:bg-vlec-secondary/10 text-vlec-secondary font-bold py-3 px-6 rounded-lg transition"
            >
              Ver Análisis Detallado en Dashboard
            </button>

            <button
              onClick={() => reset()}
              className="w-full bg-gradient-vlec hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Nueva Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
