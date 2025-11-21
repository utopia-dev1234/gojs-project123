import { useEffect, useRef, useState } from 'react'
import { X, ChevronRight, ChevronLeft, SkipForward } from 'lucide-react'
import { useWalkMe } from './WalkMeProvider'
import { walkthroughSteps } from './walkthroughConfig'
import walkMeAnalytics from './analytics'

const Walkthrough = () => {
  const {
    currentWalkthrough,
    currentStep,
    nextStep,
    previousStep,
    skipWalkthrough,
    completeWalkthrough,
  } = useWalkMe()

  const stepRef = useRef(null)
  const [startTime] = useState(() => Date.now())
  
  const handleNext = () => {
    nextStep()
  }

  const handleSkip = () => {
    if (currentWalkthrough) {
      walkMeAnalytics.trackWalkthroughSkip(currentWalkthrough, currentStep)
    }
    skipWalkthrough()
  }

  const handleComplete = () => {
    if (currentWalkthrough) {
      const timeSpent = Date.now() - startTime
      const steps = walkthroughSteps[currentWalkthrough] || []
      walkMeAnalytics.trackWalkthroughComplete(
        currentWalkthrough,
        steps.length,
        timeSpent
      )
    }
    completeWalkthrough(currentWalkthrough)
  }

  // Track walkthrough start
  useEffect(() => {
    if (currentWalkthrough && currentStep === 0) {
      walkMeAnalytics.trackWalkthroughStart(currentWalkthrough)
    }
  }, [currentWalkthrough])

  // Track step views
  useEffect(() => {
    if (currentWalkthrough) {
      const steps = walkthroughSteps[currentWalkthrough] || []
      const currentStepData = steps[currentStep]
      if (currentStepData) {
        walkMeAnalytics.trackStep(currentWalkthrough, currentStep, currentStepData.title)
      }
    }
  }, [currentStep, currentWalkthrough])

  if (!currentWalkthrough) return null

  const steps = walkthroughSteps[currentWalkthrough] || []
  const step = steps[currentStep]

  if (!step) {
    // Walkthrough completed
    if (currentStep >= steps.length) {
      completeWalkthrough(currentWalkthrough)
    }
    return null
  }

  // Scroll to target element
  useEffect(() => {
    if (step.targetSelector) {
      const element = document.querySelector(step.targetSelector)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        // Highlight element
        element.style.outline = '3px solid #3b82f6'
        element.style.outlineOffset = '2px'
        element.style.transition = 'outline 0.3s'
        
        return () => {
          element.style.outline = ''
          element.style.outlineOffset = ''
        }
      }
    }
  }, [step, currentStep])

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1

  // Calculate position
  const getPosition = () => {
    if (step.targetSelector) {
      const element = document.querySelector(step.targetSelector)
      if (element) {
        const rect = element.getBoundingClientRect()
        const walkthroughHeight = 200
        const walkthroughWidth = 350

        switch (step.position) {
          case 'top':
            return {
              top: rect.top - walkthroughHeight - 20,
              left: rect.left + rect.width / 2 - walkthroughWidth / 2,
            }
          case 'bottom':
            return {
              top: rect.bottom + 20,
              left: rect.left + rect.width / 2 - walkthroughWidth / 2,
            }
          case 'left':
            return {
              top: rect.top + rect.height / 2 - walkthroughHeight / 2,
              left: rect.left - walkthroughWidth - 20,
            }
          case 'right':
            return {
              top: rect.top + rect.height / 2 - walkthroughHeight / 2,
              left: rect.right + 20,
            }
          default:
            return {
              top: rect.bottom + 20,
              left: rect.left + rect.width / 2 - walkthroughWidth / 2,
            }
        }
      }
    }
    // Center if no target
    return {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }
  }

  const position = getPosition()

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={skipWalkthrough}
      />

      {/* Walkthrough Step */}
      <div
        ref={stepRef}
        className="fixed z-50 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border-2 border-blue-500 max-w-sm"
        style={{
          top: typeof position.top === 'string' ? position.top : `${position.top}px`,
          left: typeof position.left === 'string' ? position.left : `${position.left}px`,
          transform: typeof position.top === 'string' ? position.transform : 'none',
        }}
      >
        {/* Header */}
        <div className="bg-blue-500 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold">
              {currentStep + 1}
            </span>
            <span className="font-semibold">{step.title}</span>
          </div>
          <button
            onClick={handleSkip}
            className="hover:bg-white/20 rounded p-1 transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {step.description}
          </p>
          {step.tips && step.tips.length > 0 && (
            <div className="mt-3 space-y-1">
              {step.tips.map((tip, idx) => (
                <div key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <button
            onClick={handleSkip}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 flex items-center gap-1"
          >
            <SkipForward size={14} />
            Skip
          </button>
          <div className="flex items-center gap-2">
            {!isFirstStep && (
              <button
                onClick={previousStep}
                className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center gap-1"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
            )}
            <button
              onClick={isLastStep ? handleComplete : handleNext}
              className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-1"
            >
              {isLastStep ? 'Complete' : 'Next'}
              {!isLastStep && <ChevronRight size={16} />}
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="px-4 pb-3">
          <div className="flex gap-1">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 flex-1 rounded ${
                  idx <= currentStep
                    ? 'bg-blue-500'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Walkthrough

