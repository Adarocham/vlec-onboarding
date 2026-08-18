import { useEffect, useRef } from 'react'

interface Panorama360Props {
  videoSrc: string
  className?: string
  interactive?: boolean
}

export function Panorama360({ videoSrc, className = '', interactive = true }: Panorama360Props) {
  const sceneRef = useRef<any>(null)
  const cameraRef = useRef<any>(null)

  useEffect(() => {
    if (!videoSrc) return

    const scene = sceneRef.current
    if (!scene) return

    // Wait for scene to load
    const setupScene = () => {
      let sky = scene.querySelector('a-sky')
      if (!sky) {
        sky = document.createElement('a-sky')
        sky.setAttribute('src', videoSrc)
        sky.setAttribute('rotation', '0 -90 0')
        scene.appendChild(sky)
      } else {
        sky.setAttribute('src', videoSrc)
      }

      // Setup camera
      let camera = scene.querySelector('a-camera')
      if (!camera) {
        camera = document.createElement('a-camera')
        camera.setAttribute('position', '0 0 0')
        camera.setAttribute('look-controls', 'enabled: true')
        scene.appendChild(camera)
      }
    }

    if (scene.hasLoaded) {
      setupScene()
    } else {
      scene.addEventListener('loaded', setupScene)
      return () => scene.removeEventListener('loaded', setupScene)
    }
  }, [videoSrc])

  return (
    <a-scene
      ref={sceneRef}
      embedded
      vr-mode-ui="enabled: false"
      className={className}
      style={{ width: '100%', height: '100%' }}
    >
      <a-sky rotation="0 -90 0" />
      <a-camera
        position="0 0 0"
        look-controls={interactive ? 'enabled: true' : 'enabled: false'}
      />
    </a-scene>
  )
}
