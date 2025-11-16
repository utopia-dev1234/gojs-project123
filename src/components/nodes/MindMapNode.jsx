import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Lightbulb } from 'lucide-react'

const MindMapNode = ({ data }) => {
  const getNodeStyle = () => {
    switch (data.level) {
      case 0:
        return {
          bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
          text: 'text-white',
          border: 'border-purple-700',
          size: 'text-lg font-bold px-6 py-4',
        }
      case 1:
        return {
          bg: 'bg-gradient-to-br from-blue-400 to-blue-500',
          text: 'text-white',
          border: 'border-blue-600',
          size: 'text-base font-semibold px-5 py-3',
        }
      default:
        return {
          bg: 'bg-gradient-to-br from-green-400 to-green-500',
          text: 'text-white',
          border: 'border-green-600',
          size: 'text-sm font-medium px-4 py-2',
        }
    }
  }

  const style = getNodeStyle()

  return (
    <div className={`${style.bg} ${style.text} ${style.size} rounded-lg border-2 ${style.border} shadow-lg min-w-[120px] flex items-center gap-2`}>
      <Handle type="target" position={Position.Left} />
      {data.level === 0 && <Lightbulb className="w-5 h-5" />}
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}

export default memo(MindMapNode)

