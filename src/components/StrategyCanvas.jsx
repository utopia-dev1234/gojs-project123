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
import StrategyNode from './nodes/StrategyNode'

const nodeTypes = {
  strategyNode: StrategyNode,
}

const initialNodes = [
  {
    id: '1',
    type: 'strategyNode',
    position: { x: 250, y: 0 },
    data: { label: 'Vision & Mission', type: 'vision' },
  },
  {
    id: '2',
    type: 'strategyNode',
    position: { x: 100, y: 120 },
    data: { label: 'Strategic Goal 1', type: 'goal' },
  },
  {
    id: '3',
    type: 'strategyNode',
    position: { x: 400, y: 120 },
    data: { label: 'Strategic Goal 2', type: 'goal' },
  },
  {
    id: '4',
    type: 'strategyNode',
    position: { x: 50, y: 240 },
    data: { label: 'Objective 1.1', type: 'objective' },
  },
  {
    id: '5',
    type: 'strategyNode',
    position: { x: 200, y: 240 },
    data: { label: 'Objective 1.2', type: 'objective' },
  },
  {
    id: '6',
    type: 'strategyNode',
    position: { x: 350, y: 240 },
    data: { label: 'Objective 2.1', type: 'objective' },
  },
  {
    id: '7',
    type: 'strategyNode',
    position: { x: 500, y: 240 },
    data: { label: 'Objective 2.2', type: 'objective' },
  },
  {
    id: '8',
    type: 'strategyNode',
    position: { x: 50, y: 360 },
    data: { label: 'Initiative A', type: 'initiative' },
  },
  {
    id: '9',
    type: 'strategyNode',
    position: { x: 200, y: 360 },
    data: { label: 'Initiative B', type: 'initiative' },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', type: 'step' },
  { id: 'e2-5', source: '2', target: '5', type: 'step' },
  { id: 'e3-6', source: '3', target: '6', type: 'step' },
  { id: 'e3-7', source: '3', target: '7', type: 'step' },
  { id: 'e4-8', source: '4', target: '8', type: 'step' },
  { id: 'e5-9', source: '5', target: '9', type: 'step' },
]

const StrategyCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [nodeIdCounter, setNodeIdCounter] = useState(10)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  )

  const addNode = (type = 'goal') => {
    const newNode = {
      id: `${nodeIdCounter}`,
      type: 'strategyNode',
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `New ${type} ${nodeIdCounter}`, type },
    }
    setNodes((nds) => [...nds, newNode])
    setNodeIdCounter((prev) => prev + 1)
  }

  const clearCanvas = () => {
    if (window.confirm('Are you sure you want to clear the strategy map?')) {
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
    a.download = `strategy-${Date.now()}.json`
    a.click()
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Strategy Map</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Visualize strategic pathways and decisions</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => addNode('goal')}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm text-sm"
          >
            <Plus className="w-4 h-4" />
            Goal
          </button>
          <button
            onClick={() => addNode('objective')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm"
          >
            <Plus className="w-4 h-4" />
            Objective
          </button>
          <button
            onClick={() => addNode('initiative')}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm text-sm"
          >
            <Plus className="w-4 h-4" />
            Initiative
          </button>
          <button
            onClick={saveCanvas}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm text-sm"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <button
            onClick={clearCanvas}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm text-sm"
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
          <Background variant={BackgroundVariant.Dots} />
        </ReactFlow>
      </div>
    </div>
  )
}

export default StrategyCanvas

