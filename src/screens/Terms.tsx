import { useOnboarding } from '../store'

export default function Terms() {
  const setScreen = useOnboarding((state) => state.setScreen)
  const setTermsAccepted = useOnboarding((state) => state.setTermsAccepted)

  const handleAccept = () => {
    setTermsAccepted(true)
    setScreen('what-is-vlec')
  }

  return (
    <div className="w-full h-screen bg-gradient-vlec flex items-center justify-center p-8">
      <div className="bg-vlec-dark rounded-lg shadow-lg max-w-2xl w-full p-8 fade-in space-y-6">
        <h1 className="text-4xl font-bold text-white mb-4">
          Tu Privacidad es lo Primero
        </h1>

        <div className="bg-vlec-primary/20 border-l-4 border-vlec-primary p-4 rounded">
          <p className="text-lg text-white font-semibold mb-2">
            ✓ Información Importante
          </p>
          <p className="text-gray-200">
            Tu voz <strong>NUNCA se graba ni se almacena</strong>. Este es un espacio seguro para practicar.
            Solo se procesan métricas (datos numéricos) en tiempo real.
          </p>
        </div>

        <div className="space-y-3 max-h-48 overflow-y-auto text-gray-300 text-sm">
          <h3 className="font-bold text-white">Términos y Condiciones</h3>
          <p>
            Al usar VLEC, aceptas que:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>VLEC es una herramienta educativa para desarrollar habilidades de oratoria jurídica</li>
            <li>No realiza análisis jurídico ni evaluación del fondo de tus argumentos</li>
            <li>Tus datos se procesan de forma segura y conforme a leyes de protección de datos</li>
            <li>Puedes solicitar información sobre cómo se procesan tus datos en cualquier momento</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setScreen('welcome')}
            className="flex-1 border border-gray-400 hover:border-white text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 bg-gradient-vlec hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Aceptar y Continuar
          </button>
        </div>
      </div>
    </div>
  )
}
