import { Brain, GitBranch, Target, Network, Home } from 'lucide-react'

const Sidebar = ({ activeCanvas, setActiveCanvas }) => {
  const menuItems = [
    { id: 'mindmap', label: 'Mind Map', icon: Brain, color: 'text-purple-600' },
    { id: 'workflow', label: 'Workflow Builder', icon: GitBranch, color: 'text-blue-600' },
    { id: 'strategy', label: 'Strategy Map', icon: Target, color: 'text-green-600' },
    { id: 'process', label: 'Process Map', icon: Network, color: 'text-orange-600' },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Visual Canvas</h1>
            <p className="text-xs text-gray-500">Suite v1.0</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeCanvas === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveCanvas(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? item.color : 'text-gray-400'}`} />
                <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-700 mb-1">Built by Utopia Dev</p>
          <p className="text-xs text-gray-500">AI-Accelerated Development</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

