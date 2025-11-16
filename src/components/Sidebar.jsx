import {
  Brain,
  GitBranch,
  Target,
  Settings,
  Users,
  Workflow,
  Database,
  Network,
  Calendar,
  Moon,
  Sun,
  Sparkles,
} from 'lucide-react'
import useStore from '../store/useStore'

const Sidebar = () => {
  const { activeCanvas, setActiveCanvas, theme, toggleTheme } = useStore()

  const canvasTypes = [
    {
      id: 'orgchart',
      name: 'Organization Chart',
      icon: Users,
      description: 'Hierarchical structure',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      category: 'GoJS Diagrams',
    },
    {
      id: 'bpmn',
      name: 'BPMN Workflow',
      icon: Workflow,
      description: 'Business processes',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      category: 'GoJS Diagrams',
    },
    {
      id: 'erd',
      name: 'ERD Designer',
      icon: Database,
      description: 'Database schema',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      category: 'GoJS Diagrams',
    },
    {
      id: 'network',
      name: 'Network Topology',
      icon: Network,
      description: 'Infrastructure map',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      category: 'GoJS Diagrams',
    },
    {
      id: 'gantt',
      name: 'Gantt Chart',
      icon: Calendar,
      description: 'Project timeline',
      color: 'text-rose-600',
      bgColor: 'bg-rose-100',
      category: 'GoJS Diagrams',
    },
    {
      id: 'mindmap',
      name: 'Mind Map',
      icon: Brain,
      description: 'Organize ideas',
      color: 'text-violet-600',
      bgColor: 'bg-violet-100',
      category: 'React Flow',
    },
    {
      id: 'workflow',
      name: 'Workflow',
      icon: GitBranch,
      description: 'Build processes',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100',
      category: 'React Flow',
    },
    {
      id: 'strategy',
      name: 'Strategy Map',
      icon: Target,
      description: 'Strategic planning',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      category: 'React Flow',
    },
    {
      id: 'process',
      name: 'Process Flow',
      icon: Settings,
      description: 'Process mapping',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      category: 'React Flow',
    },
  ]

  // Group canvases by category
  const groupedCanvases = canvasTypes.reduce((acc, canvas) => {
    const category = canvas.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(canvas)
    return acc
  }, {})

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col shadow-lg">
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              DiagramPro
            </h1>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-500" />
            )}
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Professional Diagramming Suite
        </p>
      </div>

      {/* Canvas Types */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        {Object.entries(groupedCanvases).map(([category, canvases]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 px-2">
              {category}
            </h3>
            <div className="space-y-1">
              {canvases.map((canvas) => {
                const Icon = canvas.icon
                const isActive = activeCanvas === canvas.id

                return (
                  <button
                    key={canvas.id}
                    onClick={() => setActiveCanvas(canvas.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900 dark:to-purple-900 border-2 border-indigo-200 dark:border-indigo-600 shadow-sm'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-transparent'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isActive ? canvas.bgColor : 'bg-gray-100 dark:bg-gray-700'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          isActive ? canvas.color : 'text-gray-600 dark:text-gray-400'
                        }`}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <div
                        className={`font-semibold text-sm ${
                          isActive
                            ? 'text-indigo-900 dark:text-indigo-100'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {canvas.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        {canvas.description}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center space-y-1">
          <p className="font-medium">Built with GoJS & React Flow</p>
          <p>9 Professional Diagram Types</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
