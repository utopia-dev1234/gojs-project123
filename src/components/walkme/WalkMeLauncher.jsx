import { useState } from 'react'
import { HelpCircle, X, ListChecks } from 'lucide-react'
import { useWalkMe } from './WalkMeProvider'
import useStore from '../../store/useStore'

const WalkMeLauncher = () => {
  const { startWalkthrough, isCompleted, toggleTips, showTips, toggleTaskList, showTaskList } = useWalkMe()
  const { activeCanvas } = useStore()
  const [showMenu, setShowMenu] = useState(false)

  const canvasNames = {
    gojs_overview: 'GoJS Project Overview',
    orgchart: 'Organization Chart',
    bpmn: 'BPMN Workflow',
    erd: 'ERD Designer',
    network: 'Network Topology',
    gantt: 'Gantt Chart',
    mindmap: 'Mind Map',
    workflow: 'Workflow Builder',
    strategy: 'Strategy Map',
    process: 'Process Mapping',
  }

  return (
    <>
      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
            aria-label="WalkMe Help"
          >
            <HelpCircle size={24} />
          </button>

          {/* Help Menu */}
          {showMenu && (
            <div className="absolute bottom-full right-0 mb-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Need Help?
                </h3>
                <button
                  onClick={() => setShowMenu(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    startWalkthrough('gojs_overview')
                    setShowMenu(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition font-semibold"
                >
                  🎯 GoJS Overview
                  {isCompleted('gojs_overview') && (
                    <span className="ml-2 text-xs text-gray-500">✓ Completed</span>
                  )}
                </button>
                <button
                  onClick={() => {
                    startWalkthrough(activeCanvas)
                    setShowMenu(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
                >
                  📍 Start Walkthrough
                  {isCompleted(activeCanvas) && (
                    <span className="ml-2 text-xs text-gray-500">✓ Completed</span>
                  )}
                </button>

                <button
                  onClick={() => {
                    toggleTips()
                    setShowMenu(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  {showTips ? '💡 Hide Tips' : '💡 Show Tips'}
                </button>

                <button
                  onClick={() => {
                    toggleTaskList()
                    setShowMenu(false)
                  }}
                  className="w-full text-left px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition flex items-center gap-2"
                >
                  <ListChecks size={14} />
                  {showTaskList ? 'Hide Task List' : 'Show Task List'}
                </button>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Current: {canvasNames[activeCanvas]}
                  </p>
                  <button
                    onClick={() => {
                      startWalkthrough(activeCanvas)
                      setShowMenu(false)
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    Learn {canvasNames[activeCanvas]}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default WalkMeLauncher

