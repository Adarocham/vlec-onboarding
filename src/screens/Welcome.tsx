import { useOnboarding } from '../store'
import { Panorama360 } from '../components/Panorama360'

export default function Welcome() {
  const setScreen = useOnboarding((state) => state.setScreen)

  return (
    <div className="w-full h-screen flex">
      {/* A-Frame Scene */}
      <Panorama360
        videoSrc="/Users/antoniodarocha/Downloads/Videos360VLEC/Alta360/vide 360 bienvenida.mp4"
        className="absolute inset-0"
      />

      {/* HUD Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <div className="pointer-events-auto bg-black/60 backdrop-blur-sm p-12 rounded-lg text-center max-w-2xl fade-in">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Bienvenido a VLEC
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Tu clínica de práctica personal para la oratoria jurídica
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Estás a punto de iniciar tu primera simulación inmersiva
          </p>

          <button
            onClick={() => setScreen('terms')}
            className="bg-gradient-vlec hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}
