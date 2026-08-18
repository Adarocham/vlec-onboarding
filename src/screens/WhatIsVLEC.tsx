import { useOnboarding } from '../store'

export default function WhatIsVLEC() {
  const setScreen = useOnboarding((state) => state.setScreen)

  return (
    <div className="w-full h-screen bg-gradient-vlec flex items-center justify-center p-8">
      <div className="bg-vlec-dark rounded-lg shadow-lg max-w-2xl w-full p-8 fade-in space-y-6">
        <h1 className="text-4xl font-bold text-white">¿Qué es VLEC?</h1>

        <div className="space-y-4">
          <div className="bg-vlec-primary/10 border-l-4 border-vlec-secondary p-4 rounded">
            <p className="text-gray-200">
              VLEC es un sistema de análisis automático de sesiones de habla diseñado específicamente para el desarrollo de competencias de oralidad jurídica.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-bold text-vlec-secondary">Nuestro Foco:</h3>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-green-400">✓</span>
                <span>Evalúa la FORMA y EFICACIA comunicativa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✓</span>
                <span>Analiza oralidad jurídica en tiempo real</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✓</span>
                <span>Proporciona retroalimentación objetiva y medible</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
            <h3 className="text-xl font-bold text-red-400">Lo que VLEC NO hace:</h3>
            <ul className="space-y-2 text-gray-200">
              <li>✗ NO evalúa el fondo jurídico de tus argumentos</li>
              <li>✗ NO genera estrategia jurídica</li>
              <li>✗ NO es un juez - es tu entrenador personal</li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => setScreen('metrics')}
          className="w-full bg-gradient-vlec hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Entendido, Continuar
        </button>
      </div>
    </div>
  )
}
