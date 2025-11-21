import { useEffect, useRef, useState } from 'react'
import * as go from 'gojs'
import {
  Users,
  Plus,
  Download,
  Upload,
  Trash2,
  Save,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Settings,
} from 'lucide-react'
import useStore from '../../store/useStore'

const OrgChartCanvas = () => {
  const diagramRef = useRef(null)
  const divRef = useRef(null)
  const [diagram, setDiagram] = useState(null)
  const { theme, updateDiagram } = useStore()

  useEffect(() => {
    if (!divRef.current) return

    const $ = go.GraphObject.make

    // Create the diagram
    const myDiagram = $(go.Diagram, divRef.current, {
      'undoManager.isEnabled': true,
      layout: $(go.TreeLayout, {
        treeStyle: go.TreeLayout.StyleLastParents,
        arrangement: go.TreeLayout.ArrangementHorizontal,
        angle: 90,
        layerSpacing: 35,
        alternateAngle: 90,
        alternateLayerSpacing: 35,
        alternateAlignment: go.TreeLayout.AlignmentBus,
        alternateNodeSpacing: 20,
      }),
      'animationManager.isEnabled': true,
    })

    // Define the Node template
    myDiagram.nodeTemplate = $(
      go.Node,
      'Auto',
      {
        selectionAdornmentTemplate: $(
          go.Adornment,
          'Auto',
          $(go.Shape, 'RoundedRectangle', {
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
        go.Shape,
        'RoundedRectangle',
        {
          name: 'SHAPE',
          fill: '#FFFFFF',
          stroke: '#E5E7EB',
          strokeWidth: 2,
          portId: '',
          cursor: 'pointer',
          fromLinkable: true,
          toLinkable: true,
          fromLinkableSelfNode: true,
          toLinkableSelfNode: true,
          fromLinkableDuplicates: true,
          toLinkableDuplicates: true,
        },
        new go.Binding('fill', 'color')
      ),
      $(
        go.Panel,
        'Vertical',
        {
          margin: 12,
        },
        $(
          go.Panel,
          'Horizontal',
          { margin: new go.Margin(0, 0, 8, 0) },
          $(go.Picture, {
            name: 'Picture',
            desiredSize: new go.Size(50, 50),
            margin: new go.Margin(0, 10, 0, 0),
            source: 'https://ui-avatars.com/api/?name=User&size=50&background=4F46E5&color=fff',
          }),
          $(
            go.Panel,
            'Vertical',
            { alignment: go.Spot.Left },
            $(
              go.TextBlock,
              {
                font: 'bold 14px Inter, sans-serif',
                stroke: '#111827',
                margin: new go.Margin(0, 0, 2, 0),
                maxSize: new go.Size(150, NaN),
                wrap: go.TextBlock.WrapFit,
                editable: true,
              },
              new go.Binding('text', 'name').makeTwoWay()
            ),
            $(
              go.TextBlock,
              {
                font: '12px Inter, sans-serif',
                stroke: '#6B7280',
                maxSize: new go.Size(150, NaN),
                wrap: go.TextBlock.WrapFit,
              },
              new go.Binding('text', 'title')
            )
          )
        ),
        $(
          go.TextBlock,
          {
            font: '11px Inter, sans-serif',
            stroke: '#9CA3AF',
            maxSize: new go.Size(220, NaN),
            wrap: go.TextBlock.WrapFit,
          },
          new go.Binding('text', 'department')
        )
      )
    )

    // Define the Link template
    myDiagram.linkTemplate = $(
      go.Link,
      go.Link.Orthogonal,
      {
        corner: 5,
        relinkableFrom: true,
        relinkableTo: true,
      },
      $(go.Shape, { strokeWidth: 2, stroke: '#9CA3AF' }),
      $(go.Shape, { toArrow: 'Standard', stroke: '#9CA3AF', fill: '#9CA3AF' })
    )

    // Sample organizational data
    const nodeDataArray = [
      {
        key: 1,
        name: 'Sarah Chen',
        title: 'CEO',
        department: 'Executive Office',
        color: '#EEF2FF',
      },
      {
        key: 2,
        parent: 1,
        name: 'David Martinez',
        title: 'CTO',
        department: 'Technology',
        color: '#DBEAFE',
      },
      {
        key: 3,
        parent: 1,
        name: 'Emily Johnson',
        title: 'CFO',
        department: 'Finance',
        color: '#FEF3C7',
      },
      {
        key: 4,
        parent: 1,
        name: 'Michael Brown',
        title: 'CMO',
        department: 'Marketing',
        color: '#D1FAE5',
      },
      {
        key: 5,
        parent: 2,
        name: 'Jessica Lee',
        title: 'VP Engineering',
        department: 'Technology',
        color: '#DBEAFE',
      },
      {
        key: 6,
        parent: 2,
        name: 'Alex Kumar',
        title: 'VP Product',
        department: 'Technology',
        color: '#DBEAFE',
      },
      {
        key: 7,
        parent: 5,
        name: 'Chris Anderson',
        title: 'Lead Developer',
        department: 'Engineering',
        color: '#E0E7FF',
      },
      {
        key: 8,
        parent: 5,
        name: 'Maria Garcia',
        title: 'QA Manager',
        department: 'Engineering',
        color: '#E0E7FF',
      },
      {
        key: 9,
        parent: 6,
        name: 'Ryan Thompson',
        title: 'Product Manager',
        department: 'Product',
        color: '#E0E7FF',
      },
      {
        key: 10,
        parent: 3,
        name: 'Lisa Wang',
        title: 'Controller',
        department: 'Finance',
        color: '#FEF9C3',
      },
      {
        key: 11,
        parent: 4,
        name: 'Tom Wilson',
        title: 'Marketing Director',
        department: 'Marketing',
        color: '#D1FAE5',
      },
      {
        key: 12,
        parent: 11,
        name: 'Anna Davis',
        title: 'Content Manager',
        department: 'Marketing',
        color: '#D1FAE5',
      },
    ]

    const linkDataArray = nodeDataArray
      .filter((node) => node.parent)
      .map((node) => ({
        from: node.parent,
        to: node.key,
      }))

    myDiagram.model = new go.TreeModel(nodeDataArray, linkDataArray)

    // Context Menu
    const contextMenu = $(
      'ContextMenu',
      $('ContextMenuButton', $(go.TextBlock, 'Add Report'), {
        click: (e, obj) => {
          const node = obj.part.adornedPart
          if (node) {
            const data = node.data
            const newNodeData = {
              key: myDiagram.model.nodeDataArray.length + 1,
              parent: data.key,
              name: 'New Employee',
              title: 'Position',
              department: data.department,
              color: data.color,
            }
            myDiagram.model.addNodeData(newNodeData)
          }
        },
      }),
      $('ContextMenuButton', $(go.TextBlock, 'Delete'), {
        click: (e, obj) => {
          const node = obj.part.adornedPart
          if (node) {
            myDiagram.commandHandler.deleteSelection()
          }
        },
      }),
      $('ContextMenuButton', $(go.TextBlock, 'Change Color'), {
        click: (e, obj) => {
          const node = obj.part.adornedPart
          if (node) {
            const colors = [
              '#EEF2FF',
              '#DBEAFE',
              '#FEF3C7',
              '#D1FAE5',
              '#FCE7F3',
              '#F3E8FF',
            ]
            const currentColor = node.data.color
            const currentIndex = colors.indexOf(currentColor)
            const nextColor = colors[(currentIndex + 1) % colors.length]
            myDiagram.model.setDataProperty(node.data, 'color', nextColor)
          }
        },
      })
    )

    myDiagram.nodeTemplate.contextMenu = contextMenu

    diagramRef.current = myDiagram
    setDiagram(myDiagram)

    return () => {
      myDiagram.div = null
    }
  }, [])

  const addNode = () => {
    if (!diagram) return
    const newNodeData = {
      key: diagram.model.nodeDataArray.length + 1,
      parent: 1,
      name: 'New Employee',
      title: 'Position',
      department: 'Department',
      color: '#DBEAFE',
    }
    diagram.model.addNodeData(newNodeData)
  }

  const exportJSON = () => {
    if (!diagram) return
    const data = diagram.model.toJson()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `orgchart-${Date.now()}.json`
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
    const blob = await diagram.makeImageData({
      background: 'white',
      returnType: 'blob',
      callback: (blob) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `orgchart-${Date.now()}.png`
        a.click()
        URL.revokeObjectURL(url)
      },
    })
  }

  const clearDiagram = () => {
    if (!diagram) return
    if (window.confirm('Are you sure you want to clear the entire chart?')) {
      diagram.clear()
    }
  }

  const zoomIn = () => diagram && diagram.commandHandler.increaseZoom()
  const zoomOut = () => diagram && diagram.commandHandler.decreaseZoom()
  const zoomToFit = () => diagram && diagram.commandHandler.zoomToFit()

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Organization Chart
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hierarchical org structure with rich editing
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addNode}
            data-walkme-target="add-node-button"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add Employee
          </button>
          <button
            onClick={zoomIn}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={zoomOut}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={zoomToFit}
            className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
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
            Export PNG
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
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 relative">
        <div ref={divRef} className="w-full h-full gojs-canvas" data-gojs-canvas="orgchart" />
      </div>

      {/* Status Bar */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-2 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <div>
          Nodes:{' '}
          {diagram ? diagram.model.nodeDataArray.length : 0} | Links:{' '}
          {diagram ? diagram.links.count : 0}
        </div>
        <div>Right-click on nodes for more options | Double-click to edit</div>
      </div>
    </div>
  )
}

export default OrgChartCanvas

