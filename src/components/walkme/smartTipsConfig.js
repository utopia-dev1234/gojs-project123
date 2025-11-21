// Smart Tips configuration for contextual help

export const smartTipsConfig = {
  orgchart: [
    {
      id: 'tip-gojs-canvas',
      title: 'GoJS Canvas',
      description: 'This is a GoJS diagram canvas. GoJS handles all interactions: clicking, dragging, zooming, panning. Built-in features work automatically.',
      targetSelector: '[data-gojs-canvas="orgchart"]',
      shortcut: 'GoJS powered'
    },
    {
      id: 'tip-gojs-undo',
      title: 'GoJS Undo/Redo',
      description: 'GoJS UndoManager tracks all changes. Press Ctrl+Z to undo, Ctrl+Y to redo. Works for all actions: add, delete, move, edit.',
      targetSelector: null,
      shortcut: 'Ctrl+Z / Ctrl+Y'
    },
    {
      id: 'tip-gojs-zoom',
      title: 'GoJS Zoom',
      description: 'GoJS provides built-in zoom. Use mouse wheel, zoom buttons, or zoomToFit(). Zoom state is preserved in undo history.',
      targetSelector: null,
      shortcut: 'Mouse wheel'
    },
    {
      id: 'tip-gojs-context',
      title: 'GoJS Context Menu',
      description: 'Right-click nodes for GoJS context menu. Menu items execute commands that are automatically undoable.',
      targetSelector: null,
      shortcut: 'Right-click'
    },
    {
      id: 'tip-gojs-layout',
      title: 'GoJS TreeLayout',
      description: 'This org chart uses GoJS TreeLayout. It automatically arranges nodes hierarchically with proper spacing and alignment.',
      targetSelector: null,
      shortcut: 'Auto layout'
    },
    {
      id: 'tip-gojs-binding',
      title: 'GoJS Data Binding',
      description: 'Node properties use GoJS data binding. Changes update the model automatically. Two-way binding keeps UI and data in sync.',
      targetSelector: '[data-properties-panel]',
      shortcut: 'Auto sync'
    }
  ],

  bpmn: [
    {
      id: 'tip-gojs-templates',
      title: 'GoJS Node Templates',
      description: 'Each BPMN element uses a custom GoJS template. Templates define appearance, behavior, and data binding. Multiple templates in one diagram.',
      targetSelector: '[data-gojs-canvas="bpmn"]',
      shortcut: 'Template system'
    },
    {
      id: 'tip-gojs-linking',
      title: 'GoJS Linking Tool',
      description: 'GoJS LinkingTool handles connections. Drag from node to node - GoJS routes links automatically, avoids nodes, and validates connections.',
      targetSelector: null,
      shortcut: 'Drag to connect'
    },
    {
      id: 'tip-gojs-layered',
      title: 'GoJS LayeredDigraphLayout',
      description: 'BPMN uses LayeredDigraphLayout for automatic arrangement. Nodes are placed in layers with proper spacing and alignment.',
      targetSelector: null,
      shortcut: 'Auto layout'
    },
    {
      id: 'tip-gojs-link-labels',
      title: 'GoJS Link Labels',
      description: 'Link labels are GoJS TextBlocks bound to link data. Double-click to edit. Labels move with links automatically.',
      targetSelector: null,
      shortcut: 'Double-click label'
    }
  ],

  erd: [
    {
      id: 'tip-gojs-nested',
      title: 'GoJS Nested Panels',
      description: 'ERD entities use GoJS nested panels. Outer panel = entity box, inner panels = attributes. GoJS handles all panel sizing and layout.',
      targetSelector: '[data-gojs-canvas="erd"]',
      shortcut: 'Panel nesting'
    },
    {
      id: 'tip-gojs-shapes',
      title: 'GoJS Custom Shapes',
      description: 'Attribute markers use GoJS Shape objects with custom figures (Diamond, Rectangle, Circle). Bound to data properties.',
      targetSelector: null,
      shortcut: 'Data-driven shapes'
    },
    {
      id: 'tip-gojs-binding',
      title: 'GoJS Two-Way Binding',
      description: 'Attribute names use makeTwoWay() binding. Edit in diagram or properties panel - changes sync automatically.',
      targetSelector: null,
      shortcut: 'Two-way sync'
    },
    {
      id: 'tip-gojs-model',
      title: 'GoJS Model Export',
      description: 'Export uses model.toJson() to save all entities, attributes, and relationships. Import restores complete GoJS model state.',
      targetSelector: '[data-export-button]',
      shortcut: 'model.toJson()'
    }
  ],

  network: [
    {
      id: 'tip-gojs-force',
      title: 'GoJS ForceDirectedLayout',
      description: 'Network diagram uses ForceDirectedLayout. GoJS simulates physics: devices repel, connections attract. Automatic spacing and arrangement.',
      targetSelector: '[data-gojs-canvas="network"]',
      shortcut: 'Physics layout'
    },
    {
      id: 'tip-gojs-forces',
      title: 'GoJS Force Parameters',
      description: 'ForceDirectedLayout uses configurable forces: springLength, electricalCharge, maxIterations. Adjust for different network densities.',
      targetSelector: null,
      shortcut: 'Configurable'
    },
    {
      id: 'tip-gojs-templates',
      title: 'GoJS Device Templates',
      description: 'Each device type has a GoJS template with specific Shape figure and color. Templates are reusable and consistent.',
      targetSelector: null,
      shortcut: 'Template-based'
    },
    {
      id: 'tip-gojs-links',
      title: 'GoJS Network Links',
      description: 'Connections are GoJS Links with labels. Links can be styled, labeled, and automatically route around nodes.',
      targetSelector: null,
      shortcut: 'Smart routing'
    }
  ],

  gantt: [
    {
      id: 'tip-gojs-date',
      title: 'GoJS Date Conversion',
      description: 'Gantt chart converts dates to coordinates. GoJS binding functions calculate pixel positions from dates (20px per day).',
      targetSelector: '[data-gojs-canvas="gantt"]',
      shortcut: 'Date → Pixel'
    },
    {
      id: 'tip-gojs-resizable',
      title: 'GoJS Resizable Nodes',
      description: 'Task bars are GoJS nodes with resizable=true. GoJS handles resize handles, constraints, and model updates automatically.',
      targetSelector: null,
      shortcut: 'Drag edges'
    },
    {
      id: 'tip-gojs-tree',
      title: 'GoJS TreeLayout',
      description: 'Gantt uses TreeLayout for hierarchical task organization. Layout arranges tasks vertically, dependencies horizontally.',
      targetSelector: null,
      shortcut: 'Hierarchical'
    },
    {
      id: 'tip-gojs-binding',
      title: 'GoJS Progress Binding',
      description: 'Progress bars use GoJS data binding. Progress value in model automatically updates visual bar display through binding.',
      targetSelector: '[data-properties-panel]',
      shortcut: 'Data-driven'
    },
    {
      id: 'tip-gojs-dependencies',
      title: 'GoJS Dependency Links',
      description: 'Dependencies are GoJS Links showing predecessor relationships. TreeLayout uses links to determine task hierarchy.',
      targetSelector: null,
      shortcut: 'Link-based'
    }
  ],

  mindmap: [
    {
      id: 'tip-center',
      title: 'Central Idea',
      description: 'The center node is your main topic. All branches radiate from this central concept.',
      targetSelector: '.react-flow__node',
      shortcut: null
    },
    {
      id: 'tip-branches',
      title: 'Add Branches',
      description: 'Click the "+" button on a node or drag from a node to create new branches. Build multiple levels.',
      targetSelector: null,
      shortcut: 'Click + or Drag'
    },
    {
      id: 'tip-levels',
      title: 'Levels',
      description: 'Level 0 = Center, Level 1 = Main branches, Level 2+ = Sub-branches. Color-coded by level.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-organize',
      title: 'Organize',
      description: 'Drag nodes to reorganize. Create connections between related ideas to show relationships.',
      targetSelector: null,
      shortcut: 'Drag'
    }
  ],

  workflow: [
    {
      id: 'tip-start',
      title: 'Start Node',
      description: 'Green node marks the beginning. Every workflow must start here. Connect to first process step.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-process',
      title: 'Process Step',
      description: 'Blue nodes are process steps. These represent actions or tasks in your workflow.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-decision',
      title: 'Decision Point',
      description: 'Diamond nodes are decision points. Label paths (Yes/No, True/False, Approved/Rejected).',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-end',
      title: 'End Node',
      description: 'Red node marks completion. Ensure all paths in your workflow lead to an end node.',
      targetSelector: null,
      shortcut: null
    }
  ],

  strategy: [
    {
      id: 'tip-vision',
      title: 'Vision',
      description: 'Purple nodes represent your strategic vision - the overall direction and purpose.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-goals',
      title: 'Goals',
      description: 'Blue nodes are strategic goals. These support your vision and are measurable outcomes.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-objectives',
      title: 'Objectives',
      description: 'Green nodes are tactical objectives. These are specific steps to achieve your goals.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-initiatives',
      title: 'Initiatives',
      description: 'Orange nodes are action items or initiatives. These are concrete tasks to execute objectives.',
      targetSelector: null,
      shortcut: null
    }
  ],

  process: [
    {
      id: 'tip-input',
      title: 'Input Node',
      description: 'Green nodes represent inputs - where data, materials, or resources enter the process.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-process-node',
      title: 'Process Node',
      description: 'Blue nodes are transformation steps. These represent work that transforms inputs.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-storage',
      title: 'Storage Node',
      description: 'Purple nodes are storage points - where data is stored or inventory is held.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-output',
      title: 'Output Node',
      description: 'Red nodes are outputs - the final deliverables, products, or results of the process.',
      targetSelector: null,
      shortcut: null
    }
  ]
}

