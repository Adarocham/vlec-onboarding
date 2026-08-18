export interface AudioMetrics {
  rms: number
  frequency: number
}

let recognition: any = null
let mediaStream: MediaStream | null = null
let audioContext: AudioContext | null = null
let analyser: AnalyserNode | null = null

export async function initAudioCapture(): Promise<void> {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const source = audioContext.createMediaStreamAudioSource(mediaStream)
    analyser = audioContext.createAnalyser()
    analyser.fftSize = 2048
    source.connect(analyser)
  } catch (error) {
    console.error('Error accessing microphone:', error)
    throw new Error('No se pudo acceder al micrófono')
  }
}

export function getAudioMetrics(): AudioMetrics {
  if (!analyser) return { rms: 0, frequency: 0 }

  const dataArray = new Uint8Array(analyser.frequencyBinCount)
  analyser.getByteFrequencyData(dataArray)

  let sum = 0
  for (let i = 0; i < dataArray.length; i++) {
    sum += dataArray[i] * dataArray[i]
  }

  const rms = Math.sqrt(sum / dataArray.length)
  const frequency = analyser.getByteFrequencyData.length

  return { rms: Math.round(rms), frequency }
}

export function startSpeechRecognition(onResult: (text: string) => void): void {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

  if (!SpeechRecognition) {
    console.error('Speech Recognition not supported')
    return
  }

  recognition = new SpeechRecognition()
  recognition.lang = 'es-ES'
  recognition.continuous = true
  recognition.interimResults = true

  recognition.onresult = (event: any) => {
    let transcript = ''
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const t = event.results[i][0].transcript
      transcript += t
    }
    onResult(transcript)
  }

  recognition.onerror = (error: any) => {
    console.error('Speech recognition error:', error)
  }

  recognition.start()
}

export function stopSpeechRecognition(): void {
  if (recognition) {
    recognition.stop()
  }
}

export function stopAudioCapture(): void {
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop())
  }
  if (audioContext) {
    audioContext.close()
  }
}
