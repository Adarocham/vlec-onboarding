import { useEffect } from 'react'

interface Panorama360Props {
  videoSrc: string
  className?: string
}

export function Panorama360({ videoSrc, className = '' }: Panorama360Props) {
  useEffect(() => {
    if (!videoSrc) return

    const scene = document.querySelector('a-scene') as any
    if (scene && scene.hasLoaded) {
      // Update or create sky with video
      let sky = scene.querySelector('[data-panorama-sky]')
      if (!sky) {
        sky = document.createElement('a-sky')
        sky.setAttribute('data-panorama-sky', '')
        scene.appendChild(sky)
      }

      // Handle both video and image sources
      if (videoSrc.endsWith('.mp4') || videoSrc.endsWith('.webm')) {
        const video = document.createElement('video')
        video.src = videoSrc
        video.autoplay = true
        video.loop = true
        video.crossOrigin = 'anonymous'
        sky.setAttribute('src', `#panorama-video-${Date.now()}`)
        // For A-Frame, we need to use asset
      } else {
        sky.setAttribute('src', videoSrc)
      }
    }
  }, [videoSrc])

  return (
    <>
      <a-scene embedded vr-mode-ui="enabled: false" className={className}>
        <a-sky src={videoSrc} data-panorama-sky rotation="0 -90 0" />
        <a-camera position="0 0 0" />
      </a-scene>
    </>
  )
}
