// Walkthrough configurations for each diagram type

export const walkthroughSteps = {
  orgchart: [
    {
      title: 'Welcome to Organization Chart',
      description: 'Create hierarchical organizational structures. This walkthrough will guide you through creating your first org chart.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Perfect for company structures',
        'Shows reporting relationships',
        'Supports photos and avatars'
      ]
    },
    {
      title: 'Add Root Node',
      description: 'Click on the canvas to add your first node (CEO or top-level manager). Double-click to edit the name.',
      targetSelector: '.gojs-canvas, canvas',
      position: 'bottom',
      tips: [
        'Start with the top-level position',
        'Double-click nodes to edit',
        'Drag nodes to reposition'
      ]
    },
    {
      title: 'Add Subordinates',
      description: 'Right-click on a node and select "Add Report" to add team members below them.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Right-click for context menu',
        'Add multiple levels of hierarchy',
        'Organize by department'
      ]
    },
    {
      title: 'Customize Appearance',
      description: 'Select a node and use the Properties Panel on the right to change colors, add photos, or modify details.',
      targetSelector: '[data-properties-panel]',
      position: 'left',
      tips: [
        'Change node colors',
        'Add employee photos',
        'Customize text and styling'
      ]
    },
    {
      title: 'Export Your Chart',
      description: 'Use the export button in the sidebar to save your org chart as PNG, PDF, or JSON.',
      targetSelector: '[data-export-button]',
      position: 'left',
      tips: [
        'PNG for presentations',
        'PDF for documents',
        'JSON to save and reload'
      ]
    }
  ],

  bpmn: [
    {
      title: 'Welcome to BPMN Workflow Designer',
      description: 'Design business process workflows using BPMN 2.0 standards. Let\'s create your first workflow.',
      targetSelector: null,
      position: 'center',
      tips: [
        'BPMN 2.0 compliant',
        'Standard process notation',
        'Perfect for SOPs'
      ]
    },
    {
      title: 'Add Start Event',
      description: 'Drag a Start Event (green circle) from the palette to begin your process flow.',
      targetSelector: '.gojs-canvas, canvas',
      position: 'bottom',
      tips: [
        'Every process starts here',
        'Green circle = Start',
        'Drag from palette'
      ]
    },
    {
      title: 'Add Tasks',
      description: 'Add Task nodes (blue rectangles) to represent process steps. Connect them with arrows.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Blue = Task/Activity',
        'Connect with arrows',
        'Add descriptions'
      ]
    },
    {
      title: 'Add Decision Points',
      description: 'Use Gateway nodes (orange diamonds) for decision points. Label the paths (Yes/No, Approved/Rejected).',
      targetSelector: null,
      position: 'center',
      tips: [
        'Orange diamond = Decision',
        'Label each path',
        'X = XOR gateway'
      ]
    },
    {
      title: 'Add End Event',
      description: 'Complete your workflow with an End Event (red circle). Every process should have a clear end.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Red circle = End',
        'Multiple ends allowed',
        'Validate your process'
      ]
    }
  ],

  erd: [
    {
      title: 'Welcome to ERD Designer',
      description: 'Design database schemas with Entity Relationship Diagrams. Create tables, relationships, and export to SQL.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Database schema design',
        'Export to SQL',
        'Visual data modeling'
      ]
    },
    {
      title: 'Create Entities',
      description: 'Click to add entity boxes. Each entity represents a database table.',
      targetSelector: '.gojs-canvas, canvas',
      position: 'bottom',
      tips: [
        'Each box = database table',
        'Name your entities clearly',
        'Use singular nouns'
      ]
    },
    {
      title: 'Add Attributes',
      description: 'Double-click an entity to add attributes (columns). Mark Primary Keys with yellow diamond, Foreign Keys with red square.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Yellow diamond = Primary Key',
        'Red square = Foreign Key',
        'Blue circle = Regular attribute'
      ]
    },
    {
      title: 'Create Relationships',
      description: 'Connect entities with lines to show relationships. Label cardinality (1, N, 1:N, M:N).',
      targetSelector: null,
      position: 'center',
      tips: [
        'One-to-Many: 1:N',
        'Many-to-Many: M:N',
        'One-to-One: 1:1'
      ]
    },
    {
      title: 'Export to SQL',
      description: 'Use the Export button and select SQL to generate CREATE TABLE statements automatically.',
      targetSelector: '[data-export-button]',
      position: 'left',
      tips: [
        'Generates CREATE TABLE',
        'Includes PRIMARY KEY',
        'Includes FOREIGN KEY constraints'
      ]
    }
  ],

  network: [
    {
      title: 'Welcome to Network Topology Designer',
      description: 'Design network infrastructure diagrams. Map servers, routers, switches, and connections.',
      targetSelector: null,
      position: 'center',
      tips: [
        'IT infrastructure mapping',
        'Network documentation',
        'System architecture'
      ]
    },
    {
      title: 'Add Devices',
      description: 'Add network devices from the palette: Servers (blue), Routers (orange), Switches (purple), Firewalls (red).',
      targetSelector: '.gojs-canvas, canvas',
      position: 'bottom',
      tips: [
        'Different shapes = different devices',
        'Color-coded by type',
        'Add IP addresses'
      ]
    },
    {
      title: 'Connect Devices',
      description: 'Draw connections between devices. Label connections with bandwidth (e.g., "1 Gbps").',
      targetSelector: null,
      position: 'center',
      tips: [
        'Show network paths',
        'Label bandwidth',
        'Document connections'
      ]
    },
    {
      title: 'Configure Properties',
      description: 'Select a device and use the Properties Panel to add IP addresses, hostnames, and other details.',
      targetSelector: '[data-properties-panel]',
      position: 'left',
      tips: [
        'Add IP addresses',
        'Document device specs',
        'Track device status'
      ]
    }
  ],

  gantt: [
    {
      title: 'Welcome to Gantt Chart',
      description: 'Create project timelines and track task progress. Visualize project schedules with this Gantt chart.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Project timeline planning',
        'Task dependencies',
        'Progress tracking'
      ]
    },
    {
      title: 'Add Tasks',
      description: 'Click on the timeline to add tasks. Each task appears as a bar on the timeline.',
      targetSelector: '.gojs-canvas, canvas',
      position: 'bottom',
      tips: [
        'Tasks show as bars',
        'Duration = bar length',
        'Color-coded by type'
      ]
    },
    {
      title: 'Set Duration',
      description: 'Drag the edges of task bars to adjust duration. The timeline shows dates from Jan to May 2024.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Drag to resize',
        'Drag to reposition',
        'See duration in days'
      ]
    },
    {
      title: 'Link Dependencies',
      description: 'Connect tasks with arrows to show dependencies. A task can depend on multiple predecessors.',
      targetSelector: null,
      position: 'center',
      tips: [
        'Arrows show dependencies',
        'Task B depends on Task A',
        'Critical path highlighted'
      ]
    },
    {
      title: 'Track Progress',
      description: 'Update progress percentage in the Properties Panel. Visual progress bars show completion status.',
      targetSelector: '[data-properties-panel]',
      position: 'left',
      tips: [
        'Set progress percentage',
        'Visual progress bars',
        'Track milestones'
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

