import { useCallback, useState } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { Plus, Download, Trash2, Save } from 'lucide-react'
import ProcessNode from './nodes/ProcessNode'

const nodeTypes = {
  processNode: ProcessNode,
}

const initialNodes = [
  {
    id: '1',
    type: 'processNode',
    position: { x: 50, y: 100 },
    data: { label: 'Input', type: 'input' },
  },
  {
    id: '2',
    type: 'processNode',
    position: { x: 250, y: 100 },
    data: { label: 'Processing Unit', type: 'process' },
  },
  {
    id: '3',
    type: 'processNode',
    position: { x: 450, y: 50 },
    data: { label: 'Quality Check', type: 'validation' },
  },
  {
    id: '4',
    type: 'processNode',
    position: { x: 450, y: 180 },
    data: { label: 'Data Storage', type: 'storage' },
  },
  {
    id: '5',
    type: 'processNode',
    position: { x: 650, y: 100 },
    data: { label: 'Output', type: 'output' },
  },
  {
    id: '6',
    type: 'processNode',
    position: { x: 250, y: 250 },
    data: { label: 'Backup System', type: 'subprocess' },
  },
]

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e2-6',
    source: '2',
    target: '6',
    style: { strokeDasharray: '5,5' },
    label: 'backup',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
]

const ProcessCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [nodeIdCounter, setNodeIdCounter] = useState(7)

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
            markerEnd: { type: MarkerType.ArrowClosed },
          },
          eds
        )
      ),
    [setEdges]
  )

  const addNode = (type = 'process') => {
    const newNode = {
      id: `${nodeIdCounter}`,
      type: 'processNode',
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `New ${type} ${nodeIdCounter}`, type },
    }
    setNodes((nds) => [...nds, newNode])
    setNodeIdCounter((prev) => prev + 1)
  }

  const clearCanvas = () => {
    if (window.confirm('Are you sure you want to clear the process map?')) {
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
    a.download = `process-${Date.now()}.json`
    a.click()
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Process Mapping Canvas</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Visualize operational systems and flows</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => addNode('process')}
            className="flex items-center gap-2 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-sm text-sm"
          >
            <Plus className="w-4 h-4" />
            Process
          </button>
          <button
            onClick={() => addNode('storage')}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm"
          >
            <Plus className="w-4 h-4" />
            Storage
          </button>
          <button
            onClick={() => addNode('validation')}
            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm text-sm"
          >
            <Plus className="w-4 h-4" />
            Check
          </button>
          <button
            onClick={saveCanvas}
            className="flex items-center gap-2 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm text-sm"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <button
            onClick={clearCanvas}
            className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm text-sm"
          >
            <Trash2 className="w-4 h-4" />
            Clear
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-900">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Cross} />
        </ReactFlow>
      </div>
    </div>
  )
}

export default ProcessCanvas

