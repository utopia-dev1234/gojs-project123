import { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import MindMapCanvas from './components/MindMapCanvas'
import WorkflowCanvas from './components/WorkflowCanvas'
import StrategyCanvas from './components/StrategyCanvas'
import ProcessCanvas from './components/ProcessCanvas'
import OrgChartCanvas from './components/gojs/OrgChartCanvas'
import BPMNCanvas from './components/gojs/BPMNCanvas'
import ERDCanvas from './components/gojs/ERDCanvas'
import NetworkCanvas from './components/gojs/NetworkCanvas'
import GanttCanvas from './components/gojs/GanttCanvas'
import ThemeDemo from './components/ThemeDemo'
import useStore from './store/useStore'

function App() {
  const { activeCanvas, theme } = useStore()

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const renderCanvas = () => {
    switch (activeCanvas) {
      case 'theme':
        return <ThemeDemo />
      case 'orgchart':
        return <OrgChartCanvas />
      case 'bpmn':
        return <BPMNCanvas />
      case 'erd':
        return <ERDCanvas />
      case 'network':
        return <NetworkCanvas />
      case 'gantt':
        return <GanttCanvas />
      case 'mindmap':
        return <MindMapCanvas />
      case 'workflow':
        return <WorkflowCanvas />
      case 'strategy':
        return <StrategyCanvas />
      case 'process':
        return <ProcessCanvas />
      default:
        return <ThemeDemo />
    }
  }

  return (
    <div className={`flex h-screen w-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
        {renderCanvas()}
      </div>
    </div>
  )
}

export default App

