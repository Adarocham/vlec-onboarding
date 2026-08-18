import { create } from 'zustand'

export type Screen = 'welcome' | 'terms' | 'what-is-vlec' | 'metrics' | 'calibration' | 'selection' | 'briefing' | 'session' | 'results'
export type Experience = 'litigant' | 'interview' | null

interface OnboardingState {
  currentScreen: Screen
  selectedExperience: Experience
  microphoneCalibrated: boolean
  termsAccepted: boolean

  setScreen: (screen: Screen) => void
  setExperience: (exp: Experience) => void
  setMicrophoneCalibrated: (val: boolean) => void
  setTermsAccepted: (val: boolean) => void
  reset: () => void
}

export const useOnboarding = create<OnboardingState>((set) => ({
  currentScreen: 'welcome',
  selectedExperience: null,
  microphoneCalibrated: false,
  termsAccepted: false,

  setScreen: (screen) => set({ currentScreen: screen }),
  setExperience: (exp) => set({ selectedExperience: exp }),
  setMicrophoneCalibrated: (val) => set({ microphoneCalibrated: val }),
  setTermsAccepted: (val) => set({ termsAccepted: val }),
  reset: () => set({
    currentScreen: 'welcome',
    selectedExperience: null,
    microphoneCalibrated: false,
    termsAccepted: false
  })
}))
