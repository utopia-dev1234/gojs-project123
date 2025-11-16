import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { PlayCircle, StopCircle, GitBranch, Square } from 'lucide-react'

const WorkflowNode = ({ data }) => {
  const getNodeConfig = () => {
    switch (data.type) {
      case 'start':
        return {
          bg: 'bg-gradient-to-br from-green-500 to-green-600',
          icon: PlayCircle,
          shape: 'rounded-full',
        }
      case 'end':
        return {
          bg: 'bg-gradient-to-br from-red-500 to-red-600',
          icon: StopCircle,
          shape: 'rounded-full',
        }
      case 'decision':
        return {
          bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
          icon: GitBranch,
          shape: 'rounded-lg rotate-45',
        }
      default:
        return {
          bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
          icon: Square,
          shape: 'rounded-lg',
        }
    }
  }

  const config = getNodeConfig()
  const Icon = config.icon

  return (
    <div className="relative">
      <Handle type="target" position={Position.Top} />
      <div className={`${config.bg} ${config.shape} text-white px-6 py-3 shadow-lg border-2 border-white min-w-[160px] flex items-center gap-3 justify-center`}>
        <Icon className="w-5 h-5" />
        <div className={`font-semibold ${data.type === 'decision' ? '-rotate-45' : ''}`}>
          {data.label}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

export default memo(WorkflowNode)

