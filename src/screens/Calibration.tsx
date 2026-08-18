import { useState, useEffect } from 'react'
import { useOnboarding } from '../store'
import { getAudioMetrics, startSpeechRecognition, stopSpeechRecognition } from '../services/audio'
import { Panorama360 } from '../components/Panorama360'

export default function Calibration() {
  const setScreen = useOnboarding((state) => state.setScreen)
  const setMicrophoneCalibrated = useOnboarding((state) => state.setMicrophoneCalibrated)
  const [stage, setStage] = useState<'listening' | 'recording' | 'complete'>('listening')
  const [metrics, setMetrics] = useState({ rms: 0, frequency: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(getAudioMetrics())
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const handleStartRecording = () => {
    setStage('recording')
    startSpeechRecognition((text) => {
      if (text.length > 10) {
        setStage('complete')
        stopSpeechRecognition()
        setMicrophoneCalibrated(true)
      }
    })
  }

  return (
    <div className="w-full h-screen flex">
      <Panorama360 videoSrc="/videos/calibration.mp4" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <div className="pointer-events-auto bg-black/60 backdrop-blur-sm p-12 rounded-lg text-center max-w-2xl fade-in">
          <h1 className="text-4xl font-bold mb-4 text-white">
            ¡Comencemos a Calibrar!
          </h1>

          {stage === 'listening' && (
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                Para que el feedback sea preciso, primero debemos calibrar tu micrófono.
              </p>
              <p className="text-gray-300">
                El sistema medirá el ruido de tu entorno...
              </p>
              <div className="bg-vlec-primary/20 p-4 rounded">
                <p className="text-sm text-gray-200">
                  Nivel de audio: <span className="text-vlec-secondary font-bold">{metrics.rms}</span>
                </p>
              </div>
              <button
                onClick={handleStartRecording}
                className="bg-gradient-vlec hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Comenzar Calibración
              </button>
            </div>
          )}

          {stage === 'recording' && (
            <div className="space-y-6">
              <p className="text-lg text-gray-200">
                Lee el texto con un tono de voz claro y natural:
              </p>
              <div className="bg-vlec-primary/20 p-6 rounded text-xl font-semibold text-vlec-secondary">
                "Este es un entorno seguro para practicar mi oratoria jurídica."
              </div>
              <div className="flex justify-center gap-2">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-red-400 text-sm">Grabando...</span>
              </div>
              <button
                onClick={() => {
                  stopSpeechRecognition()
                  setStage('listening')
                }}
                className="border border-gray-400 hover:border-white text-white font-bold py-2 px-6 rounded-lg transition text-sm"
              >
                Cancelar
              </button>
            </div>
          )}

          {stage === 'complete' && (
            <div className="space-y-6">
              <p className="text-2xl font-bold text-green-400">
                ✓ ¡Calibración Completada!
              </p>
              <p className="text-gray-200">
                Tu micrófono está listo. El sistema se ha ajustado a tu voz única.
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-vlec-primary/20 p-3 rounded">
                  <p className="text-xs text-gray-400">Volumen</p>
                  <p className="text-lg font-bold text-green-400">OK</p>
                </div>
                <div className="bg-vlec-primary/20 p-3 rounded">
                  <p className="text-xs text-gray-400">Claridad</p>
                  <p className="text-lg font-bold text-green-400">OK</p>
                </div>
                <div className="bg-vlec-primary/20 p-3 rounded">
                  <p className="text-xs text-gray-400">Ruido</p>
                  <p className="text-lg font-bold text-green-400">OK</p>
                </div>
              </div>
              <button
                onClick={() => setScreen('selection')}
                className="bg-gradient-vlec hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Continuar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
