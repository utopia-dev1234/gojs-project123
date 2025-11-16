import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Database, CheckCircle, Box, Download, Upload, Layers } from 'lucide-react'

const ProcessNode = ({ data }) => {
  const getNodeConfig = () => {
    switch (data.type) {
      case 'input':
        return {
          bg: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
          icon: Download,
          border: 'border-cyan-700',
          shape: 'rounded-r-full rounded-l-lg',
        }
      case 'output':
        return {
          bg: 'bg-gradient-to-br from-pink-500 to-pink-600',
          icon: Upload,
          border: 'border-pink-700',
          shape: 'rounded-l-full rounded-r-lg',
        }
      case 'storage':
        return {
          bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
          icon: Database,
          border: 'border-blue-700',
          shape: 'rounded-lg',
        }
      case 'validation':
        return {
          bg: 'bg-gradient-to-br from-green-500 to-green-600',
          icon: CheckCircle,
          border: 'border-green-700',
          shape: 'rounded-full',
        }
      case 'subprocess':
        return {
          bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
          icon: Layers,
          border: 'border-purple-700',
          shape: 'rounded-lg',
        }
      default:
        return {
          bg: 'bg-gradient-to-br from-orange-500 to-orange-600',
          icon: Box,
          border: 'border-orange-700',
          shape: 'rounded-lg',
        }
    }
  }

  const config = getNodeConfig()
  const Icon = config.icon

  return (
    <div className="relative">
      <Handle type="target" position={Position.Left} />
      <div
        className={`${config.bg} ${config.shape} text-white px-5 py-3 shadow-lg border-2 ${config.border} min-w-[140px]`}
      >
        <div className="flex items-center gap-2 justify-center">
          <Icon className="w-5 h-5" />
          <div className="font-semibold text-sm">{data.label}</div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}

export default memo(ProcessNode)

