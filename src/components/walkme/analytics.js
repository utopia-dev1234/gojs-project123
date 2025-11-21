// Analytics tracking for WalkMe usage

class WalkMeAnalytics {
  constructor() {
    this.events = []
    this.sessionId = this.generateSessionId()
    this.startTime = Date.now()
  }

  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // Track walkthrough start
  trackWalkthroughStart(canvasType) {
    const event = {
      type: 'walkthrough_start',
      canvasType,
      sessionId: this.sessionId,
      timestamp: Date.now(),
      timeSinceStart: Date.now() - this.startTime
    }
    this.events.push(event)
    this.saveToLocalStorage()
    console.log('[WalkMe Analytics] Walkthrough started:', event)
  }

  // Track walkthrough step
  trackStep(canvasType, stepNumber, stepTitle) {
    const event = {
      type: 'step_view',
      canvasType,
      stepNumber,
      stepTitle,
      sessionId: this.sessionId,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.saveToLocalStorage()
  }

  // Track walkthrough completion
  trackWalkthroughComplete(canvasType, totalSteps, timeSpent) {
    const event = {
      type: 'walkthrough_complete',
      canvasType,
      totalSteps,
      timeSpent,
      sessionId: this.sessionId,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.saveToLocalStorage()
    console.log('[WalkMe Analytics] Walkthrough completed:', event)
  }

  // Track walkthrough skip
  trackWalkthroughSkip(canvasType, stepNumber) {
    const event = {
      type: 'walkthrough_skip',
      canvasType,
      stepNumber,
      sessionId: this.sessionId,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.saveToLocalStorage()
  }

  // Track tip interaction
  trackTipView(tipId, canvasType) {
    const event = {
      type: 'tip_view',
      tipId,
      canvasType,
      sessionId: this.sessionId,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.saveToLocalStorage()
  }

  // Track task list completion
  trackTaskComplete(canvasType, taskId) {
    const event = {
      type: 'task_complete',
      canvasType,
      taskId,
      sessionId: this.sessionId,
      timestamp: Date.now()
    }
    this.events.push(event)
    this.saveToLocalStorage()
  }

  // Get analytics summary
  getSummary() {
    const walkthroughs = this.events.filter(e => e.type === 'walkthrough_complete')
    const skips = this.events.filter(e => e.type === 'walkthrough_skip')
    const tips = this.events.filter(e => e.type === 'tip_view')
    const tasks = this.events.filter(e => e.type === 'task_complete')

    return {
      totalWalkthroughs: walkthroughs.length,
      totalSkips: skips.length,
      totalTipViews: tips.length,
      totalTasksCompleted: tasks.length,
      completionRate: walkthroughs.length / (walkthroughs.length + skips.length) || 0,
      sessionDuration: Date.now() - this.startTime,
      events: this.events
    }
  }

  // Get completion rate by canvas type
  getCompletionRateByCanvas() {
    const byCanvas = {}
    this.events.forEach(event => {
      if (event.canvasType) {
        if (!byCanvas[event.canvasType]) {
          byCanvas[event.canvasType] = { starts: 0, completes: 0, skips: 0 }
        }
        if (event.type === 'walkthrough_start') byCanvas[event.canvasType].starts++
        if (event.type === 'walkthrough_complete') byCanvas[event.canvasType].completes++
        if (event.type === 'walkthrough_skip') byCanvas[event.canvasType].skips++
      }
    })

    Object.keys(byCanvas).forEach(canvas => {
      const data = byCanvas[canvas]
      data.completionRate = data.starts > 0 
        ? (data.completes / (data.completes + data.skips)) 
        : 0
    })

    return byCanvas
  }

  // Save to localStorage
  saveToLocalStorage() {
    try {
      const existing = JSON.parse(localStorage.getItem('walkme_analytics') || '[]')
      existing.push(...this.events.slice(-10)) // Keep last 10 events
      localStorage.setItem('walkme_analytics', JSON.stringify(existing))
    } catch (e) {
      console.warn('Failed to save analytics:', e)
    }
  }

  // Load from localStorage
  loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem('walkme_analytics')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  }

  // Export analytics data
  exportData() {
    return {
      sessionId: this.sessionId,
      startTime: this.startTime,
      endTime: Date.now(),
      summary: this.getSummary(),
      completionRates: this.getCompletionRateByCanvas(),
      events: this.events
    }
  }

  // Clear analytics
  clear() {
    this.events = []
    localStorage.removeItem('walkme_analytics')
  }
}

// Singleton instance
export const walkMeAnalytics = new WalkMeAnalytics()

// Export for use in components
export default walkMeAnalytics

