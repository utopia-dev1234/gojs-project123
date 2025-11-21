import { X, Settings } from 'lucide-react'
import useStore from '../../store/useStore'

const PropertiesPanel = ({ selectedNode, onUpdate, onClose }) => {
  const { theme } = useStore()

  if (!selectedNode) {
    return (
      <div className="w-80 bg-white border-l border-gray-200 shadow-lg flex flex-col" data-properties-panel>
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-800">Properties</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
          Select a node to view properties
        </div>
      </div>
    )
  }

  return (
    <div className="w-80 bg-white border-l border-gray-200 shadow-lg flex flex-col" data-properties-panel>
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-gray-800">Properties</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {/* Node ID */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Node ID
            </label>
            <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600">
              {selectedNode.key || selectedNode.id}
            </div>
          </div>

          {/* Name/Text */}
          {(selectedNode.name || selectedNode.text) && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                defaultValue={selectedNode.name || selectedNode.text}
                onChange={(e) =>
                  onUpdate &&
                  onUpdate({ ...selectedNode, name: e.target.value, text: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
          )}

          {/* Label */}
          {selectedNode.label && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Label
              </label>
              <input
                type="text"
                defaultValue={selectedNode.label}
                onChange={(e) =>
                  onUpdate && onUpdate({ ...selectedNode, label: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
          )}

          {/* Type/Category */}
          {(selectedNode.type || selectedNode.category) && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Type
              </label>
              <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600 capitalize">
                {selectedNode.type || selectedNode.category}
              </div>
            </div>
          )}

          {/* Color */}
          {selectedNode.color && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Color
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  defaultValue={selectedNode.color}
                  onChange={(e) =>
                    onUpdate && onUpdate({ ...selectedNode, color: e.target.value })
                  }
                  className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  defaultValue={selectedNode.color}
                  onChange={(e) =>
                    onUpdate && onUpdate({ ...selectedNode, color: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                />
              </div>
            </div>
          )}

          {/* Description */}
          {selectedNode.description && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                defaultValue={selectedNode.description}
                onChange={(e) =>
                  onUpdate && onUpdate({ ...selectedNode, description: e.target.value })
                }
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
              />
            </div>
          )}

          {/* Department (for org charts) */}
          {selectedNode.department && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Department
              </label>
              <input
                type="text"
                defaultValue={selectedNode.department}
                onChange={(e) =>
                  onUpdate && onUpdate({ ...selectedNode, department: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>
          )}

          {/* IP Address (for network diagrams) */}
          {selectedNode.ip && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                IP Address
              </label>
              <input
                type="text"
                defaultValue={selectedNode.ip}
                onChange={(e) =>
                  onUpdate && onUpdate({ ...selectedNode, ip: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm font-mono"
              />
            </div>
          )}

          {/* Status */}
          {selectedNode.status && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                defaultValue={selectedNode.status}
                onChange={(e) =>
                  onUpdate && onUpdate({ ...selectedNode, status: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Running">Running</option>
                <option value="Stopped">Stopped</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
          )}

          {/* Progress (for Gantt charts) */}
          {selectedNode.progress !== undefined && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Progress: {selectedNode.progress}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue={selectedNode.progress}
                onChange={(e) =>
                  onUpdate &&
                  onUpdate({ ...selectedNode, progress: parseInt(e.target.value) })
                }
                className="w-full"
              />
            </div>
          )}

          {/* Additional Metadata */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xs font-medium text-gray-700 mb-2">Metadata</h4>
            <div className="space-y-1 text-xs text-gray-500">
              {selectedNode.loc && (
                <div>Position: {selectedNode.loc}</div>
              )}
              {selectedNode.position && (
                <div>
                  Position: {Math.round(selectedNode.position.x)},{' '}
                  {Math.round(selectedNode.position.y)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
        >
          Done
        </button>
      </div>
    </div>
  )
}

export default PropertiesPanel

