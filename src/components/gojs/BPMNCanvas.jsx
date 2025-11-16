import { useEffect, useRef, useState } from 'react'
import * as go from 'gojs'
import {
  Workflow,
  Plus,
  Download,
  Upload,
  Trash2,
  Save,
  Play,
  Square,
  Circle,
  Diamond,
} from 'lucide-react'

const BPMNCanvas = () => {
  const diagramRef = useRef(null)
  const divRef = useRef(null)
  const [diagram, setDiagram] = useState(null)
  const [selectedNodeType, setSelectedNodeType] = useState('task')

  useEffect(() => {
    if (!divRef.current) return

    const $ = go.GraphObject.make

    const myDiagram = $(go.Diagram, divRef.current, {
      'undoManager.isEnabled': true,
      'linkingTool.direction': go.LinkingTool.ForwardsOnly,
      layout: $(go.LayeredDigraphLayout, {
        isInitial: false,
        isOngoing: false,
        layerSpacing: 50,
      }),
      'animationManager.isEnabled': true,
    })

    // Helper function to create different BPMN shapes
    function nodeStyle() {
      return [
        new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        {
          locationSpot: go.Spot.Center,
          isShadowed: true,
          shadowBlur: 1,
          shadowOffset: new go.Point(0, 1),
          shadowColor: 'rgba(0, 0, 0, 0.14)',
        },
      ]
    }

    // Event Node Template (Circle)
    const eventTemplate = $(
      go.Node,
      'Spot',
      nodeStyle(),
      $(go.Shape, 'Circle', {
        fill: '#52D017',
        strokeWidth: 2,
        stroke: '#2D7600',
        desiredSize: new go.Size(60, 60),
        portId: '',
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      }),
      $(
        go.TextBlock,
        {
          font: '11px Inter, sans-serif',
          stroke: 'white',
          maxSize: new go.Size(50, NaN),
          wrap: go.TextBlock.WrapFit,
          editable: true,
        },
        new go.Binding('text', 'text').makeTwoWay()
      )
    )

    // Task Node Template (Rounded Rectangle)
    const taskTemplate = $(
      go.Node,
      'Auto',
      nodeStyle(),
      $(go.Shape, 'RoundedRectangle', {
        fill: '#4F46E5',
        strokeWidth: 2,
        stroke: '#3730A3',
        minSize: new go.Size(100, 60),
        portId: '',
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      }),
      $(
        go.Panel,
        'Vertical',
        { margin: 8 },
        $(
          go.TextBlock,
          {
            font: 'bold 12px Inter, sans-serif',
            stroke: 'white',
            maxSize: new go.Size(90, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true,
          },
          new go.Binding('text', 'text').makeTwoWay()
        ),
        $(
          go.TextBlock,
          {
            font: '10px Inter, sans-serif',
            stroke: 'rgba(255,255,255,0.8)',
            maxSize: new go.Size(90, NaN),
            wrap: go.TextBlock.WrapFit,
          },
          new go.Binding('text', 'description')
        )
      )
    )

    // Gateway Node Template (Diamond)
    const gatewayTemplate = $(
      go.Node,
      'Spot',
      nodeStyle(),
      $(go.Shape, 'Diamond', {
        fill: '#F59E0B',
        strokeWidth: 2,
        stroke: '#D97706',
        desiredSize: new go.Size(70, 70),
        portId: '',
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      }),
      $(
        go.TextBlock,
        {
          font: 'bold 24px Inter, sans-serif',
          stroke: 'white',
        },
        new go.Binding('text', 'gatewayType')
      )
    )

    // Subprocess Node Template (Rounded Rectangle with icon)
    const subprocessTemplate = $(
      go.Node,
      'Auto',
      nodeStyle(),
      $(go.Shape, 'RoundedRectangle', {
        fill: '#8B5CF6',
        strokeWidth: 3,
        stroke: '#6D28D9',
        minSize: new go.Size(120, 80),
        portId: '',
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      }),
      $(
        go.Panel,
        'Vertical',
        { margin: 10 },
        $(
          go.TextBlock,
          {
            font: 'bold 13px Inter, sans-serif',
            stroke: 'white',
            maxSize: new go.Size(100, NaN),
            wrap: go.TextBlock.WrapFit,
            editable: true,
          },
          new go.Binding('text', 'text').makeTwoWay()
        ),
        $(go.TextBlock, '+', {
          font: 'bold 20px Inter, sans-serif',
          stroke: 'white',
          margin: new go.Margin(5, 0, 0, 0),
        })
      )
    )

    // Data Object Node Template
    const dataObjectTemplate = $(
      go.Node,
      'Auto',
      nodeStyle(),
      $(go.Shape, 'Rectangle', {
        fill: '#E0E7FF',
        strokeWidth: 2,
        stroke: '#818CF8',
        desiredSize: new go.Size(60, 70),
        portId: '',
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      }),
      $(
        go.TextBlock,
        {
          font: '10px Inter, sans-serif',
          stroke: '#3730A3',
          maxSize: new go.Size(50, NaN),
          wrap: go.TextBlock.WrapFit,
          editable: true,
          margin: new go.Margin(20, 5, 5, 5),
        },
        new go.Binding('text', 'text').makeTwoWay()
      )
    )

    // End Event Template (Thick circle)
    const endEventTemplate = $(
      go.Node,
      'Spot',
      nodeStyle(),
      $(go.Shape, 'Circle', {
        fill: '#EF4444',
        strokeWidth: 4,
        stroke: '#991B1B',
        desiredSize: new go.Size(60, 60),
        portId: '',
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      }),
      $(
        go.TextBlock,
        {
          font: '11px Inter, sans-serif',
          stroke: 'white',
          maxSize: new go.Size(50, NaN),
          wrap: go.TextBlock.WrapFit,
          editable: true,
        },
        new go.Binding('text', 'text').makeTwoWay()
      )
    )

    // Map of templates
    const templatesMap = new go.Map()
    templatesMap.add('event', eventTemplate)
    templatesMap.add('task', taskTemplate)
    templatesMap.add('gateway', gatewayTemplate)
    templatesMap.add('subprocess', subprocessTemplate)
    templatesMap.add('dataObject', dataObjectTemplate)
    templatesMap.add('endEvent', endEventTemplate)

    myDiagram.nodeTemplateMap = templatesMap

    // Link Template
    myDiagram.linkTemplate = $(
      go.Link,
      {
        routing: go.Link.AvoidsNodes,
        curve: go.Link.JumpOver,
        corner: 5,
        toShortLength: 4,
        relinkableFrom: true,
        relinkableTo: true,
        reshapable: true,
        resegmentable: true,
      },
      new go.Binding('points').makeTwoWay(),
      $(go.Shape, { stroke: '#6B7280', strokeWidth: 2 }),
      $(go.Shape, { toArrow: 'Standard', stroke: '#6B7280', fill: '#6B7280' }),
      $(
        go.Panel,
        'Auto',
        $(go.Shape, 'RoundedRectangle', {
          fill: 'white',
          stroke: '#E5E7EB',
          strokeWidth: 1,
        }),
        $(
          go.TextBlock,
          {
            font: '10px Inter, sans-serif',
            stroke: '#374151',
            margin: 3,
            editable: true,
          },
          new go.Binding('text', 'condition').makeTwoWay()
        )
      )
    )

    // Sample BPMN model
    const nodeDataArray = [
      { key: 1, category: 'event', text: 'Start', loc: '50 150' },
      {
        key: 2,
        category: 'task',
        text: 'Receive Order',
        description: 'Process customer order',
        loc: '170 150',
      },
      {
        key: 3,
        category: 'gateway',
        gatewayType: 'X',
        text: '',
        loc: '320 150',
      },
      {
        key: 4,
        category: 'task',
        text: 'Check Inventory',
        description: 'Verify stock',
        loc: '450 80',
      },
      {
        key: 5,
        category: 'task',
        text: 'Order Items',
        description: 'Restock',
        loc: '450 220',
      },
      {
        key: 6,
        category: 'subprocess',
        text: 'Process Payment',
        loc: '600 150',
      },
      {
        key: 7,
        category: 'task',
        text: 'Ship Order',
        description: 'Dispatch',
        loc: '760 150',
      },
      { key: 8, category: 'endEvent', text: 'End', loc: '880 150' },
      { key: 9, category: 'dataObject', text: 'Order Data', loc: '320 50' },
    ]

    const linkDataArray = [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4, condition: 'In Stock' },
      { from: 3, to: 5, condition: 'Out of Stock' },
      { from: 4, to: 6 },
      { from: 5, to: 6 },
      { from: 6, to: 7 },
      { from: 7, to: 8 },
      { from: 2, to: 9 },
    ]

    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)

    diagramRef.current = myDiagram
    setDiagram(myDiagram)

    return () => {
      myDiagram.div = null
    }
  }, [])

  const addNode = (type) => {
    if (!diagram) return

    const nodeData = {
      key: diagram.model.nodeDataArray.length + 1,
      category: type,
    }

    switch (type) {
      case 'event':
        nodeData.text = 'Event'
        break
      case 'task':
        nodeData.text = 'New Task'
        nodeData.description = 'Description'
        break
      case 'gateway':
        nodeData.gatewayType = 'X'
        break
      case 'subprocess':
        nodeData.text = 'Subprocess'
        break
      case 'dataObject':
        nodeData.text = 'Data'
        break
      case 'endEvent':
        nodeData.text = 'End'
        break
    }

    diagram.model.addNodeData(nodeData)
  }

  const exportJSON = () => {
    if (!diagram) return
    const data = diagram.model.toJson()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `bpmn-${Date.now()}.json`
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
        a.download = `bpmn-${Date.now()}.png`
        a.click()
        URL.revokeObjectURL(url)
      },
    })
  }

  const clearDiagram = () => {
    if (!diagram) return
    if (window.confirm('Are you sure you want to clear the workflow?')) {
      diagram.clear()
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-indigo-600" />
            BPMN Workflow Designer
          </h2>
          <p className="text-sm text-gray-500">
            Business Process Model and Notation
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1 border-r border-gray-300 pr-3 mr-1">
            <button
              onClick={() => addNode('event')}
              className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
              title="Add Start Event"
            >
              <Circle className="w-4 h-4" />
            </button>
            <button
              onClick={() => addNode('task')}
              className="flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
              title="Add Task"
            >
              <Square className="w-4 h-4" />
            </button>
            <button
              onClick={() => addNode('gateway')}
              className="flex items-center gap-2 px-3 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors"
              title="Add Gateway"
            >
              <Diamond className="w-4 h-4" />
            </button>
            <button
              onClick={() => addNode('subprocess')}
              className="flex items-center gap-2 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
              title="Add Subprocess"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => addNode('endEvent')}
              className="flex items-center gap-2 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              title="Add End Event"
            >
              <Play className="w-4 h-4 rotate-180" />
            </button>
          </div>
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

      {/* Canvas */}
      <div className="flex-1 bg-gray-50 relative">
        <div ref={divRef} className="w-full h-full" />
      </div>

      {/* Status Bar */}
      <div className="bg-white border-t border-gray-200 px-6 py-2 flex items-center justify-between text-sm text-gray-600">
        <div>
          Nodes: {diagram ? diagram.model.nodeDataArray.length : 0} | Links:{' '}
          {diagram ? diagram.links.count : 0}
        </div>
        <div>Drag to connect nodes | Double-click to edit text</div>
      </div>
    </div>
  )
}

export default BPMNCanvas

