# WalkMe Integration - DiagramPro

## 🎯 Overview

This project now includes **WalkMe-style in-app guidance** to help users learn and use the diagramming application effectively. WalkMe provides step-by-step walkthroughs, contextual tips, and interactive guidance for all 9 diagram types.

## ✨ Features

### 1. **Interactive Walkthroughs**
- Step-by-step guidance for each diagram type
- Visual highlights and element targeting
- Progress tracking
- Skip/Previous/Next navigation
- Completion tracking (saved in localStorage)

### 2. **Contextual Help**
- Smart tips that appear on hover
- Field-specific guidance
- Best practices and tips
- Keyboard shortcuts help

### 3. **Help Launcher**
- Floating help button (bottom-right)
- Quick access to walkthroughs
- Toggle tips on/off
- Canvas-specific guidance

### 4. **Auto-Start for New Users**
- Automatically starts walkthrough for first-time users
- Detects new users via localStorage
- Guides through Organization Chart first

## 📁 WalkMe Components

### File Structure

```
src/components/walkme/
├── WalkMeProvider.jsx        # Context provider and state management
├── Walkthrough.jsx           # Walkthrough step component
├── WalkMeLauncher.jsx        # Floating help button
└── walkthroughConfig.js      # Walkthrough step configurations
```

## 🎓 Available Walkthroughs

### 1. Organization Chart (5 steps)
- Welcome and overview
- Adding root node
- Adding subordinates
- Customizing appearance
- Exporting charts

### 2. BPMN Workflow (5 steps)
- Welcome to BPMN
- Adding start events
- Adding tasks
- Adding decision points
- Adding end events

### 3. ERD Designer (5 steps)
- Welcome to ERD
- Creating entities
- Adding attributes
- Creating relationships
- Exporting to SQL

### 4. Network Topology (4 steps)
- Welcome to Network Designer
- Adding devices
- Connecting devices
- Configuring properties

### 5. Gantt Chart (5 steps)
- Welcome to Gantt Chart
- Adding tasks
- Setting duration
- Linking dependencies
- Tracking progress

### 6. Mind Map (4 steps)
- Welcome to Mind Map
- Central idea
- Adding branches
- Organizing ideas

### 7. Workflow Builder (5 steps)
- Welcome to Workflow Builder
- Adding start node
- Adding process steps
- Adding decision points
- Completing workflow

### 8. Strategy Map (5 steps)
- Welcome to Strategy Map
- Defining vision
- Setting goals
- Defining objectives
- Planning initiatives

### 9. Process Mapping (5 steps)
- Welcome to Process Mapping
- Adding input nodes
- Adding process nodes
- Adding storage nodes
- Adding output nodes

## 🚀 Usage

### Starting a Walkthrough

**Method 1: Help Launcher**
1. Click the floating help button (bottom-right)
2. Click "Start Walkthrough"
3. Follow the steps

**Method 2: Programmatic**
```javascript
import { useWalkMe } from './components/walkme/WalkMeProvider'

function MyComponent() {
  const { startWalkthrough } = useWalkMe()
  
  return (
    <button onClick={() => startWalkthrough('orgchart')}>
      Start Org Chart Walkthrough
    </button>
  )
}
```

### Toggling Tips

```javascript
const { toggleTips, showTips } = useWalkMe()

// Toggle tips on/off
<button onClick={toggleTips}>
  {showTips ? 'Hide Tips' : 'Show Tips'}
</button>
```

### Checking Completion Status

```javascript
const { isCompleted } = useWalkMe()

if (isCompleted('orgchart')) {
  console.log('Org chart walkthrough completed!')
}
```

## 🎨 Customization

### Adding New Walkthrough Steps

Edit `walkthroughConfig.js`:

```javascript
export const walkthroughSteps = {
  yourCanvasType: [
    {
      title: 'Step Title',
      description: 'Step description',
      targetSelector: '.your-selector', // CSS selector
      position: 'bottom', // 'top', 'bottom', 'left', 'right', 'center'
      tips: [
        'Tip 1',
        'Tip 2'
      ]
    }
  ]
}
```

### Customizing Walkthrough Appearance

Edit `Walkthrough.jsx` to customize:
- Colors and styling
- Positioning logic
- Animation effects
- Step transitions

### Customizing Help Launcher

Edit `WalkMeLauncher.jsx` to customize:
- Button position
- Menu content
- Available actions

## 🔧 Technical Details

### State Management

WalkMe uses React Context API for state management:
- `currentWalkthrough` - Active walkthrough type
- `currentStep` - Current step index
- `showTips` - Tips visibility
- `completedWalkthroughs` - Array of completed types

### Persistence

Completion status is saved in `localStorage`:
- Key: `walkme_completed`
- Format: JSON array of canvas types
- First visit: `walkme_first_visit`

### Element Targeting

WalkMe uses CSS selectors to target elements:
- `.gojs-canvas` - GoJS canvas
- `.react-flow__node` - React Flow nodes
- `[data-properties-panel]` - Properties panel
- `[data-export-button]` - Export button

**Note:** Add `data-*` attributes to elements you want to target:

```jsx
<div data-properties-panel>
  {/* Properties panel content */}
</div>
```

## 📊 Analytics (Future Enhancement)

Track walkthrough usage:
- Completion rates
- Drop-off points
- Time to complete
- User engagement

## 🎯 Best Practices

### 1. Keep Steps Focused
- One action per step
- Maximum 5-7 steps per walkthrough
- Clear, concise descriptions

### 2. Use Appropriate Selectors
- Prefer stable selectors (data attributes)
- Test selectors after UI changes
- Provide fallback selectors

### 3. Provide Helpful Tips
- Explain why, not just what
- Include best practices
- Add keyboard shortcuts

### 4. Test Thoroughly
- Test in different browsers
- Test with different screen sizes
- Test with dark/light themes

## 🐛 Troubleshooting

### Walkthrough Not Appearing
- Check if `WalkMeProvider` wraps your app
- Verify `Walkthrough` component is rendered
- Check browser console for errors

### Element Not Highlighted
- Verify selector exists in DOM
- Check selector syntax
- Ensure element is visible

### Tips Not Showing
- Check `showTips` state
- Verify tip components are rendered
- Check CSS for visibility

## 📚 Related Documentation

- [WalkMe Project](../walkme/README.md) - Original WalkMe project
- [WalkMe Explained](../walkme/docs/WALKME_EXPLAINED.md) - Detailed WalkMe guide
- [Implementation Guide](../walkme/docs/implementation-guide.md) - Implementation best practices

## 🤝 Contributing

To add new walkthroughs or improve existing ones:

1. Add steps to `walkthroughConfig.js`
2. Test walkthrough thoroughly
3. Update this documentation
4. Submit pull request

## 📝 License

Same as main project (MIT License)

---

**WalkMe Integration by:** Combined WalkMe + DiagramPro Projects
**Version:** 1.0
**Status:** ✅ Integrated and Ready

