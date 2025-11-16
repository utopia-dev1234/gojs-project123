import { useCallback, useState } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { Plus, Download, Trash2, Save } from 'lucide-react'
import MindMapNode from './nodes/MindMapNode'

const nodeTypes = {
  mindMapNode: MindMapNode,
}

const initialNodes = [
  {
    id: '1',
    type: 'mindMapNode',
    position: { x: 400, y: 200 },
    data: { label: 'Central Idea', level: 0 },
  },
  {
    id: '2',
    type: 'mindMapNode',
    position: { x: 200, y: 100 },
    data: { label: 'Branch 1', level: 1 },
  },
  {
    id: '3',
    type: 'mindMapNode',
    position: { x: 200, y: 300 },
    data: { label: 'Branch 2', level: 1 },
  },
  {
    id: '4',
    type: 'mindMapNode',
    position: { x: 600, y: 100 },
    data: { label: 'Branch 3', level: 1 },
  },
  {
    id: '5',
    type: 'mindMapNode',
    position: { x: 50, y: 80 },
    data: { label: 'Sub-idea 1.1', level: 2 },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', animated: true },
  { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', animated: true },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', animated: true },
]

const MindMapCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [nodeIdCounter, setNodeIdCounter] = useState(6)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: 'smoothstep', animated: true }, eds)),
    [setEdges]
  )

  const addNode = () => {
    const newNode = {
      id: `${nodeIdCounter}`,
      type: 'mindMapNode',
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `New Idea ${nodeIdCounter}`, level: 1 },
    }
    setNodes((nds) => [...nds, newNode])
    setNodeIdCounter((prev) => prev + 1)
  }

  const clearCanvas = () => {
    if (window.confirm('Are you sure you want to clear the canvas?')) {
      setNodes([])
      setEdges([])
    }
  }

  const saveCanvas = () => {
    const data = {
      nodes,
      edges,
      timestamp: new Date().toISOString(),
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mindmap-${Date.now()}.json`
    a.click()
  }

  const exportImage = () => {
    alert('Export to PNG functionality would be implemented here using html2canvas or similar library')
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Mind Map Canvas</h2>
          <p className="text-sm text-gray-500">Organize ideas and strategies visually</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addNode}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add Node
          </button>
          <button
            onClick={saveCanvas}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <button
            onClick={exportImage}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
          <button
            onClick={clearCanvas}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm"
          >
            <Trash2 className="w-4 h-4" />
            Clear
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-gray-50">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Controls />
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.data.level === 0) return '#9333ea'
              if (n.data.level === 1) return '#3b82f6'
              return '#10b981'
            }}
            nodeColor={(n) => {
              if (n.data.level === 0) return '#f3e8ff'
              if (n.data.level === 1) return '#dbeafe'
              return '#d1fae5'
            }}
            nodeBorderRadius={8}
          />
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
        </ReactFlow>
      </div>
    </div>
  )
}

export default MindMapCanvas

