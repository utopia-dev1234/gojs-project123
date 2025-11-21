import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import useStore from '../../store/useStore'

// WalkMe Context
const WalkMeContext = createContext()

export const useWalkMe = () => {
  const context = useContext(WalkMeContext)
  if (!context) {
    throw new Error('useWalkMe must be used within WalkMeProvider')
  }
  return context
}

// WalkMe Provider Component
export const WalkMeProvider = ({ children }) => {
  const { activeCanvas } = useStore()
  const [currentWalkthrough, setCurrentWalkthrough] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [showTips, setShowTips] = useState(false)
  const [showTaskList, setShowTaskList] = useState(false)
  const [completedWalkthroughs, setCompletedWalkthroughs] = useState(() => {
    const saved = localStorage.getItem('walkme_completed')
    return saved ? JSON.parse(saved) : []
  })

  const startWalkthrough = useCallback((canvasType) => {
    setCurrentWalkthrough(canvasType)
    setCurrentStep(0)
  }, [])

  const nextStep = useCallback(() => {
    setCurrentStep(prev => prev + 1)
  }, [])

  const previousStep = useCallback(() => {
    setCurrentStep(prev => Math.max(0, prev - 1))
  }, [])

  const skipWalkthrough = useCallback(() => {
    setCurrentWalkthrough(null)
    setCurrentStep(0)
  }, [])

  const completeWalkthrough = useCallback((canvasType) => {
    setCompletedWalkthroughs(prev => {
      const updated = [...prev, canvasType]
      localStorage.setItem('walkme_completed', JSON.stringify(updated))
      return updated
    })
    setCurrentWalkthrough(null)
    setCurrentStep(0)
  }, [])

  const toggleTips = useCallback(() => {
    setShowTips(prev => !prev)
  }, [])

  const toggleTaskList = useCallback(() => {
    setShowTaskList(prev => !prev)
  }, [])

  // Check if walkthrough should auto-start for new users
  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('walkme_first_visit')
    if (isFirstVisit && activeCanvas === 'orgchart') {
      // Auto-start org chart walkthrough for first-time users
      setTimeout(() => {
        setCurrentWalkthrough('orgchart')
        setCurrentStep(0)
        localStorage.setItem('walkme_first_visit', 'true')
      }, 1000)
    }
  }, [activeCanvas])

  const isCompleted = useCallback((canvasType) => {
    return completedWalkthroughs.includes(canvasType)
  }, [completedWalkthroughs])

  const value = useMemo(() => ({
    currentWalkthrough,
    currentStep,
    showTips,
    showTaskList,
    completedWalkthroughs,
    startWalkthrough,
    nextStep,
    previousStep,
    skipWalkthrough,
    completeWalkthrough,
    toggleTips,
    toggleTaskList,
    isCompleted,
    activeCanvas, // Expose activeCanvas for components
  }), [
    currentWalkthrough,
    currentStep,
    showTips,
    showTaskList,
    completedWalkthroughs,
    startWalkthrough,
    nextStep,
    previousStep,
    skipWalkthrough,
    completeWalkthrough,
    toggleTips,
    toggleTaskList,
    isCompleted,
    activeCanvas
  ])

  return (
    <WalkMeContext.Provider value={value}>
      {children}
    </WalkMeContext.Provider>
  )
}

