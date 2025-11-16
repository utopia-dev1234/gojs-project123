# 🎨 DiagramPro - Professional Diagramming Suite

> **A comprehensive, enterprise-grade diagramming application built with GoJS, React, and modern web technologies**

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![GoJS](https://img.shields.io/badge/GoJS-Latest-purple?logo=javascript)](https://gojs.net/)
[![React Flow](https://img.shields.io/badge/React%20Flow-11.10-purple?logo=react)](https://reactflow.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-cyan?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-yellow?logo=vite)](https://vitejs.dev/)

## ✨ Features Overview

DiagramPro is a professional-grade diagramming application that combines the power of **GoJS** and **React Flow** to deliver 9 different specialized diagram types for business, technical, and strategic use cases.

### 🎯 Core Capabilities

- ✅ **9 Professional Diagram Types** - From org charts to Gantt charts
- ✅ **GoJS Integration** - Enterprise-level diagramming library
- ✅ **React Flow Canvas** - Modern, flexible node-based editor
- ✅ **State Management** - Zustand for efficient global state
- ✅ **Theme Support** - Light/Dark mode with seamless switching
- ✅ **Import/Export** - JSON, PNG, SVG, PDF, SQL export capabilities
- ✅ **Undo/Redo** - Full history management
- ✅ **Context Menus** - Right-click operations on nodes
- ✅ **Drag & Drop** - Intuitive node manipulation
- ✅ **Auto-Layout** - Intelligent automatic layouting
- ✅ **Real-time Editing** - Live updates and editing
- ✅ **Properties Panel** - Dynamic node configuration
- ✅ **Responsive Design** - Works on all screen sizes

---

## 📊 Diagram Types

### 1. 🏢 Organization Chart (GoJS)
**Perfect for:** HR, Management, Team Structure

- Hierarchical employee structure
- Photo integration with avatars
- Department categorization
- Color-coded levels
- Context menu for quick actions (Add Report, Delete, Change Color)
- Tree layout with configurable styling
- Export to JSON/PNG
- Right-click to add subordinates

**Use Cases:**
- Company organizational structure
- Department hierarchies
- Reporting relationships
- Team compositions

---

### 2. 🔄 BPMN Workflow Designer (GoJS)
**Perfect for:** Business Process Mapping, Operations, Quality Management

**Node Types:**
- **Start Event** (Green circle) - Process initiation
- **Task** (Blue rectangle) - Process steps with descriptions
- **Gateway** (Orange diamond) - Decision points (X = XOR)
- **Subprocess** (Purple rectangle) - Expandable sub-processes
- **Data Object** (Document icon) - Data references
- **End Event** (Red circle) - Process termination

**Features:**
- BPMN 2.0 compliant shapes
- Conditional flows with labels
- Orthogonal routing with jump-over
- Animated connections
- Process validation
- Export workflow definitions

**Use Cases:**
- Standard Operating Procedures (SOPs)
- Business process documentation
- Workflow automation planning
- Process optimization

---

### 3. 🗄️ Entity Relationship Diagram (GoJS)
**Perfect for:** Database Design, Software Architecture, Data Modeling

**Features:**
- **Primary Keys** (Yellow diamond marker)
- **Foreign Keys** (Red square marker)
- **Attributes** (Blue circle marker)
- Data type specification
- Cardinality labels (1, N, 1:N, M:N)
- Relationship naming
- **SQL Export** - Generate CREATE TABLE statements automatically
- Visual FK relationships

**Use Cases:**
- Database schema design
- Data modeling
- System architecture
- Migration planning

**Bonus:** Export directly to SQL with proper PRIMARY KEY and data type definitions!

---

### 4. 🌐 Network Topology Diagram (GoJS)
**Perfect for:** IT Infrastructure, Network Design, System Architecture

**Device Types:**
- **Server** (Blue rectangle) - Web/App/Database servers
- **Router** (Orange diamond) - Network routing
- **Firewall** (Red pentagon) - Security appliances
- **Switch** (Purple hexagon) - Network switches
- **Client** (Blue ellipse) - Workstations/endpoints
- **Cloud** (Green cloud) - Internet/Cloud services
- **Database** (Pink cylinder) - Data storage

**Features:**
- IP address tracking
- Connection bandwidth labels
- Device status indicators
- Color-coded connection types
- Force-directed layout
- Infrastructure documentation

**Use Cases:**
- Network infrastructure planning
- System architecture diagrams
- IT documentation
- Disaster recovery planning

---

### 5. 📅 Gantt Chart Timeline (GoJS)
**Perfect for:** Project Management, Sprint Planning, Resource Allocation

**Features:**
- Timeline visualization (Jan-May 2024 scale)
- Task duration bars with color coding
- Progress tracking (visual progress bars)
- Task dependencies with arrows
- Drag to reposition tasks
- Resize to adjust duration
- Duration calculation (auto-displays days)
- Hierarchical task relationships

**Visual Indicators:**
- Task name and duration
- Progress percentage overlay
- Dependency arrows
- Color-coded by task type

**Use Cases:**
- Project timeline planning
- Sprint scheduling
- Resource allocation
- Milestone tracking

---

### 6. 🧠 Mind Map (React Flow)
**Perfect for:** Brainstorming, Idea Organization, Strategic Planning

**Features:**
- Central idea with radiating branches
- Multi-level hierarchy (Level 0, 1, 2, 3)
- Color-coded nodes by level
- Smooth animated connections
- Drag and drop positioning
- Real-time connection creation
- Export to JSON
- Mini-map overview

**Use Cases:**
- Brainstorming sessions
- Project planning
- Knowledge mapping
- Study notes

---

### 7. 🔀 Workflow Builder (React Flow)
**Perfect for:** Process Design, Automation Workflows, Decision Trees

**Node Types:**
- Start nodes
- Process steps
- Decision points
- End nodes

**Features:**
- Step-by-step process flow
- Conditional branching
- Custom node styling
- Connection validation

---

### 8. 🎯 Strategy Map (React Flow)
**Perfect for:** Strategic Planning, OKRs, Balanced Scorecard

**Four-Tier Hierarchy:**
1. **Vision** (Purple) - Overall strategic vision
2. **Goals** (Blue) - Strategic goals
3. **Objectives** (Green) - Tactical objectives
4. **Initiatives** (Orange) - Action items

**Features:**
- Balanced scorecard methodology
- Clear alignment from vision to execution
- Color-coded strategic elements
- Connection of initiatives to objectives

---

### 9. ⚙️ Process Mapping (React Flow)
**Perfect for:** System Flows, Data Pipelines, Manufacturing Processes

**Node Types:**
- Input nodes
- Process nodes
- Storage nodes
- Validation nodes
- Output nodes

**Features:**
- System architecture visualization
- Data flow diagrams
- Directed edges with arrows
- Process documentation

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 16+ installed
- **npm** or **yarn** package manager
- Modern web browser

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd gojs-project123

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Technology Stack

### Core Libraries

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2 | UI Framework |
| **GoJS** | Latest | Professional diagramming |
| **React Flow** | 11.10 | Node-based canvas |
| **Zustand** | 4.4 | State management |
| **Tailwind CSS** | 3.3 | Styling framework |
| **Vite** | 5.0 | Build tool |
| **html2canvas** | Latest | Image export |
| **jsPDF** | Latest | PDF export |
| **Lucide React** | Latest | Icon library |

### Architecture Highlights

- **Component-based architecture** - Modular, reusable components
- **Global state management** - Zustand for theme, canvas type, history
- **Immutable state updates** - Immer middleware for safe mutations
- **Type-safe exports** - Utility functions for all export formats
- **Responsive design** - Works on desktop, tablet, and mobile

---

## 📁 Project Structure

```
gojs-project123/
├── src/
│   ├── components/
│   │   ├── gojs/                 # GoJS-based components
│   │   │   ├── OrgChartCanvas.jsx    # Organization Chart
│   │   │   ├── BPMNCanvas.jsx        # BPMN Workflow
│   │   │   ├── ERDCanvas.jsx         # Entity Relationship Diagram
│   │   │   ├── NetworkCanvas.jsx     # Network Topology
│   │   │   └── GanttCanvas.jsx       # Gantt Chart
│   │   ├── common/               # Shared components
│   │   │   └── PropertiesPanel.jsx   # Properties editor
│   │   ├── MindMapCanvas.jsx     # React Flow mind map
│   │   ├── WorkflowCanvas.jsx    # React Flow workflow
│   │   ├── StrategyCanvas.jsx    # React Flow strategy map
│   │   ├── ProcessCanvas.jsx     # React Flow process map
│   │   └── Sidebar.jsx           # Navigation sidebar
│   ├── store/
│   │   └── useStore.js           # Zustand state management
│   ├── utils/
│   │   └── exportHelpers.js      # Export/import utilities
│   ├── App.jsx                   # Main application
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎨 Key Features Explained

### State Management

```javascript
// Global store with Zustand + Immer
const useStore = create(immer((set) => ({
  theme: 'light',              // Light/Dark theme
  activeCanvas: 'orgchart',    // Current diagram type
  diagrams: {},                 // Diagram data storage
  history: { past, present, future }, // Undo/Redo
  selectedNode: null,           // Selected element
  showProperties: true,         // Properties panel toggle
  showGrid: true,               // Grid visibility
  snapToGrid: true,             // Snap to grid
  autoLayout: true,             // Auto-layout enabled
})))
```

### Export Capabilities

- **JSON** - Complete diagram data
- **PNG** - High-resolution raster image
- **SVG** - Vector graphics (GoJS only)
- **PDF** - Print-ready documents
- **SQL** - Database schema (ERD only)
- **CSV** - Tabular node data

### Context Menus (GoJS)

Right-click on nodes to:
- Add child nodes
- Delete nodes
- Change colors
- Edit properties
- Clone nodes

### Keyboard Shortcuts

- `Ctrl+Z` / `Cmd+Z` - Undo
- `Ctrl+Y` / `Cmd+Y` - Redo
- `Delete` - Delete selected node
- `Ctrl+C` - Copy
- `Ctrl+V` - Paste
- `Ctrl+A` - Select all

---

## 🎯 Use Cases by Industry

### 🏢 Corporate / Enterprise
- Organizational structure charts
- Strategic planning maps
- Process documentation
- Compliance workflows

### 💻 Technology / Software
- System architecture diagrams
- Database schema design
- Network topology maps
- Project timelines (Gantt)

### 📊 Consulting
- Client org structure analysis
- Process optimization mapping
- Strategy roadmaps
- Workflow automation design

### 🏭 Manufacturing / Operations
- Production workflows
- Quality assurance processes
- Supply chain mapping
- Equipment network diagrams

### 🎓 Education / Training
- Mind maps for learning
- Course structure planning
- Knowledge organization
- Concept mapping

---

## 🔧 Customization Guide

### Adding a New Diagram Type

1. **Create component** in `src/components/gojs/` or `src/components/`
2. **Define node templates** using GoJS or React Flow
3. **Add to App.jsx** in the `renderCanvas()` switch
4. **Add to Sidebar.jsx** in the `canvasTypes` array
5. **Update store** if needed for specific state

### Styling Customization

Modify `tailwind.config.js` to customize:
- Color schemes
- Spacing
- Fonts
- Breakpoints

### Theme Customization

The theme system supports:
- Light/Dark mode toggle
- Custom color palettes
- Per-component theme overrides

---

## 📚 API & Utilities

### Export Helpers

```javascript
import { 
  exportToJSON, 
  exportToPNG, 
  exportToPDF,
  importFromJSON 
} from './utils/exportHelpers'

// Export diagram
exportToJSON(diagramData, 'my-diagram')
exportToPNG(elementRef.current, 'my-diagram')

// Import diagram
const data = await importFromJSON()
```

### State Access

```javascript
import useStore from './store/useStore'

function MyComponent() {
  const { 
    activeCanvas, 
    setActiveCanvas,
    theme,
    toggleTheme 
  } = useStore()
  
  // Use state...
}
```

---

## 🚀 Performance Optimization

- **Code splitting** - Lazy load diagram components
- **Memoization** - React.memo for expensive components
- **Virtual rendering** - GoJS efficient rendering
- **Debounced updates** - Smooth interaction
- **Optimized layouts** - Fast auto-layout algorithms

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **GoJS** - Professional diagramming library
- **React Flow** - Node-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Lucide** - Beautiful icon library

---

## 📞 Support & Contact

- **Issues:** [GitHub Issues](https://github.com/your-username/gojs-project123/issues)
- **Discussions:** [GitHub Discussions](https://github.com/your-username/gojs-project123/discussions)

---

## 🌟 What Makes This Special?

### 1. **Dual Engine Architecture**
Combines GoJS (enterprise-grade) and React Flow (modern flexibility) for the best of both worlds.

### 2. **Production Ready**
- Comprehensive error handling
- Export/import functionality
- Undo/redo support
- Local storage persistence
- Theme support

### 3. **Developer Friendly**
- Clean, modular code
- Well-documented
- Easy to extend
- Type-safe utilities

### 4. **Enterprise Features**
- SQL export for ERD
- BPMN compliance
- Professional layouts
- Context menus
- Properties panels

### 5. **Modern Stack**
- React 18
- Vite (fast builds)
- Tailwind CSS
- Zustand (simple state)

---

## 📈 Roadmap

### Planned Features
- [ ] Collaborative editing (WebSocket)
- [ ] Cloud storage integration
- [ ] Template library
- [ ] AI-powered auto-layout suggestions
- [ ] Mobile app (React Native)
- [ ] Real-time collaboration
- [ ] Version control for diagrams
- [ ] Comments and annotations
- [ ] Presentation mode
- [ ] Integration with Jira, Confluence, Notion

---

## 🎓 Learning Resources

### GoJS Resources
- [GoJS Documentation](https://gojs.net/latest/learn/)
- [GoJS Samples](https://gojs.net/latest/samples/)

### React Flow Resources
- [React Flow Docs](https://reactflow.dev/)
- [React Flow Examples](https://reactflow.dev/examples/)

---

## 💡 Tips & Best Practices

### For Best Performance
1. Use `React.memo()` for diagram components
2. Minimize re-renders with proper state management
3. Use lazy loading for large diagrams
4. Enable auto-layout only when needed

### For Best UX
1. Provide clear visual feedback
2. Use consistent color schemes
3. Add helpful tooltips
4. Implement keyboard shortcuts

### For Maintainability
1. Keep components small and focused
2. Use TypeScript for type safety (optional)
3. Document complex logic
4. Write tests for utilities

---

**Built with ❤️ using modern web technologies and AI-accelerated development techniques**

**⭐ Star this repo if you find it useful!**
