import { useState } from 'react'
import { Check, X, CheckCircle2 } from 'lucide-react'
import { useWalkMe } from './WalkMeProvider'
import { taskListsConfig } from './taskListsConfig'
import walkMeAnalytics from './analytics'

const TaskList = () => {
  const { activeCanvas, showTaskList, toggleTaskList } = useWalkMe()
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem(`walkme_tasks_${activeCanvas}`)
    return saved ? JSON.parse(saved) : []
  })
  
  if (!showTaskList) return null

  const taskList = taskListsConfig[activeCanvas]
  if (!taskList) return null

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => {
      const isCompleting = !prev.includes(taskId)
      const updated = isCompleting
        ? [...prev, taskId]
        : prev.filter(id => id !== taskId)
      localStorage.setItem(`walkme_tasks_${activeCanvas}`, JSON.stringify(updated))
      
      // Track analytics
      if (isCompleting) {
        walkMeAnalytics.trackTaskComplete(activeCanvas, taskId)
      }
      
      return updated
    })
  }

  const completedCount = completedTasks.length
  const totalTasks = taskList.tasks.length
  const progress = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0

  return (
    <div className="fixed top-4 right-4 z-30 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border-2 border-green-500">
      {/* Header */}
      <div className="bg-green-500 text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={20} />
          <h3 className="font-semibold">{taskList.title}</h3>
        </div>
        <button
          onClick={toggleTaskList}
          className="hover:bg-white/20 rounded p-1 transition"
        >
          <X size={18} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Progress
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {completedCount} of {totalTasks}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {Math.round(progress)}% complete
        </div>
      </div>

      {/* Tasks */}
      <div className="max-h-96 overflow-y-auto p-4">
        <div className="space-y-2">
          {taskList.tasks.map((task, index) => {
            const isCompleted = completedTasks.includes(task.id)
            const isActive = !isCompleted && completedTasks.length === index

            return (
              <div
                key={task.id}
                className={`flex items-start gap-3 p-3 rounded-lg border-2 transition ${
                  isActive
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : isCompleted
                    ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
                    : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition ${
                    isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                  }`}
                >
                  {isCompleted && <Check size={12} />}
                </button>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div
                        className={`font-medium text-sm mb-1 ${
                          isCompleted
                            ? 'text-gray-500 dark:text-gray-400 line-through'
                            : isActive
                            ? 'text-blue-900 dark:text-blue-100'
                            : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {index + 1}. {task.title}
                      </div>
                      {task.description && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {task.description}
                        </p>
                      )}
                    </div>
                  </div>
                  {task.tips && task.tips.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {task.tips.map((tip, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-gray-500 dark:text-gray-500 flex items-start gap-1"
                        >
                          <span>•</span>
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      {completedCount === totalTasks && (
        <div className="px-4 py-3 bg-green-50 dark:bg-green-900/20 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <CheckCircle2 size={18} />
            <span className="text-sm font-medium">All tasks completed! 🎉</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskList

