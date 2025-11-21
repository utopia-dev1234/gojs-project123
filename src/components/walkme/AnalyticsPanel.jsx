import { useState, useEffect } from 'react'
import { BarChart3, X } from 'lucide-react'
import walkMeAnalytics from './analytics'

const AnalyticsPanel = () => {
  const [showPanel, setShowPanel] = useState(false)
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    if (showPanel) {
      setSummary(walkMeAnalytics.getSummary())
    }
  }, [showPanel])

  if (!showPanel) {
    return (
      <button
        onClick={() => setShowPanel(true)}
        className="fixed bottom-6 left-6 z-30 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
        title="View Analytics"
      >
        <BarChart3 size={20} />
      </button>
    )
  }

  const completionRates = walkMeAnalytics.getCompletionRateByCanvas()

  return (
    <div className="fixed bottom-6 left-6 z-40 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl border-2 border-purple-500">
      <div className="bg-purple-500 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 size={20} />
          <h3 className="font-semibold">WalkMe Analytics</h3>
        </div>
        <button
          onClick={() => setShowPanel(false)}
          className="hover:bg-white/20 rounded p-1 transition"
        >
          <X size={18} />
        </button>
      </div>

      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {summary && (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {summary.totalWalkthroughs}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Completed
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {Math.round(summary.completionRate * 100)}%
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Completion Rate
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {summary.totalTipViews}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Tips Viewed
                </div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {summary.totalTasksCompleted}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Tasks Done
                </div>
              </div>
            </div>

            {/* Completion Rates by Canvas */}
            <div>
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                By Diagram Type
              </h4>
              <div className="space-y-2">
                {Object.entries(completionRates).map(([canvas, data]) => (
                  <div key={canvas} className="text-xs">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 capitalize">
                        {canvas}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {Math.round(data.completionRate * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full transition-all"
                        style={{ width: `${data.completionRate * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AnalyticsPanel

