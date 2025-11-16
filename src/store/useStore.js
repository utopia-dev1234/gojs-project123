import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

// Load theme from localStorage
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('diagram-pro-theme')
    return savedTheme || 'light'
  }
  return 'light'
}

const useStore = create(
  immer((set) => ({
    // Theme Management
    theme: getInitialTheme(),
    setTheme: (theme) => {
      localStorage.setItem('diagram-pro-theme', theme)
      set({ theme })
    },
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('diagram-pro-theme', newTheme)
        return { theme: newTheme }
      }),

    // Active Canvas/Diagram Type
    activeCanvas: 'theme',
    setActiveCanvas: (canvas) => set({ activeCanvas: canvas }),

    // Diagram Data Storage
    diagrams: {
      orgchart: null,
      bpmn: null,
      erd: null,
      network: null,
      gantt: null,
      mindmap: null,
    },
    updateDiagram: (type, data) =>
      set((state) => {
        state.diagrams[type] = data
      }),

    // History Management for Undo/Redo
    history: {
      past: [],
      present: null,
      future: [],
    },
    addToHistory: (state) =>
      set((store) => {
        store.history.past.push(store.history.present)
        store.history.present = state
        store.history.future = []
      }),
    undo: () =>
      set((store) => {
        if (store.history.past.length > 0) {
          const previous = store.history.past.pop()
          store.history.future.unshift(store.history.present)
          store.history.present = previous
        }
      }),
    redo: () =>
      set((store) => {
        if (store.history.future.length > 0) {
          const next = store.history.future.shift()
          store.history.past.push(store.history.present)
          store.history.present = next
        }
      }),

    // Selected Elements
    selectedNode: null,
    setSelectedNode: (node) => set({ selectedNode: node }),

    // Properties Panel
    showProperties: true,
    toggleProperties: () =>
      set((state) => ({
        showProperties: !state.showProperties,
      })),

    // Grid and Snap Settings
    showGrid: true,
    snapToGrid: true,
    gridSize: 10,
    toggleGrid: () =>
      set((state) => ({
        showGrid: !state.showGrid,
      })),
    toggleSnap: () =>
      set((state) => ({
        snapToGrid: !state.snapToGrid,
      })),
    setGridSize: (size) => set({ gridSize: size }),

    // Zoom Level
    zoomLevel: 1,
    setZoomLevel: (level) => set({ zoomLevel: level }),

    // Auto-Layout Settings
    autoLayout: true,
    layoutDirection: 'vertical',
    setAutoLayout: (value) => set({ autoLayout: value }),
    setLayoutDirection: (direction) => set({ layoutDirection: direction }),
  }))
)

export default useStore

