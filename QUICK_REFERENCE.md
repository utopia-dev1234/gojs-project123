# 🚀 Quick Reference Guide

## 📂 File Structure Quick Find

```
KEY FILES TO KNOW:
├── src/
│   ├── App.jsx                        ← Main app with routing
│   ├── components/
│   │   ├── Sidebar.jsx                ← Navigation (9 diagram types)
│   │   ├── gojs/                      ← GoJS diagrams (5 types)
│   │   │   ├── OrgChartCanvas.jsx     ← Organization chart
│   │   │   ├── BPMNCanvas.jsx         ← BPMN workflow
│   │   │   ├── ERDCanvas.jsx          ← Database ERD
│   │   │   ├── NetworkCanvas.jsx      ← Network topology
│   │   │   └── GanttCanvas.jsx        ← Gantt timeline
│   │   ├── common/
│   │   │   └── PropertiesPanel.jsx    ← Node properties editor
│   │   └── [4 React Flow components]  ← Mind map, workflow, etc.
│   ├── store/
│   │   └── useStore.js                ← Global state (Zustand)
│   └── utils/
│       └── exportHelpers.js           ← Export/import functions
└── README.md                          ← Full documentation
```

---

## ⚡ Quick Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new dependency
npm install <package-name>
```

---

## 🎨 How to Use Each Diagram

### 1. Organization Chart
```
1. Click sidebar → "Organization Chart"
2. Right-click any node → "Add Report" to add subordinate
3. Double-click name to edit
4. Right-click → "Change Color" to color code
5. Export → Save/Export PNG
```

### 2. BPMN Workflow
```
1. Click sidebar → "BPMN Workflow"
2. Use toolbar icons to add nodes:
   ○ = Start Event
   □ = Task
   ◇ = Gateway (decision)
   + = Subprocess
3. Drag between nodes to connect
4. Label connections for conditions
5. Export → Save JSON
```

### 3. ERD Designer
```
1. Click sidebar → "ERD Designer"
2. "Add Table" button creates entity
3. Click fields to edit names/types
4. Drag between tables for relationships
5. "Export SQL" → Get CREATE TABLE statements!
```

### 4. Network Topology
```
1. Click sidebar → "Network Topology"
2. Use toolbar to add devices:
   🖥 Server | ⚡ Router | 🛡 Firewall | 💻 Client
3. Drag to connect and label bandwidth
4. Edit IP addresses in nodes
5. "Auto Layout" for clean arrangement
```

### 5. Gantt Chart
```
1. Click sidebar → "Gantt Chart"
2. "Add Task" creates new task
3. Drag task bar to change dates
4. Resize bar edges for duration
5. Connect tasks for dependencies
```

---

## 🎯 Common Tasks

### Add a New Diagram Type

**Step 1:** Create component
```javascript
// src/components/gojs/MyNewDiagram.jsx
import { useEffect, useRef } from 'react'
import * as go from 'gojs'

const MyNewDiagram = () => {
  const divRef = useRef(null)
  
  useEffect(() => {
    const $ = go.GraphObject.make
    const diagram = $(go.Diagram, divRef.current, {
      // Your diagram config
    })
    return () => diagram.div = null
  }, [])
  
  return <div ref={divRef} className="w-full h-full" />
}

export default MyNewDiagram
```

**Step 2:** Add to App.jsx
```javascript
import MyNewDiagram from './components/gojs/MyNewDiagram'

// In renderCanvas():
case 'mynew':
  return <MyNewDiagram />
```

**Step 3:** Add to Sidebar.jsx
```javascript
{
  id: 'mynew',
  name: 'My New Diagram',
  icon: SomeIcon,
  description: 'Description',
  color: 'text-blue-600',
  bgColor: 'bg-blue-100',
  category: 'GoJS Diagrams',
}
```

---

### Export Diagram Data

```javascript
// In your component
import { exportToJSON, exportToPNG } from '../../utils/exportHelpers'

// Export JSON
const handleExport = () => {
  const data = diagram.model.toJson()
  exportToJSON(JSON.parse(data), 'my-diagram')
}

// Export PNG (GoJS)
const handleExportImage = async () => {
  await diagram.makeImageData({
    background: 'white',
    returnType: 'blob',
    callback: (blob) => {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `diagram-${Date.now()}.png`
      a.click()
    },
  })
}
```

---

### Access Global State

```javascript
import useStore from '../store/useStore'

function MyComponent() {
  const { 
    theme,           // 'light' | 'dark'
    toggleTheme,     // Function to toggle
    activeCanvas,    // Current diagram type
    setActiveCanvas, // Function to switch
    selectedNode,    // Currently selected node
    setSelectedNode, // Function to set
  } = useStore()
  
  return <div>...</div>
}
```

---

### Add New Export Format

```javascript
// src/utils/exportHelpers.js

export const exportToXML = (data, filename = 'diagram') => {
  // Convert data to XML
  const xmlString = convertToXML(data)
  
  // Create blob and download
  const blob = new Blob([xmlString], { type: 'text/xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}-${Date.now()}.xml`
  a.click()
  URL.revokeObjectURL(url)
}
```

---

## 🎨 Styling Guide

### Colors
```javascript
// Primary colors used:
- Indigo: Main brand color
- Purple: Secondary actions
- Blue: Information
- Green: Success
- Red: Danger/Delete
- Orange: Warnings
- Gray: Neutral
```

### Tailwind Classes
```css
/* Common patterns */
.button-primary
  → bg-indigo-600 text-white hover:bg-indigo-700

.button-secondary
  → bg-gray-100 text-gray-700 hover:bg-gray-200

.card
  → bg-white rounded-lg shadow-sm border border-gray-200

.sidebar-item-active
  → bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200
```

---

## 🔧 Customization Hotspots

### Change Default Diagram
```javascript
// src/store/useStore.js
activeCanvas: 'orgchart',  // ← Change this
```

### Change Theme Default
```javascript
// src/store/useStore.js
theme: 'light',  // ← Change to 'dark'
```

### Add Node Type (GoJS)
```javascript
// In your canvas component
const templatesMap = new go.Map()
templatesMap.add('mytype', myTemplate)
diagram.nodeTemplateMap = templatesMap
```

### Modify Layouts
```javascript
// TreeLayout (Org Chart)
layout: $(go.TreeLayout, {
  angle: 90,              // Direction
  layerSpacing: 35,       // Vertical space
  nodeSpacing: 20,        // Horizontal space
})

// ForceDirectedLayout (Network)
layout: $(go.ForceDirectedLayout, {
  maxIterations: 200,
  defaultSpringLength: 100,
  defaultElectricalCharge: 150,
})
```

---

## 🐛 Common Issues & Fixes

### Issue: "GoJS watermark showing"
```
GoJS is a commercial library. For production:
1. Purchase license from gojs.net
2. Add license key in each component:
   go.Diagram.licenseKey = "YOUR-LICENSE-KEY"
```

### Issue: "Diagram not rendering"
```
Check:
1. divRef is attached to <div>
2. Parent has height/width
3. useEffect cleanup returns diagram.div = null
4. No console errors
```

### Issue: "Export not working"
```
Check:
1. Permissions for file download
2. Blob support in browser
3. CORS if loading external images
```

### Issue: "State not persisting"
```
Add to useStore:
1. Load from localStorage on init
2. Save to localStorage on change
3. Use middleware for persistence
```

---

## 📊 Performance Tips

### For Large Diagrams (100+ nodes)
```javascript
// Use virtualization
myDiagram.viewportBounds = new go.Rect(...)

// Lazy loading
myDiagram.initialContentAlignment = go.Spot.Center
myDiagram.initialAutoScale = go.Diagram.Uniform

// Reduce animations
myDiagram.animationManager.isEnabled = false
```

### For Fast Rendering
```javascript
// Batch updates
diagram.startTransaction("update")
// ... make changes
diagram.commitTransaction("update")

// Suspend layout
diagram.layout.isOngoing = false
```

---

## 🔗 Useful Links

- **GoJS Docs:** https://gojs.net/latest/learn/
- **GoJS Samples:** https://gojs.net/latest/samples/
- **React Flow Docs:** https://reactflow.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Zustand Docs:** https://zustand-demo.pmnd.rs/

---

## 💡 Pro Tips

1. **Use Context Menus** - Right-click nodes in GoJS diagrams for quick actions
2. **Keyboard Shortcuts** - Ctrl+Z/Y for undo/redo in GoJS
3. **Auto-Layout** - Use layout buttons to organize messy diagrams
4. **Export Early** - Save your work frequently with Export JSON
5. **Theme Switch** - Use dark mode for reduced eye strain
6. **Properties Panel** - Edit node details without code
7. **Status Bar** - Check bottom for helpful hints
8. **Mini-map** - Use in React Flow for navigation

---

## 🎓 Learning Path

### Beginner
1. Start with Mind Map (simplest)
2. Try Organization Chart (intuitive)
3. Explore BPMN (standard workflows)

### Intermediate
4. Design ERD (database concepts)
5. Build Network Topology (IT skills)
6. Create Gantt Chart (project management)

### Advanced
7. Customize node templates
8. Add new diagram types
9. Implement collaborative features
10. Build plugins/extensions

---

## 📝 Code Snippets

### Simple GoJS Node
```javascript
$(go.Node, 'Auto',
  $(go.Shape, 'RoundedRectangle', {
    fill: 'lightblue',
    stroke: 'blue'
  }),
  $(go.TextBlock, { margin: 8 },
    new go.Binding('text', 'name')
  )
)
```

### Simple Link
```javascript
$(go.Link,
  $(go.Shape, { strokeWidth: 2 }),
  $(go.Shape, { toArrow: 'Standard' })
)
```

### Context Menu
```javascript
const contextMenu = $(
  'ContextMenu',
  $('ContextMenuButton',
    $(go.TextBlock, 'Delete'),
    { click: (e, obj) => {
      diagram.commandHandler.deleteSelection()
    }}
  )
)
node.contextMenu = contextMenu
```

---

**🎉 You're all set! Happy diagramming!**

**Pro Tip:** Bookmark this file for quick reference while developing.

