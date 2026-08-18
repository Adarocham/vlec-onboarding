import { useOnboarding } from '../store'

export default function Briefing() {
  const selectedExperience = useOnboarding((state) => state.selectedExperience)
  const setScreen = useOnboarding((state) => state.setScreen)

  const isLitigant = selectedExperience === 'litigant'

  return (
    <div className="w-full h-screen bg-gradient-vlec flex items-center justify-center p-8">
      <div className="bg-vlec-dark rounded-lg shadow-lg max-w-2xl w-full p-8 fade-in space-y-6">
        <h1 className="text-4xl font-bold text-white mb-2">
          {isLitigant ? 'CONTEXTO: Simulación de Juicio' : 'CONTEXTO: Entrevista Clínica-Jurídica'}
        </h1>

        <div className="bg-vlec-primary/10 border-l-4 border-vlec-secondary p-4 rounded">
          <p className="text-lg text-gray-200">
            {isLitigant
              ? 'Estás en una sala de tribunal. Tu objetivo es presentar un alegato claro, estructurado y persuasivo.'
              : 'Estás en una sala de oficina en una entrevista con un cliente. Tu objetivo es escuchar activamente y responder con precisión.'}
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-bold text-vlec-secondary text-lg">1. DURACIÓN</h3>
            <p className="text-gray-300">
              {isLitigant
                ? 'Tienes entre 3-10 minutos para tu alegato. Define tu duración ANTES de comenzar.'
                : 'Sesión típica: 2-5 minutos. Es un diálogo dinámico, no un monólogo.'}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-vlec-secondary text-lg">2. AMBIENTE</h3>
            <p className="text-gray-300">
              {isLitigant
                ? 'Hay ruido ambiental simulado. Necesitas proyectar tu voz para que se escuche claramente.'
                : 'Simulación realista de entrevista profesional. El cliente espera respuestas claras y empáticas.'}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-vlec-secondary text-lg">3. MÉTRICAS EN TIEMPO REAL</h3>
            <p className="text-gray-300">
              Observa tus indicadores mientras {isLitigant ? 'hablas' : 'interactúas'}. Úsalos como espejo para mantener el enfoque en tu meta.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-vlec-secondary text-lg">4. DESPUÉS</h3>
            <p className="text-gray-300">
              Al finalizar, recibirás un resumen de tu desempeño y luego analizaremos en detalle en el Dashboard.
            </p>
          </div>
        </div>

        <button
          onClick={() => setScreen('results')}
          className="w-full bg-gradient-vlec hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          {isLitigant ? 'Iniciar Sesión de Litigante' : 'Iniciar Sesión de Entrevista'}
        </button>
      </div>
    </div>
  )
}
