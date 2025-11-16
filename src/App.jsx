import { useState } from 'react'
import Sidebar from './components/Sidebar'
import MindMapCanvas from './components/MindMapCanvas'
import WorkflowCanvas from './components/WorkflowCanvas'
import StrategyCanvas from './components/StrategyCanvas'
import ProcessCanvas from './components/ProcessCanvas'

function App() {
  const [activeCanvas, setActiveCanvas] = useState('mindmap')

  const renderCanvas = () => {
    switch (activeCanvas) {
      case 'mindmap':
        return <MindMapCanvas />
      case 'workflow':
        return <WorkflowCanvas />
      case 'strategy':
        return <StrategyCanvas />
      case 'process':
        return <ProcessCanvas />
      default:
        return <MindMapCanvas />
    }
  }

  return (
    <div className="flex h-screen w-screen bg-gray-50">
      <Sidebar activeCanvas={activeCanvas} setActiveCanvas={setActiveCanvas} />
      <div className="flex-1 flex flex-col">
        {renderCanvas()}
      </div>
    </div>
  )
}

export default App

