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
import WorkflowNode from './nodes/WorkflowNode'

const nodeTypes = {
  workflowNode: WorkflowNode,
}

const initialNodes = [
  {
    id: '1',
    type: 'workflowNode',
    position: { x: 250, y: 50 },
    data: { label: 'Start Process', type: 'start' },
  },
  {
    id: '2',
    type: 'workflowNode',
    position: { x: 250, y: 150 },
    data: { label: 'Step 1: Gather Requirements', type: 'process' },
  },
  {
    id: '3',
    type: 'workflowNode',
    position: { x: 250, y: 250 },
    data: { label: 'Decision Point', type: 'decision' },
  },
  {
    id: '4',
    type: 'workflowNode',
    position: { x: 100, y: 350 },
    data: { label: 'Path A: Review', type: 'process' },
  },
  {
    id: '5',
    type: 'workflowNode',
    position: { x: 400, y: 350 },
    data: { label: 'Path B: Approve', type: 'process' },
  },
  {
    id: '6',
    type: 'workflowNode',
    position: { x: 250, y: 450 },
    data: { label: 'End Process', type: 'end' },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Begin' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', label: 'No', animated: true },
  { id: 'e3-5', source: '3', target: '5', label: 'Yes', animated: true },
  { id: 'e4-6', source: '4', target: '6', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
]

const WorkflowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [nodeIdCounter, setNodeIdCounter] = useState(7)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  )

  const addNode = (type = 'process') => {
    const newNode = {
      id: `${nodeIdCounter}`,
      type: 'workflowNode',
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `New Step ${nodeIdCounter}`, type },
    }
    setNodes((nds) => [...nds, newNode])
    setNodeIdCounter((prev) => prev + 1)
  }

  const clearCanvas = () => {
    if (window.confirm('Are you sure you want to clear the workflow?')) {
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
    a.download = `workflow-${Date.now()}.json`
    a.click()
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Workflow Builder</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Build step-by-step operational processes</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => addNode('process')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Process
          </button>
          <button
            onClick={() => addNode('decision')}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Decision
          </button>
          <button
            onClick={saveCanvas}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            Save
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
          <Background variant={BackgroundVariant.Lines} />
        </ReactFlow>
      </div>
    </div>
  )
}

export default WorkflowCanvas

