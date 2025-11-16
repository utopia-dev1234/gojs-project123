import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Target, Flag, Zap, Eye } from 'lucide-react'

const StrategyNode = ({ data }) => {
  const getNodeConfig = () => {
    switch (data.type) {
      case 'vision':
        return {
          bg: 'bg-gradient-to-br from-purple-600 to-purple-700',
          icon: Eye,
          border: 'border-purple-800',
        }
      case 'goal':
        return {
          bg: 'bg-gradient-to-br from-green-500 to-green-600',
          icon: Flag,
          border: 'border-green-700',
        }
      case 'objective':
        return {
          bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
          icon: Target,
          border: 'border-blue-700',
        }
      case 'initiative':
        return {
          bg: 'bg-gradient-to-br from-orange-500 to-orange-600',
          icon: Zap,
          border: 'border-orange-700',
        }
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-500 to-gray-600',
          icon: Target,
          border: 'border-gray-700',
        }
    }
  }

  const config = getNodeConfig()
  const Icon = config.icon

  return (
    <div className="relative">
      <Handle type="target" position={Position.Top} />
      <div className={`${config.bg} text-white rounded-lg px-5 py-3 shadow-lg border-2 ${config.border} min-w-[140px]`}>
        <div className="flex items-center gap-2 justify-center">
          <Icon className="w-4 h-4" />
          <div className="font-semibold text-sm text-center">{data.label}</div>
        </div>
        <div className="text-xs opacity-75 text-center mt-1 capitalize">{data.type}</div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

export default memo(StrategyNode)

