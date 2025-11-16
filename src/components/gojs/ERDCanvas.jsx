import { useEffect, useRef, useState } from 'react'
import * as go from 'gojs'
import {
  Database,
  Plus,
  Download,
  Upload,
  Trash2,
  Save,
  Table,
  Key,
} from 'lucide-react'

const ERDCanvas = () => {
  const diagramRef = useRef(null)
  const divRef = useRef(null)
  const [diagram, setDiagram] = useState(null)

  useEffect(() => {
    if (!divRef.current) return

    const $ = go.GraphObject.make

    const myDiagram = $(go.Diagram, divRef.current, {
      'undoManager.isEnabled': true,
      layout: $(go.LayeredDigraphLayout, {
        direction: 0,
        layerSpacing: 100,
        columnSpacing: 50,
      }),
      'animationManager.isEnabled': true,
    })

    // Helper function to create attribute items
    function makeAttributeTemplate() {
      return $(
        go.Panel,
        'Horizontal',
        $(
          go.Shape,
          {
            desiredSize: new go.Size(10, 10),
            margin: new go.Margin(0, 5, 0, 0),
          },
          new go.Binding('figure', 'figure'),
          new go.Binding('fill', 'color')
        ),
        $(
          go.TextBlock,
          {
            font: '11px "Inter", sans-serif',
            stroke: '#374151',
            editable: true,
          },
          new go.Binding('text', 'name').makeTwoWay(),
          new go.Binding('font', 'iskey', (k) =>
            k ? 'bold 11px "Inter", sans-serif' : '11px "Inter", sans-serif'
          )
        ),
        $(
          go.TextBlock,
          {
            font: '10px "Inter", sans-serif',
            stroke: '#6B7280',
            margin: new go.Margin(0, 0, 0, 5),
          },
          new go.Binding('text', 'type', (t) => `: ${t}`)
        )
      )
    }

    // Entity Node Template
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
        locationSpot: go.Spot.Center,
      },
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, 'RoundedRectangle', {
        fill: 'white',
        stroke: '#D1D5DB',
        strokeWidth: 2,
        portId: '',
        fromLinkable: true,
        toLinkable: true,
        cursor: 'pointer',
      }),
      $(
        go.Panel,
        'Table',
        {
          margin: 8,
          stretch: go.GraphObject.Fill,
          defaultAlignment: go.Spot.Left,
        },
        $(go.RowColumnDefinition, { row: 0, background: '#EEF2FF' }),
        $(
          go.TextBlock,
          {
            row: 0,
            column: 0,
            margin: 8,
            alignment: go.Spot.Left,
            font: 'bold 14px "Inter", sans-serif',
            stroke: '#4F46E5',
            editable: true,
          },
          new go.Binding('text', 'name').makeTwoWay()
        ),
        $(go.Shape, 'Rectangle', {
          row: 1,
          column: 0,
          stretch: go.GraphObject.Horizontal,
          stroke: null,
          fill: '#D1D5DB',
          height: 1,
        }),
        $(
          go.Panel,
          'Vertical',
          {
            row: 2,
            column: 0,
            margin: new go.Margin(4, 8, 8, 8),
            alignment: go.Spot.Left,
            itemTemplate: makeAttributeTemplate(),
          },
          new go.Binding('itemArray', 'attributes')
        )
      )
    )

    // Relationship Link Template
    myDiagram.linkTemplate = $(
      go.Link,
      {
        routing: go.Link.AvoidsNodes,
        curve: go.Link.JumpOver,
        corner: 5,
        relinkableFrom: true,
        relinkableTo: true,
      },
      $(go.Shape, { strokeWidth: 2, stroke: '#6B7280' }),
      $(go.Shape, {
        toArrow: 'Standard',
        stroke: '#6B7280',
        fill: '#6B7280',
      }),
      $(go.Shape, {
        fromArrow: 'BackwardOpenTriangle',
        stroke: '#6B7280',
        fill: '#6B7280',
        scale: 1.5,
      }),
      $(
        go.Panel,
        'Auto',
        $(go.Shape, 'RoundedRectangle', {
          fill: '#FEF3C7',
          stroke: '#F59E0B',
          strokeWidth: 1,
        }),
        $(
          go.TextBlock,
          {
            font: '10px "Inter", sans-serif',
            stroke: '#92400E',
            margin: 4,
            editable: true,
          },
          new go.Binding('text', 'relationship').makeTwoWay()
        )
      ),
      $(
        go.TextBlock,
        {
          segmentIndex: 0,
          segmentOffset: new go.Point(NaN, NaN),
          segmentOrientation: go.Link.OrientUpright,
          font: 'bold 10px "Inter", sans-serif',
          stroke: '#4F46E5',
          background: 'white',
          margin: 2,
        },
        new go.Binding('text', 'fromCardinality')
      ),
      $(
        go.TextBlock,
        {
          segmentIndex: -1,
          segmentOffset: new go.Point(NaN, NaN),
          segmentOrientation: go.Link.OrientUpright,
          font: 'bold 10px "Inter", sans-serif',
          stroke: '#4F46E5',
          background: 'white',
          margin: 2,
        },
        new go.Binding('text', 'toCardinality')
      )
    )

    // Sample ERD model
    const nodeDataArray = [
      {
        key: 1,
        name: 'Users',
        loc: '100 100',
        attributes: [
          { name: 'id', type: 'INT', iskey: true, figure: 'Diamond', color: '#FBBF24' },
          { name: 'username', type: 'VARCHAR', figure: 'Circle', color: '#60A5FA' },
          { name: 'email', type: 'VARCHAR', figure: 'Circle', color: '#60A5FA' },
          { name: 'password', type: 'VARCHAR', figure: 'Circle', color: '#60A5FA' },
          { name: 'created_at', type: 'TIMESTAMP', figure: 'Circle', color: '#60A5FA' },
        ],
      },
      {
        key: 2,
        name: 'Orders',
        loc: '400 100',
        attributes: [
          { name: 'id', type: 'INT', iskey: true, figure: 'Diamond', color: '#FBBF24' },
          { name: 'user_id', type: 'INT', figure: 'Square', color: '#F87171' },
          { name: 'total_amount', type: 'DECIMAL', figure: 'Circle', color: '#60A5FA' },
          { name: 'status', type: 'VARCHAR', figure: 'Circle', color: '#60A5FA' },
          { name: 'created_at', type: 'TIMESTAMP', figure: 'Circle', color: '#60A5FA' },
        ],
      },
      {
        key: 3,
        name: 'Products',
        loc: '700 100',
        attributes: [
          { name: 'id', type: 'INT', iskey: true, figure: 'Diamond', color: '#FBBF24' },
          { name: 'name', type: 'VARCHAR', figure: 'Circle', color: '#60A5FA' },
          { name: 'description', type: 'TEXT', figure: 'Circle', color: '#60A5FA' },
          { name: 'price', type: 'DECIMAL', figure: 'Circle', color: '#60A5FA' },
          { name: 'stock', type: 'INT', figure: 'Circle', color: '#60A5FA' },
        ],
      },
      {
        key: 4,
        name: 'Order_Items',
        loc: '550 300',
        attributes: [
          { name: 'id', type: 'INT', iskey: true, figure: 'Diamond', color: '#FBBF24' },
          { name: 'order_id', type: 'INT', figure: 'Square', color: '#F87171' },
          { name: 'product_id', type: 'INT', figure: 'Square', color: '#F87171' },
          { name: 'quantity', type: 'INT', figure: 'Circle', color: '#60A5FA' },
          { name: 'price', type: 'DECIMAL', figure: 'Circle', color: '#60A5FA' },
        ],
      },
      {
        key: 5,
        name: 'Categories',
        loc: '950 100',
        attributes: [
          { name: 'id', type: 'INT', iskey: true, figure: 'Diamond', color: '#FBBF24' },
          { name: 'name', type: 'VARCHAR', figure: 'Circle', color: '#60A5FA' },
          { name: 'description', type: 'TEXT', figure: 'Circle', color: '#60A5FA' },
        ],
      },
      {
        key: 6,
        name: 'Product_Categories',
        loc: '825 250',
        attributes: [
          { name: 'product_id', type: 'INT', iskey: true, figure: 'Diamond', color: '#FBBF24' },
          { name: 'category_id', type: 'INT', iskey: true, figure: 'Diamond', color: '#FBBF24' },
        ],
      },
    ]

    const linkDataArray = [
      {
        from: 1,
        to: 2,
        relationship: 'places',
        fromCardinality: '1',
        toCardinality: 'N',
      },
      {
        from: 2,
        to: 4,
        relationship: 'contains',
        fromCardinality: '1',
        toCardinality: 'N',
      },
      {
        from: 3,
        to: 4,
        relationship: 'included_in',
        fromCardinality: '1',
        toCardinality: 'N',
      },
      {
        from: 3,
        to: 6,
        relationship: 'has',
        fromCardinality: '1',
        toCardinality: 'N',
      },
      {
        from: 5,
        to: 6,
        relationship: 'categorizes',
        fromCardinality: '1',
        toCardinality: 'N',
      },
    ]

    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)

    diagramRef.current = myDiagram
    setDiagram(myDiagram)

    return () => {
      myDiagram.div = null
    }
  }, [])

  const addEntity = () => {
    if (!diagram) return
    const newEntity = {
      key: diagram.model.nodeDataArray.length + 1,
      name: 'NewTable',
      attributes: [
        { name: 'id', type: 'INT', iskey: true, figure: 'Diamond', color: '#FBBF24' },
        { name: 'field1', type: 'VARCHAR', figure: 'Circle', color: '#60A5FA' },
      ],
    }
    diagram.model.addNodeData(newEntity)
  }

  const exportJSON = () => {
    if (!diagram) return
    const data = diagram.model.toJson()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `erd-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportSQL = () => {
    if (!diagram) return
    let sql = '-- Generated SQL Schema\n\n'

    diagram.model.nodeDataArray.forEach((node) => {
      sql += `CREATE TABLE ${node.name} (\n`
      const fields = node.attributes.map((attr) => {
        let field = `  ${attr.name} ${attr.type}`
        if (attr.iskey) field += ' PRIMARY KEY'
        return field
      })
      sql += fields.join(',\n')
      sql += '\n);\n\n'
    })

    const blob = new Blob([sql], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `schema-${Date.now()}.sql`
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
        a.download = `erd-${Date.now()}.png`
        a.click()
        URL.revokeObjectURL(url)
      },
    })
  }

  const clearDiagram = () => {
    if (!diagram) return
    if (window.confirm('Are you sure you want to clear the diagram?')) {
      diagram.clear()
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Database className="w-5 h-5 text-indigo-600" />
            Entity Relationship Diagram
          </h2>
          <p className="text-sm text-gray-500">
            Database schema designer with SQL export
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addEntity}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Table className="w-4 h-4" />
            Add Table
          </button>
          <button
            onClick={exportSQL}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors shadow-sm"
          >
            <Key className="w-4 h-4" />
            Export SQL
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

      {/* Legend & Status Bar */}
      <div className="bg-white border-t border-gray-200 px-6 py-2 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-6">
          <span>
            Tables: {diagram ? diagram.model.nodeDataArray.length : 0}
          </span>
          <span>
            Relationships: {diagram ? diagram.links.count : 0}
          </span>
          <div className="flex items-center gap-3 ml-4 text-xs">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Primary Key
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-red-400 rounded-sm"></span>
              Foreign Key
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Attribute
            </span>
          </div>
        </div>
        <div>Double-click to edit | Drag to create relationships</div>
      </div>
    </div>
  )
}

export default ERDCanvas

