// Task Lists configuration for complex workflows

export const taskListsConfig = {
  orgchart: {
    title: 'Create Organization Chart',
    tasks: [
      {
        id: 'task-1',
        title: 'Add Root Node',
        description: 'Click on canvas to add CEO or top-level manager',
        tips: ['Start with highest position', 'Double-click to edit name']
      },
      {
        id: 'task-2',
        title: 'Add Department Heads',
        description: 'Right-click root node → Add Report for department heads',
        tips: ['Add 3-5 main departments', 'Use clear department names']
      },
      {
        id: 'task-3',
        title: 'Add Team Members',
        description: 'Add team members under each department head',
        tips: ['Right-click to add reports', 'Organize by team']
      },
      {
        id: 'task-4',
        title: 'Customize Appearance',
        description: 'Select nodes and customize colors, add photos in Properties Panel',
        tips: ['Use consistent colors', 'Add employee photos']
      },
      {
        id: 'task-5',
        title: 'Review Structure',
        description: 'Review the organizational structure for accuracy',
        tips: ['Check reporting lines', 'Verify hierarchy']
      },
      {
        id: 'task-6',
        title: 'Export Chart',
        description: 'Export as PNG for presentations or JSON to save',
        tips: ['PNG for sharing', 'JSON to reload later']
      }
    ]
  },

  bpmn: {
    title: 'Create BPMN Workflow',
    tasks: [
      {
        id: 'task-1',
        title: 'Add Start Event',
        description: 'Drag Start Event (green circle) to canvas',
        tips: ['Every process starts here', 'Only one start event']
      },
      {
        id: 'task-2',
        title: 'Add Initial Tasks',
        description: 'Add Task nodes (blue rectangles) for first process steps',
        tips: ['Connect from start event', 'Add clear descriptions']
      },
      {
        id: 'task-3',
        title: 'Add Decision Points',
        description: 'Add Gateway nodes (orange diamonds) for branching logic',
        tips: ['Label paths clearly', 'Use XOR for exclusive choices']
      },
      {
        id: 'task-4',
        title: 'Complete Process Flow',
        description: 'Add remaining tasks and connect all paths',
        tips: ['Ensure all paths connect', 'No orphaned nodes']
      },
      {
        id: 'task-5',
        title: 'Add End Events',
        description: 'Add End Event (red circle) for each process outcome',
        tips: ['One end per outcome', 'All paths should end']
      },
      {
        id: 'task-6',
        title: 'Validate Workflow',
        description: 'Review workflow for completeness and accuracy',
        tips: ['Check all connections', 'Verify logic flow']
      }
    ]
  },

  erd: {
    title: 'Design Database Schema',
    tasks: [
      {
        id: 'task-1',
        title: 'Create Entities',
        description: 'Add entity boxes for each database table',
        tips: ['Use singular nouns', 'Clear, descriptive names']
      },
      {
        id: 'task-2',
        title: 'Add Primary Keys',
        description: 'Mark Primary Key attributes with yellow diamond',
        tips: ['Each entity needs PK', 'Usually ID fields']
      },
      {
        id: 'task-3',
        title: 'Add Attributes',
        description: 'Add all columns/attributes to each entity',
        tips: ['Include data types', 'Mark required fields']
      },
      {
        id: 'task-4',
        title: 'Create Relationships',
        description: 'Connect entities and label cardinality (1:N, M:N)',
        tips: ['One-to-Many: 1:N', 'Many-to-Many: M:N']
      },
      {
        id: 'task-5',
        title: 'Add Foreign Keys',
        description: 'Mark Foreign Key attributes with red square',
        tips: ['FKs create relationships', 'Reference Primary Keys']
      },
      {
        id: 'task-6',
        title: 'Export to SQL',
        description: 'Use Export → SQL to generate CREATE TABLE statements',
        tips: ['Review generated SQL', 'Test in database']
      }
    ]
  },

  gantt: {
    title: 'Create Project Timeline',
    tasks: [
      {
        id: 'task-1',
        title: 'Add Project Tasks',
        description: 'Add all project tasks to the timeline',
        tips: ['Start with major milestones', 'Break into subtasks']
      },
      {
        id: 'task-2',
        title: 'Set Task Durations',
        description: 'Drag task bar edges to set start date and duration',
        tips: ['Realistic estimates', 'Include buffer time']
      },
      {
        id: 'task-3',
        title: 'Link Dependencies',
        description: 'Connect tasks to show dependencies',
        tips: ['Task B depends on A', 'Show critical path']
      },
      {
        id: 'task-4',
        title: 'Set Progress',
        description: 'Update progress percentage for each task',
        tips: ['Track regularly', 'Visual progress bars']
      },
      {
        id: 'task-5',
        title: 'Review Timeline',
        description: 'Review overall project timeline and adjust as needed',
        tips: ['Check for conflicts', 'Verify dependencies']
      },
      {
        id: 'task-6',
        title: 'Export Timeline',
        description: 'Export as PNG or PDF for project documentation',
        tips: ['Share with team', 'Update regularly']
      }
    ]
  }
}

