// Smart Tips configuration for contextual help

export const smartTipsConfig = {
  orgchart: [
    {
      id: 'tip-add-node',
      title: 'Add Node',
      description: 'Click on the canvas to add a new node. Double-click to edit the name immediately.',
      targetSelector: '.gojs-canvas, canvas',
      shortcut: 'Click'
    },
    {
      id: 'tip-right-click',
      title: 'Context Menu',
      description: 'Right-click on any node to access quick actions: Add Report, Delete, Change Color, Edit Properties.',
      targetSelector: null,
      shortcut: 'Right-click'
    },
    {
      id: 'tip-properties',
      title: 'Properties Panel',
      description: 'Select a node and use the Properties Panel to customize colors, add photos, set department, and more.',
      targetSelector: '[data-properties-panel]',
      shortcut: 'Select node'
    }
  ],

  bpmn: [
    {
      id: 'tip-start-event',
      title: 'Start Event',
      description: 'Green circle represents the start of a process. Every workflow must begin with a start event.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-task',
      title: 'Task Node',
      description: 'Blue rectangles are tasks or activities. These represent work that needs to be done.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-gateway',
      title: 'Gateway',
      description: 'Orange diamonds are decision points. Use XOR gateways (X symbol) for exclusive choices.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-end-event',
      title: 'End Event',
      description: 'Red circle marks the end of a process. You can have multiple end events for different outcomes.',
      targetSelector: null,
      shortcut: null
    }
  ],

  erd: [
    {
      id: 'tip-entity',
      title: 'Entity',
      description: 'Each box represents a database table. Use singular nouns for entity names (e.g., "User" not "Users").',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-primary-key',
      title: 'Primary Key',
      description: 'Yellow diamond marker indicates a Primary Key. Each entity should have at least one PK.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-foreign-key',
      title: 'Foreign Key',
      description: 'Red square marker indicates a Foreign Key. These create relationships between tables.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-export-sql',
      title: 'Export to SQL',
      description: 'Use the Export button and select SQL to automatically generate CREATE TABLE statements.',
      targetSelector: '[data-export-button]',
      shortcut: 'Export → SQL'
    }
  ],

  network: [
    {
      id: 'tip-server',
      title: 'Server',
      description: 'Blue rectangles represent servers (web, app, database). Add IP addresses in properties.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-router',
      title: 'Router',
      description: 'Orange diamonds are routers. These handle network routing and traffic direction.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-firewall',
      title: 'Firewall',
      description: 'Red pentagons represent firewalls. These provide network security and access control.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-connection',
      title: 'Connections',
      description: 'Draw connections between devices. Label with bandwidth (e.g., "1 Gbps", "100 Mbps").',
      targetSelector: null,
      shortcut: null
    }
  ],

  gantt: [
    {
      id: 'tip-task-bar',
      title: 'Task Bar',
      description: 'Each bar represents a task. Drag edges to resize duration, drag bar to change start date.',
      targetSelector: null,
      shortcut: 'Drag'
    },
    {
      id: 'tip-dependency',
      title: 'Dependencies',
      description: 'Connect tasks with arrows to show dependencies. Task B depends on Task A means B starts after A finishes.',
      targetSelector: null,
      shortcut: null
    },
    {
      id: 'tip-progress',
      title: 'Progress Tracking',
      description: 'Update progress percentage in Properties Panel. Visual progress bars show completion status.',
      targetSelector: '[data-properties-panel]',
      shortcut: 'Properties → Progress'
    },
    {
      id: 'tip-timeline',
      title: 'Timeline',
      description: 'Timeline shows dates from January to May 2024. Tasks are positioned based on start date and duration.',
      targetSelector: null,
      shortcut: null
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

