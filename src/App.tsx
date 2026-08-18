import { useEffect } from 'react'
import { useOnboarding } from './store'
import { initAudioCapture } from './services/audio'

import Welcome from './screens/Welcome'
import Terms from './screens/Terms'
import WhatIsVLEC from './screens/WhatIsVLEC'
import Metrics from './screens/Metrics'
import Calibration from './screens/Calibration'
import Selection from './screens/Selection'
import Briefing from './screens/Briefing'
import Results from './screens/Results'
import AssistantButton from './components/AssistantButton'

export default function App() {
  const currentScreen = useOnboarding((state) => state.currentScreen)

  useEffect(() => {
    initAudioCapture().catch(console.error)
  }, [])

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <Welcome />
      case 'terms':
        return <Terms />
      case 'what-is-vlec':
        return <WhatIsVLEC />
      case 'metrics':
        return <Metrics />
      case 'calibration':
        return <Calibration />
      case 'selection':
        return <Selection />
      case 'briefing':
        return <Briefing />
      case 'results':
        return <Results />
      default:
        return <Welcome />
    }
  }

  return (
    <div className="w-full h-screen bg-vlec-dark overflow-hidden">
      {renderScreen()}
      <AssistantButton />
    </div>
  )
}
