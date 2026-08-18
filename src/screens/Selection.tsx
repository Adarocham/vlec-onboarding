import { useOnboarding } from '../store'

export default function Selection() {
  const setScreen = useOnboarding((state) => state.setScreen)
  const setExperience = useOnboarding((state) => state.setExperience)

  const handleSelectLitigant = () => {
    setExperience('litigant')
    setScreen('briefing')
  }

  const handleSelectInterview = () => {
    setExperience('interview')
    setScreen('briefing')
  }

  return (
    <div className="w-full h-screen bg-gradient-vlec flex items-center justify-center p-8">
      <div className="max-w-5xl w-full fade-in">
        <h1 className="text-5xl font-bold text-white mb-12 text-center">
          Elige tu Experiencia
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Litigant Card */}
          <button
            onClick={handleSelectLitigant}
            className="bg-vlec-dark rounded-lg p-8 hover:border-2 hover:border-vlec-secondary transition text-left group"
          >
            <div className="mb-4 text-4xl">⚖️</div>
            <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-vlec-secondary transition">
              LITIGANTE
            </h2>
            <p className="text-vlec-secondary font-semibold mb-4">
              Simulación de Juicio
            </p>
            <p className="text-gray-300 mb-6">
              Practica un alegato frente a un tribunal simulado
            </p>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              <li>📍 Sala de tribunal formal</li>
              <li>⏱️ 3-10 minutos típicamente</li>
              <li>💪 Estructura argumentativa, proyección, dominio de estrés</li>
            </ul>
            <p className="text-gray-400 italic text-xs">
              Desarrollarás la capacidad de estructurar un discurso persuasivo y proyectar autoridad.
            </p>
          </button>

          {/* Interview Card */}
          <button
            onClick={handleSelectInterview}
            className="bg-vlec-dark rounded-lg p-8 hover:border-2 hover:border-vlec-secondary transition text-left group"
          >
            <div className="mb-4 text-4xl">💬</div>
            <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-vlec-secondary transition">
              ENTREVISTA
            </h2>
            <p className="text-vlec-secondary font-semibold mb-4">
              Entrevista Clínica-Jurídica
            </p>
            <p className="text-gray-300 mb-6">
              Practica una conversación directa con un cliente
            </p>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              <li>📍 Sala de oficina (interacción uno a uno)</li>
              <li>⏱️ 2-5 minutos típicamente</li>
              <li>👂 Escucha activa, adaptabilidad, comunicación bidireccional</li>
            </ul>
            <p className="text-gray-400 italic text-xs">
              Desarrollarás la capacidad de escuchar activamente y adaptar tu comunicación en tiempo real.
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
