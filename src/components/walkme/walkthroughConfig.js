// Walkthrough configurations for each diagram type

export const walkthroughSteps = {
  // General GoJS Project Overview
  gojs_overview: [
    {
      title: 'Welcome to the GoJS Diagramming Suite',
      description: 'This project showcases GoJS, a powerful JavaScript library for building interactive diagrams. All 5 diagram types (Org Chart, BPMN, ERD, Network, Gantt) are built with GoJS.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Built with GoJS library',
        '5 GoJS-powered diagram types',
        'Interactive and customizable',
        'Professional diagramming features'
      ]
    },
    {
      title: 'What is GoJS?',
      description: 'GoJS is a JavaScript library for creating interactive diagrams. It provides nodes, links, layouts, and tools for building complex diagramming applications.',
      targetSelector: null,
      position: 'center',
      tips: [
        'GoJS = Interactive diagrams',
        'Nodes, Links, Layouts',
        'Built-in tools and commands',
        'Extensible and customizable'
      ]
    },
    {
      title: 'GoJS Core Features',
      description: 'All GoJS diagrams include: Undo/Redo (Ctrl+Z/Y), Zoom & Pan, Context Menus, Data Binding, Layouts, and Export/Import. These work automatically!',
      targetSelector: null,
      position: 'center',
      tips: [
        'Undo/Redo: Ctrl+Z / Ctrl+Y',
        'Zoom: Mouse wheel or toolbar',
        'Pan: Drag empty canvas',
        'Context menus: Right-click nodes'
      ]
    },
    {
      title: 'GoJS Diagram Types',
      description: 'This project includes 5 GoJS diagrams: Organization Chart (TreeLayout), BPMN (LayeredDigraphLayout), ERD (LayeredDigraphLayout), Network (ForceDirectedLayout), and Gantt (TreeLayout).',
      targetSelector: null,
      position: 'center',
      tips: [
        'Org Chart: TreeLayout',
        'BPMN: LayeredDigraphLayout',
        'ERD: LayeredDigraphLayout',
        'Network: ForceDirectedLayout',
        'Gantt: TreeLayout with dates'
      ]
    },
    {
      title: 'GoJS Model System',
      description: 'GoJS uses a Model-View architecture. The Model stores data (nodes, links), the Diagram displays it. Changes to model automatically update the diagram.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Model stores data',
        'Diagram displays model',
        'Two-way data binding',
        'Automatic updates'
      ]
    },
    {
      title: 'GoJS Export/Import',
      description: 'Export diagrams using model.toJson() for JSON or makeImageData() for PNG. Import JSON restores the complete GoJS model state perfectly.',
      targetSelector: null,
      position: 'center',
      tips: [
        'JSON: model.toJson()',
        'PNG: makeImageData()',
        'Perfect restoration',
        'Preserves all properties'
      ]
    },
    {
      title: 'Start Exploring',
      description: 'Select any diagram type from the sidebar to explore GoJS features. Each diagram demonstrates different GoJS capabilities and layouts.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Click sidebar to switch',
        'Each type shows GoJS features',
        'Try undo/redo',
        'Right-click for menus'
      ]
    }
  ],

  orgchart: [
    {
      title: 'Welcome to GoJS Organization Chart',
      description: 'This is a powerful GoJS-powered diagramming tool. GoJS provides interactive, customizable diagrams with built-in features like undo/redo, zoom, pan, and context menus. Let\'s explore!',
      targetSelector: null,
      position: 'center',
      tips: [
        'Built with GoJS library',
        'Supports undo/redo (Ctrl+Z/Ctrl+Y)',
        'Zoom with mouse wheel or toolbar',
        'Right-click for context menus'
      ]
    },
    {
      title: 'The GoJS Canvas',
      description: 'This is the GoJS diagram canvas. Click anywhere to add nodes, drag to pan, scroll to zoom. GoJS handles all interactions automatically.',
      targetSelector: '[data-gojs-canvas="orgchart"]',
      position: 'bottom',
      tips: [
        'Click canvas to add nodes',
        'Scroll to zoom in/out',
        'Drag empty space to pan',
        'Double-click nodes to edit text'
      ]
    },
    {
      title: 'Add Nodes',
      description: 'Click the "Add Employee" button or click directly on the canvas. GoJS automatically handles node creation and layout.',
      targetSelector: '[data-walkme-target="add-node-button"]',
      position: 'bottom',
      tips: [
        'Use toolbar button or click canvas',
        'GoJS auto-positions new nodes',
        'Nodes are automatically linked',
        'Undo with Ctrl+Z if needed'
      ]
    },
    {
      title: 'GoJS Context Menu',
      description: 'Right-click any node to see the GoJS context menu. This provides quick actions like "Add Report", "Delete", and "Change Color".',
      targetSelector: '[data-gojs-canvas="orgchart"]',
      position: 'center',
      tips: [
        'Right-click any node',
        'Context menu appears automatically',
        'GoJS handles menu positioning',
        'All actions are undoable'
      ]
    },
    {
      title: 'GoJS Zoom Controls',
      description: 'Use the zoom buttons in the toolbar or mouse wheel. GoJS provides smooth zoom animations and maintains diagram state.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Zoom In/Out buttons in toolbar',
        'Mouse wheel to zoom',
        'Zoom to Fit centers diagram',
        'GoJS preserves zoom on undo/redo'
      ]
    },
    {
      title: 'Properties Panel',
      description: 'Select a node to see its properties. Changes update the GoJS model in real-time. All changes support undo/redo.',
      targetSelector: '[data-properties-panel]',
      position: 'left',
      tips: [
        'Select node to see properties',
        'Changes update immediately',
        'GoJS model updates automatically',
        'Use Ctrl+Z to undo changes'
      ]
    },
    {
      title: 'Export with GoJS',
      description: 'Export your diagram as PNG (using GoJS makeImageData) or JSON (using GoJS model.toJson). GoJS handles all export logic.',
      targetSelector: '[data-export-button]',
      position: 'left',
      tips: [
        'PNG uses GoJS makeImageData',
        'JSON uses model.toJson',
        'Exports preserve all data',
        'Import JSON to restore'
      ]
    }
  ],

  bpmn: [
    {
      title: 'Welcome to GoJS BPMN Designer',
      description: 'This BPMN workflow designer is built with GoJS, featuring multiple node templates, custom layouts, and interactive linking. GoJS handles all the complex diagram logic.',
      targetSelector: null,
      position: 'center',
      tips: [
        'GoJS multi-template system',
        'Custom node categories',
        'Interactive linking tool',
        'LayeredDigraphLayout auto-arranges'
      ]
    },
    {
      title: 'GoJS Node Templates',
      description: 'GoJS uses different templates for each BPMN element type. Click the toolbar buttons to add nodes - GoJS creates the appropriate template automatically.',
      targetSelector: '[data-gojs-canvas="bpmn"]',
      position: 'bottom',
      tips: [
        'Each button creates specific template',
        'Templates defined in GoJS',
        'Custom shapes and colors',
        'Double-click to edit text'
      ]
    },
    {
      title: 'GoJS Linking Tool',
      description: 'Drag from one node to another to create connections. GoJS LinkingTool handles all the connection logic, routing, and validation automatically.',
      targetSelector: '[data-gojs-canvas="bpmn"]',
      position: 'center',
      tips: [
        'Drag from node port to another',
        'GoJS auto-routes connections',
        'AvoidsNodes routing enabled',
        'JumpOver for crossing links'
      ]
    },
    {
      title: 'GoJS Layout System',
      description: 'GoJS uses LayeredDigraphLayout to automatically arrange nodes. The layout runs automatically and maintains proper spacing and alignment.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Automatic layout on changes',
        'LayeredDigraphLayout algorithm',
        'Maintains hierarchy',
        'Configurable spacing'
      ]
    },
    {
      title: 'GoJS Undo/Redo',
      description: 'All actions support undo/redo. Press Ctrl+Z to undo, Ctrl+Y to redo. GoJS UndoManager tracks all changes automatically.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Ctrl+Z to undo',
        'Ctrl+Y to redo',
        'GoJS UndoManager enabled',
        'Tracks all model changes'
      ]
    },
    {
      title: 'Export GoJS Model',
      description: 'Export as PNG (GoJS makeImageData) or JSON (model.toJson). The JSON format preserves all GoJS model data for perfect restoration.',
      targetSelector: '[data-export-button]',
      position: 'left',
      tips: [
        'PNG: GoJS makeImageData',
        'JSON: model.toJson',
        'Preserves all properties',
        'Import restores exactly'
      ]
    }
  ],

  erd: [
    {
      title: 'Welcome to GoJS ERD Designer',
      description: 'This ERD designer uses GoJS for interactive database modeling. GoJS provides custom node templates with nested panels for entities and attributes.',
      targetSelector: null,
      position: 'center',
      tips: [
        'GoJS nested panel templates',
        'Custom attribute rendering',
        'Interactive relationship lines',
        'LayeredDigraphLayout for arrangement'
      ]
    },
    {
      title: 'GoJS Entity Templates',
      description: 'Each entity is a GoJS node with nested panels. The outer panel is the entity box, inner panels show attributes with custom shapes for keys.',
      targetSelector: '[data-gojs-canvas="erd"]',
      position: 'bottom',
      tips: [
        'GoJS Panel nesting',
        'Custom shapes for PK/FK',
        'Editable text blocks',
        'Auto-sizing panels'
      ]
    },
    {
      title: 'GoJS Data Binding',
      description: 'Attributes use GoJS data binding to display and edit data. Changes update the model automatically with two-way binding.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Two-way data binding',
        'makeTwoWay() bindings',
        'Real-time updates',
        'Undo/redo supported'
      ]
    },
    {
      title: 'GoJS Links for Relationships',
      description: 'Relationships are GoJS Links between entities. They show cardinality and can be edited. GoJS handles routing automatically.',
      targetSelector: null,
      position: 'center',
      tips: [
        'GoJS Link objects',
        'Custom link templates',
        'Labeled with cardinality',
        'Auto-routing enabled'
      ]
    },
    {
      title: 'GoJS Model Export',
      description: 'Export uses GoJS model.toJson() to save all entity and relationship data. Import restores the complete GoJS model state.',
      targetSelector: '[data-export-button]',
      position: 'left',
      tips: [
        'model.toJson() for JSON',
        'Preserves all attributes',
        'Includes relationships',
        'Perfect restoration'
      ]
    }
  ],

  network: [
    {
      title: 'Welcome to GoJS Network Designer',
      description: 'This network topology tool uses GoJS ForceDirectedLayout for automatic device arrangement. GoJS handles physics-based positioning and connection routing.',
      targetSelector: null,
      position: 'center',
      tips: [
        'GoJS ForceDirectedLayout',
        'Physics-based positioning',
        'Automatic node spacing',
        'Interactive device placement'
      ]
    },
    {
      title: 'GoJS Node Templates',
      description: 'Each device type uses a custom GoJS template with specific shapes and colors. Templates are defined using GraphObject.make for consistent rendering.',
      targetSelector: '[data-gojs-canvas="network"]',
      position: 'bottom',
      tips: [
        'Custom GoJS templates',
        'Shape-based device types',
        'Consistent styling',
        'Icon-based identification'
      ]
    },
    {
      title: 'GoJS Force Layout',
      description: 'GoJS ForceDirectedLayout automatically arranges devices using physics simulation. Devices repel each other, connections create attraction.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Physics simulation',
        'Auto-spacing',
        'Configurable forces',
        'Smooth animations'
      ]
    },
    {
      title: 'GoJS Connections',
      description: 'Network connections are GoJS Links. They can be labeled, styled, and automatically route around nodes. GoJS handles all connection logic.',
      targetSelector: null,
      position: 'center',
      tips: [
        'GoJS Link objects',
        'Labeled connections',
        'Auto-routing',
        'Interactive editing'
      ]
    },
    {
      title: 'GoJS Model Persistence',
      description: 'Save your network diagram using GoJS model.toJson(). This preserves all device positions, connections, and properties perfectly.',
      targetSelector: '[data-export-button]',
      position: 'left',
      tips: [
        'model.toJson() export',
        'Preserves positions',
        'Includes all properties',
        'Perfect restoration'
      ]
    }
  ],

  gantt: [
    {
      title: 'Welcome to GoJS Gantt Chart',
      description: 'This Gantt chart uses GoJS TreeLayout with custom date-to-coordinate conversion. GoJS handles task positioning, resizing, and dependency linking.',
      targetSelector: null,
      position: 'center',
      tips: [
        'GoJS TreeLayout',
        'Custom coordinate system',
        'Date-based positioning',
        'Resizable task bars'
      ]
    },
    {
      title: 'GoJS Date Conversion',
      description: 'GoJS converts dates to canvas coordinates automatically. Task bars are positioned based on start dates and sized by duration.',
      targetSelector: '[data-gojs-canvas="gantt"]',
      position: 'bottom',
      tips: [
        'Date to pixel conversion',
        '20px per day scale',
        'Automatic positioning',
        'Timeline from Jan-May 2024'
      ]
    },
    {
      title: 'GoJS Resizable Nodes',
      description: 'Task bars are GoJS nodes with resizable=true. Drag edges to change duration, drag bar to change start date. GoJS handles all resizing logic.',
      targetSelector: null,
      position: 'center',
      tips: [
        'resizable=true property',
        'Drag edges to resize',
        'Drag bar to move',
        'Updates model automatically'
      ]
    },
    {
      title: 'GoJS Dependency Links',
      description: 'Task dependencies are GoJS Links showing predecessor relationships. GoJS TreeLayout arranges tasks hierarchically based on dependencies.',
      targetSelector: null,
      position: 'center',
      tips: [
        'GoJS Link for dependencies',
        'TreeLayout hierarchy',
        'Visual dependency chains',
        'Critical path support'
      ]
    },
    {
      title: 'GoJS Progress Binding',
      description: 'Progress is bound to GoJS model data. Changes update visual progress bars automatically through GoJS data binding.',
      targetSelector: '[data-properties-panel]',
      position: 'left',
      tips: [
        'Data binding for progress',
        'Visual progress bars',
        'Real-time updates',
        'Model-driven display'
      ]
    },
    {
      title: 'Export GoJS Gantt',
      description: 'Export preserves all task data, dates, durations, and dependencies using GoJS model.toJson(). Perfect for project management integration.',
      targetSelector: '[data-export-button]',
      position: 'left',
      tips: [
        'model.toJson() export',
        'Preserves all dates',
        'Includes dependencies',
        'Project management ready'
      ]
    }
  ],

  mindmap: [
    {
      title: 'Welcome to Mind Map',
      description: 'Create visual mind maps for brainstorming and idea organization. Start with a central concept.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Brainstorming tool',
        'Idea organization',
        'Knowledge mapping'
      ]
    },
    {
      title: 'Central Idea',
      description: 'The center node is your main topic. Click it to edit the text.',
      targetSelector: '.react-flow__node',
      position: 'bottom',
      tips: [
        'Start with main idea',
        'Edit by clicking',
        'Color-coded by level'
      ]
    },
    {
      title: 'Add Branches',
      description: 'Click the "+" button on a node or drag from a node to create branches. Add multiple levels.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Level 0 = Center',
        'Level 1 = Main branches',
        'Level 2+ = Sub-branches'
      ]
    },
    {
      title: 'Organize Ideas',
      description: 'Drag nodes to reorganize. Create connections between related ideas.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Drag to reposition',
        'Connect related ideas',
        'Color-code by theme'
      ]
    }
  ],

  workflow: [
    {
      title: 'Welcome to Workflow Builder',
      description: 'Design step-by-step workflows and process flows. Create automation workflows and decision trees.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Process design',
        'Automation planning',
        'Decision trees'
      ]
    },
    {
      title: 'Add Start Node',
      description: 'Add a Start node to begin your workflow. This is where the process begins.',
      targetSelector: '.react-flow__node',
      position: 'bottom',
      tips: [
        'Every workflow starts here',
        'Green = Start',
        'Connect to next step'
      ]
    },
    {
      title: 'Add Process Steps',
      description: 'Add Process nodes for each step. Connect them in sequence with arrows.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Blue = Process step',
        'Connect sequentially',
        'Add descriptions'
      ]
    },
    {
      title: 'Add Decision Points',
      description: 'Add Decision nodes (diamonds) for branching logic. Label paths (Yes/No, True/False).',
      targetSelector: null,
      position: 'center',
      tips: [
        'Diamond = Decision',
        'Label each path',
        'Handle all cases'
      ]
    },
    {
      title: 'Complete Workflow',
      description: 'End with an End node. Review your workflow to ensure all paths lead to an end.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Red = End',
        'All paths should end',
        'Validate workflow'
      ]
    }
  ],

  strategy: [
    {
      title: 'Welcome to Strategy Map',
      description: 'Create strategic planning maps using the Balanced Scorecard methodology. Align vision to execution.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Balanced Scorecard',
        'Strategic alignment',
        'Vision to execution'
      ]
    },
    {
      title: 'Define Vision',
      description: 'Start with your Vision (purple node) - the overall strategic direction.',
      targetSelector: '.react-flow__node',
      position: 'bottom',
      tips: [
        'Purple = Vision',
        'Top-level strategy',
        'Clear and inspiring'
      ]
    },
    {
      title: 'Set Goals',
      description: 'Add Goals (blue nodes) that support your vision. These are strategic objectives.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Blue = Goals',
        'Strategic objectives',
        'Measurable outcomes'
      ]
    },
    {
      title: 'Define Objectives',
      description: 'Add Objectives (green nodes) - tactical steps to achieve goals.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Green = Objectives',
        'Tactical steps',
        'SMART objectives'
      ]
    },
    {
      title: 'Plan Initiatives',
      description: 'Add Initiatives (orange nodes) - specific action items to execute objectives.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Orange = Initiatives',
        'Action items',
        'Assign owners'
      ]
    }
  ],

  process: [
    {
      title: 'Welcome to Process Mapping',
      description: 'Design system flows, data pipelines, and manufacturing processes. Visualize how systems work.',
      targetSelector: null,
      position: 'center',
      tips: [
        'System architecture',
        'Data pipelines',
        'Process documentation'
      ]
    },
    {
      title: 'Add Input Nodes',
      description: 'Start with Input nodes (green) - where data or materials enter the process.',
      targetSelector: '.react-flow__node',
      position: 'bottom',
      tips: [
        'Green = Input',
        'Data sources',
        'Starting point'
      ]
    },
    {
      title: 'Add Process Nodes',
      description: 'Add Process nodes (blue) for transformation steps. Connect them in sequence.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Blue = Process',
        'Transformation steps',
        'Sequential flow'
      ]
    },
    {
      title: 'Add Storage Nodes',
      description: 'Add Storage nodes (purple) for data storage or inventory points.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Purple = Storage',
        'Data storage',
        'Inventory points'
      ]
    },
    {
      title: 'Add Output Nodes',
      description: 'End with Output nodes (red) - the final deliverables or results.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Red = Output',
        'Final deliverables',
        'End products'
      ]
    }
  ]
}

