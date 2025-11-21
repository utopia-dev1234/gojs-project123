import { useEffect, useState } from 'react'
import { Info } from 'lucide-react'
import { useWalkMe } from './WalkMeProvider'
import { smartTipsConfig } from './smartTipsConfig'

const SmartTips = () => {
  const { showTips, activeCanvas } = useWalkMe()
  const [activeTip, setActiveTip] = useState(null)
  const [tipPositions, setTipPositions] = useState({})

  if (!showTips) return null

  const tips = smartTipsConfig[activeCanvas] || []

  // Calculate tip positions
  useEffect(() => {
    const positions = {}
    tips.forEach(tip => {
      if (tip.targetSelector) {
        const element = document.querySelector(tip.targetSelector)
        if (element) {
          const rect = element.getBoundingClientRect()
          positions[tip.id] = {
            top: rect.top + rect.height / 2,
            left: rect.right + 10,
            element: element
          }
        }
      }
    })
    setTipPositions(positions)
  }, [showTips, activeCanvas, tips])

  // Show tip on hover
  const handleMouseEnter = (tipId) => {
    setActiveTip(tipId)
  }

  const handleMouseLeave = () => {
    setActiveTip(null)
  }

  return (
    <>
      {tips.map(tip => {
        const position = tipPositions[tip.id]
        if (!position) return null

        return (
          <div key={tip.id}>
            {/* Tip Icon */}
            <div
              className="fixed z-30 cursor-help"
              style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
                transform: 'translateY(-50%)'
              }}
              onMouseEnter={() => handleMouseEnter(tip.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-blue-500 text-white rounded-full p-1.5 shadow-lg hover:bg-blue-600 transition">
                <Info size={14} />
              </div>
            </div>

            {/* Tip Content */}
            {activeTip === tip.id && (
              <div
                className="fixed z-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border-2 border-blue-500 p-3 max-w-xs"
                style={{
                  top: `${position.top}px`,
                  left: `${position.left + 30}px`,
                  transform: 'translateY(-50%)'
                }}
                onMouseEnter={() => handleMouseEnter(tip.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded p-1 mt-0.5">
                    <Info size={16} className="text-blue-600 dark:text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {tip.description}
                    </p>
                    {tip.shortcut && (
                      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Shortcut: <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">
                            {tip.shortcut}
                          </kbd>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Arrow */}
                <div
                  className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2"
                  style={{
                    borderRight: '8px solid #3b82f6',
                    borderTop: '8px solid transparent',
                    borderBottom: '8px solid transparent'
                  }}
                />
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default SmartTips

