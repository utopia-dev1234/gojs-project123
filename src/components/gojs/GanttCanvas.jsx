import { useEffect, useRef, useState } from 'react'
import * as go from 'gojs'
import {
  Calendar,
  Plus,
  Download,
  Upload,
  Trash2,
  Save,
  CalendarDays,
  Clock,
} from 'lucide-react'

const GanttCanvas = () => {
  const diagramRef = useRef(null)
  const divRef = useRef(null)
  const [diagram, setDiagram] = useState(null)

  useEffect(() => {
    if (!divRef.current) return

    const $ = go.GraphObject.make

    const myDiagram = $(go.Diagram, divRef.current, {
      _widthFactor: 1, // unit width for day
      'undoManager.isEnabled': true,
      'animationManager.isEnabled': true,
      'commandHandler.deletesTree': true,
      layout: $(go.TreeLayout, {
        alignment: go.TreeLayout.AlignmentStart,
        angle: 0,
        compaction: go.TreeLayout.CompactionNone,
        layerSpacing: 16,
        layerSpacingParentOverlap: 1,
        nodeIndentPastParent: 1,
        nodeSpacing: 0,
        setsPortSpot: false,
        setsChildPortSpot: false,
      }),
    })

    // Convert data to chart coordinates
    function convertToDateCoordinate(date) {
      const startDate = new Date('2024-01-01')
      const diffTime = Math.abs(date - startDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays * 20 // 20 pixels per day
    }

    // Task Node Template
    myDiagram.nodeTemplate = $(
      go.Node,
      'Spot',
      {
        selectionAdornmentTemplate: $(
          go.Adornment,
          'Spot',
          $(go.Placeholder),
          $(go.Shape, 'RoundedRectangle', {
            fill: null,
            stroke: '#4F46E5',
            strokeWidth: 3,
            spot1: new go.Spot(0, 0, -4, -4),
            spot2: new go.Spot(1, 1, 4, 4),
          })
        ),
        locationSpot: go.Spot.Left,
        locationObjectName: 'MAIN',
        resizable: true,
        resizeObjectName: 'MAIN',
        rotatable: false,
      },
      new go.Binding('location', 'start', (d) =>
        new go.Point(convertToDateCoordinate(new Date(d)), 0)
      ),
      $(
        go.Panel,
        'Auto',
        {
          name: 'MAIN',
          cursor: 'pointer',
          fromLinkable: true,
          toLinkable: true,
        },
        $(
          go.Shape,
          'RoundedRectangle',
          {
            height: 32,
            strokeWidth: 1,
          },
          new go.Binding('fill', 'color'),
          new go.Binding('stroke', 'color'),
          new go.Binding('width', '', (data) => {
            const start = new Date(data.start)
            const end = new Date(data.end)
            const diffTime = Math.abs(end - start)
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            return Math.max(diffDays * 20, 80)
          })
        ),
        $(
          go.Panel,
          'Horizontal',
          { margin: 4 },
          $(
            go.TextBlock,
            {
              font: 'bold 11px "Inter", sans-serif',
              stroke: 'white',
              editable: true,
              margin: new go.Margin(0, 4, 0, 0),
            },
            new go.Binding('text', 'text').makeTwoWay()
          ),
          $(
            go.TextBlock,
            {
              font: '9px "Inter", sans-serif',
              stroke: 'rgba(255,255,255,0.8)',
            },
            new go.Binding('text', '', (data) => {
              const start = new Date(data.start)
              const end = new Date(data.end)
              const diffTime = Math.abs(end - start)
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
              return `${diffDays}d`
            })
          )
        )
      ),
      // Task label on the left
      $(
        go.TextBlock,
        {
          alignment: new go.Spot(0, 0.5, -10, 0),
          alignmentFocus: go.Spot.Right,
          font: '11px "Inter", sans-serif',
          stroke: '#374151',
        },
        new go.Binding('text', 'label')
      ),
      // Progress indicator
      $(
        go.Shape,
        'RoundedRectangle',
        {
          alignment: go.Spot.Left,
          height: 32,
          strokeWidth: 0,
          opacity: 0.4,
        },
        new go.Binding('fill', 'color'),
        new go.Binding('width', '', (data) => {
          const start = new Date(data.start)
          const end = new Date(data.end)
          const diffTime = Math.abs(end - start)
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
          const totalWidth = Math.max(diffDays * 20, 80)
          return totalWidth * (data.progress / 100)
        })
      )
    )

    // Link template for dependencies
    myDiagram.linkTemplate = $(
      go.Link,
      {
        routing: go.Link.Orthogonal,
        corner: 5,
        toShortLength: 6,
        relinkableFrom: true,
        relinkableTo: true,
      },
      $(go.Shape, { stroke: '#9CA3AF', strokeWidth: 2 }),
      $(go.Shape, {
        toArrow: 'Standard',
        fill: '#9CA3AF',
        stroke: '#9CA3AF',
      })
    )

    // Sample Gantt Chart Data
    const nodeDataArray = [
      {
        key: 1,
        text: 'Planning',
        label: 'Project Planning',
        start: '2024-01-01',
        end: '2024-01-15',
        color: '#6366F1',
        progress: 100,
      },
      {
        key: 2,
        text: 'Requirements',
        label: 'Requirements Analysis',
        start: '2024-01-08',
        end: '2024-01-22',
        color: '#8B5CF6',
        progress: 100,
      },
      {
        key: 3,
        text: 'Design',
        label: 'System Design',
        start: '2024-01-20',
        end: '2024-02-10',
        color: '#3B82F6',
        progress: 85,
      },
      {
        key: 4,
        text: 'UI Design',
        label: 'UI/UX Design',
        start: '2024-01-25',
        end: '2024-02-08',
        color: '#06B6D4',
        progress: 90,
      },
      {
        key: 5,
        text: 'Backend Dev',
        label: 'Backend Development',
        start: '2024-02-05',
        end: '2024-03-15',
        color: '#10B981',
        progress: 60,
      },
      {
        key: 6,
        text: 'Frontend Dev',
        label: 'Frontend Development',
        start: '2024-02-12',
        end: '2024-03-20',
        color: '#14B8A6',
        progress: 45,
      },
      {
        key: 7,
        text: 'Integration',
        label: 'System Integration',
        start: '2024-03-10',
        end: '2024-03-25',
        color: '#F59E0B',
        progress: 30,
      },
      {
        key: 8,
        text: 'Testing',
        label: 'QA Testing',
        start: '2024-03-20',
        end: '2024-04-10',
        color: '#EF4444',
        progress: 15,
      },
      {
        key: 9,
        text: 'Deployment',
        label: 'Production Deployment',
        start: '2024-04-05',
        end: '2024-04-15',
        color: '#EC4899',
        progress: 0,
      },
      {
        key: 10,
        text: 'Support',
        label: 'Post-Launch Support',
        start: '2024-04-15',
        end: '2024-05-15',
        color: '#8B5CF6',
        progress: 0,
      },
    ]

    const linkDataArray = [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 3, to: 5 },
      { from: 4, to: 6 },
      { from: 5, to: 7 },
      { from: 6, to: 7 },
      { from: 7, to: 8 },
      { from: 8, to: 9 },
      { from: 9, to: 10 },
    ]

    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)

    // Add grid lines for timeline
    myDiagram.add(
      $(go.Part, { layerName: 'Grid', location: new go.Point(0, 0) })
    )

    diagramRef.current = myDiagram
    setDiagram(myDiagram)

    return () => {
      myDiagram.div = null
    }
  }, [])

  const addTask = () => {
    if (!diagram) return
    const newTask = {
      key: diagram.model.nodeDataArray.length + 1,
      text: 'New Task',
      label: 'New Task',
      start: '2024-02-01',
      end: '2024-02-15',
      color: '#6366F1',
      progress: 0,
    }
    diagram.model.addNodeData(newTask)
  }

  const exportJSON = () => {
    if (!diagram) return
    const data = diagram.model.toJson()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `gantt-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importJSON = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          try {
            diagram.model = go.Model.fromJson(event.target.result)
          } catch (err) {
            alert('Error loading file: ' + err.message)
          }
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  const exportImage = async () => {
    if (!diagram) return
    await diagram.makeImageData({
      background: 'white',
      returnType: 'blob',
      callback: (blob) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `gantt-${Date.now()}.png`
        a.click()
        URL.revokeObjectURL(url)
      },
    })
  }

  const clearDiagram = () => {
    if (!diagram) return
    if (window.confirm('Are you sure you want to clear the timeline?')) {
      diagram.clear()
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Gantt Chart Timeline
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Project scheduling and task dependencies
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addTask}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </button>
          <button
            onClick={importJSON}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Upload className="w-4 h-4" />
            Import
          </button>
          <button
            onClick={exportJSON}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            Save
          </button>
          <button
            onClick={exportImage}
            data-export-button
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
          <button
            onClick={clearDiagram}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm"
          >
            <Trash2 className="w-4 h-4" />
            Clear
          </button>
        </div>
      </div>

      {/* Timeline Header */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-2 flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          <span>Jan 2024 - May 2024</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Scale: 1 day = 20px</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 relative overflow-auto">
        <div ref={divRef} className="w-full h-full min-w-[2000px] gojs-canvas" data-gojs-canvas="gantt" />
      </div>

      {/* Status Bar */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-2 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-4">
          <span>
            Tasks: {diagram ? diagram.model.nodeDataArray.length : 0}
          </span>
          <span>
            Dependencies: {diagram ? diagram.links.count : 0}
          </span>
          <span className="ml-4 text-xs">
            Progress bar shows completion percentage
          </span>
        </div>
        <div>Drag tasks to adjust timeline | Resize to change duration</div>
      </div>
    </div>
  )
}

export default GanttCanvas

