import { useEffect, useRef, useState } from 'react'
import * as go from 'gojs'
import {
  Network,
  Plus,
  Download,
  Upload,
  Trash2,
  Save,
  Server,
  Laptop,
  Smartphone,
  Cloud,
  Shield,
} from 'lucide-react'

const NetworkCanvas = () => {
  const diagramRef = useRef(null)
  const divRef = useRef(null)
  const [diagram, setDiagram] = useState(null)

  useEffect(() => {
    if (!divRef.current) return

    const $ = go.GraphObject.make

    const myDiagram = $(go.Diagram, divRef.current, {
      'undoManager.isEnabled': true,
      layout: $(go.ForceDirectedLayout, {
        maxIterations: 200,
        defaultSpringLength: 100,
        defaultElectricalCharge: 150,
      }),
      'animationManager.isEnabled': true,
    })

    // Helper function for node styling
    function makeNodeTemplate(figure, color, strokeColor) {
      return $(
        go.Node,
        'Vertical',
        {
          locationSpot: go.Spot.Center,
          locationObjectName: 'ICON',
          selectionAdornmentTemplate: $(
            go.Adornment,
            'Auto',
            $(go.Shape, 'Circle', {
              fill: null,
              stroke: '#4F46E5',
              strokeWidth: 3,
            }),
            $(go.Placeholder)
          ),
        },
        new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(
          go.Panel,
          'Auto',
          {
            name: 'ICON',
          },
          $(go.Shape, figure, {
            fill: color,
            stroke: strokeColor,
            strokeWidth: 3,
            desiredSize: new go.Size(70, 70),
            portId: '',
            fromLinkable: true,
            toLinkable: true,
            cursor: 'pointer',
          }),
          $(
            go.TextBlock,
            {
              font: 'bold 18px "Inter", sans-serif',
              stroke: 'white',
              margin: 5,
            },
            new go.Binding('text', 'icon')
          )
        ),
        $(
          go.TextBlock,
          {
            font: 'bold 12px "Inter", sans-serif',
            stroke: '#111827',
            margin: new go.Margin(8, 0, 2, 0),
            editable: true,
          },
          new go.Binding('text', 'name').makeTwoWay()
        ),
        $(
          go.TextBlock,
          {
            font: '10px "Inter", sans-serif',
            stroke: '#6B7280',
          },
          new go.Binding('text', 'ip')
        ),
        $(
          go.Panel,
          'Auto',
          {
            margin: new go.Margin(4, 0, 0, 0),
          },
          $(go.Shape, 'RoundedRectangle', {
            fill: '#ECFDF5',
            stroke: null,
          }),
          $(
            go.TextBlock,
            {
              font: '9px "Inter", sans-serif',
              stroke: '#065F46',
              margin: 3,
            },
            new go.Binding('text', 'status')
          )
        )
      )
    }

    // Create templates for different device types
    const templatesMap = new go.Map()

    templatesMap.add('server', makeNodeTemplate('Rectangle', '#6366F1', '#4338CA'))
    templatesMap.add('router', makeNodeTemplate('Diamond', '#F59E0B', '#D97706'))
    templatesMap.add('firewall', makeNodeTemplate('TriangleUp', '#EF4444', '#DC2626'))
    templatesMap.add('switch', makeNodeTemplate('Ellipse', '#8B5CF6', '#7C3AED'))
    templatesMap.add('client', makeNodeTemplate('Circle', '#3B82F6', '#2563EB'))
    templatesMap.add('cloud', makeNodeTemplate('RoundedRectangle', '#10B981', '#059669'))
    templatesMap.add('database', makeNodeTemplate('Cylinder1', '#EC4899', '#DB2777'))

    myDiagram.nodeTemplateMap = templatesMap

    // Link Template with bandwidth labels
    myDiagram.linkTemplate = $(
      go.Link,
      {
        routing: go.Link.AvoidsNodes,
        curve: go.Link.JumpOver,
        corner: 5,
        relinkableFrom: true,
        relinkableTo: true,
      },
      new go.Binding('routing', 'routing'),
      $(
        go.Shape,
        {
          strokeWidth: 3,
          stroke: '#9CA3AF',
        },
        new go.Binding('stroke', 'color')
      ),
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
            font: '9px "Inter", sans-serif',
            stroke: '#374151',
            margin: 3,
            editable: true,
          },
          new go.Binding('text', 'bandwidth').makeTwoWay()
        )
      )
    )

    // Sample network topology
    const nodeDataArray = [
      {
        key: 1,
        category: 'cloud',
        name: 'Internet',
        icon: '☁',
        ip: 'WAN',
        status: 'Connected',
      },
      {
        key: 2,
        category: 'firewall',
        name: 'Firewall',
        icon: '🛡',
        ip: '203.0.113.1',
        status: 'Active',
      },
      {
        key: 3,
        category: 'router',
        name: 'Core Router',
        icon: '⚡',
        ip: '192.168.1.1',
        status: 'Active',
      },
      {
        key: 4,
        category: 'switch',
        name: 'Switch-01',
        icon: '⬡',
        ip: '192.168.1.10',
        status: 'Active',
      },
      {
        key: 5,
        category: 'switch',
        name: 'Switch-02',
        icon: '⬡',
        ip: '192.168.1.11',
        status: 'Active',
      },
      {
        key: 6,
        category: 'server',
        name: 'Web Server',
        icon: '🖥',
        ip: '192.168.1.100',
        status: 'Running',
      },
      {
        key: 7,
        category: 'server',
        name: 'App Server',
        icon: '🖥',
        ip: '192.168.1.101',
        status: 'Running',
      },
      {
        key: 8,
        category: 'database',
        name: 'Database',
        icon: '💾',
        ip: '192.168.1.200',
        status: 'Active',
      },
      {
        key: 9,
        category: 'client',
        name: 'Workstation-1',
        icon: '💻',
        ip: '192.168.1.50',
        status: 'Online',
      },
      {
        key: 10,
        category: 'client',
        name: 'Workstation-2',
        icon: '💻',
        ip: '192.168.1.51',
        status: 'Online',
      },
      {
        key: 11,
        category: 'client',
        name: 'Workstation-3',
        icon: '💻',
        ip: '192.168.1.52',
        status: 'Online',
      },
    ]

    const linkDataArray = [
      { from: 1, to: 2, bandwidth: '1 Gbps', color: '#10B981' },
      { from: 2, to: 3, bandwidth: '1 Gbps', color: '#10B981' },
      { from: 3, to: 4, bandwidth: '1 Gbps', color: '#3B82F6' },
      { from: 3, to: 5, bandwidth: '1 Gbps', color: '#3B82F6' },
      { from: 4, to: 6, bandwidth: '100 Mbps', color: '#6B7280' },
      { from: 4, to: 7, bandwidth: '100 Mbps', color: '#6B7280' },
      { from: 5, to: 8, bandwidth: '100 Mbps', color: '#6B7280' },
      { from: 4, to: 9, bandwidth: '100 Mbps', color: '#9CA3AF' },
      { from: 4, to: 10, bandwidth: '100 Mbps', color: '#9CA3AF' },
      { from: 5, to: 11, bandwidth: '100 Mbps', color: '#9CA3AF' },
      { from: 6, to: 8, bandwidth: '100 Mbps', color: '#EC4899' },
      { from: 7, to: 8, bandwidth: '100 Mbps', color: '#EC4899' },
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

    const icons = {
      server: '🖥',
      router: '⚡',
      firewall: '🛡',
      switch: '⬡',
      client: '💻',
      cloud: '☁',
      database: '💾',
    }

    const newNode = {
      key: diagram.model.nodeDataArray.length + 1,
      category: type,
      name: `New ${type.charAt(0).toUpperCase() + type.slice(1)}`,
      icon: icons[type],
      ip: '192.168.1.x',
      status: 'Active',
    }
    diagram.model.addNodeData(newNode)
  }

  const exportJSON = () => {
    if (!diagram) return
    const data = diagram.model.toJson()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `network-${Date.now()}.json`
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
        a.download = `network-${Date.now()}.png`
        a.click()
        URL.revokeObjectURL(url)
      },
    })
  }

  const clearDiagram = () => {
    if (!diagram) return
    if (window.confirm('Are you sure you want to clear the network?')) {
      diagram.clear()
    }
  }

  const autoLayout = () => {
    if (!diagram) return
    diagram.layoutDiagram(true)
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Network className="w-5 h-5 text-indigo-600" />
            Network Topology Diagram
          </h2>
          <p className="text-sm text-gray-500">
            Infrastructure and network architecture
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1 border-r border-gray-300 pr-3 mr-1">
            <button
              onClick={() => addNode('server')}
              className="flex items-center gap-1 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm"
              title="Add Server"
            >
              <Server className="w-4 h-4" />
            </button>
            <button
              onClick={() => addNode('router')}
              className="flex items-center gap-1 px-3 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors text-sm"
              title="Add Router"
            >
              <Network className="w-4 h-4" />
            </button>
            <button
              onClick={() => addNode('firewall')}
              className="flex items-center gap-1 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
              title="Add Firewall"
            >
              <Shield className="w-4 h-4" />
            </button>
            <button
              onClick={() => addNode('client')}
              className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
              title="Add Client"
            >
              <Laptop className="w-4 h-4" />
            </button>
            <button
              onClick={() => addNode('cloud')}
              className="flex items-center gap-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
              title="Add Cloud"
            >
              <Cloud className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={autoLayout}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Auto Layout
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
        <div className="flex items-center gap-4">
          <span>
            Devices: {diagram ? diagram.model.nodeDataArray.length : 0}
          </span>
          <span>
            Connections: {diagram ? diagram.links.count : 0}
          </span>
        </div>
        <div>Drag to connect devices | Double-click to edit properties</div>
      </div>
    </div>
  )
}

export default NetworkCanvas

