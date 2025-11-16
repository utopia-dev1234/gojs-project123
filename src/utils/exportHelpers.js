import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

/**
 * Export diagram as JSON
 */
export const exportToJSON = (data, filename = 'diagram') => {
  const jsonString = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}-${Date.now()}.json`
  a.click()
  URL.revokeObjectURL(url)
}

/**
 * Import diagram from JSON
 */
export const importFromJSON = (callback) => {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result)
            resolve(data)
            if (callback) callback(data)
          } catch (err) {
            reject(err)
            alert('Error loading file: ' + err.message)
          }
        }
        reader.readAsText(file)
      }
    }
    input.click()
  })
}

/**
 * Export diagram as PNG using html2canvas
 */
export const exportToPNG = async (element, filename = 'diagram') => {
  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
    })
    const blob = await new Promise((resolve) => canvas.toBlob(resolve))
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename}-${Date.now()}.png`
    a.click()
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Error exporting to PNG:', err)
    alert('Error exporting image: ' + err.message)
  }
}

/**
 * Export diagram as PDF
 */
export const exportToPDF = async (element, filename = 'diagram') => {
  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
    })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height],
    })
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
    pdf.save(`${filename}-${Date.now()}.pdf`)
  } catch (err) {
    console.error('Error exporting to PDF:', err)
    alert('Error exporting PDF: ' + err.message)
  }
}

/**
 * Export diagram as SVG (for GoJS diagrams)
 */
export const exportToSVG = (diagram, filename = 'diagram') => {
  if (!diagram) return
  const svg = diagram.makeSvg({ scale: 1, background: 'white' })
  const svgString = new XMLSerializer().serializeToString(svg)
  const blob = new Blob([svgString], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}-${Date.now()}.svg`
  a.click()
  URL.revokeObjectURL(url)
}

/**
 * Copy diagram data to clipboard
 */
export const copyToClipboard = async (data) => {
  try {
    const jsonString = JSON.stringify(data, null, 2)
    await navigator.clipboard.writeText(jsonString)
    return true
  } catch (err) {
    console.error('Error copying to clipboard:', err)
    return false
  }
}

/**
 * Download text file
 */
export const downloadTextFile = (content, filename, mimeType = 'text/plain') => {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

/**
 * Convert diagram data to CSV
 */
export const exportToCSV = (nodeData, filename = 'diagram') => {
  if (!nodeData || nodeData.length === 0) return

  const headers = Object.keys(nodeData[0])
  const csvContent = [
    headers.join(','),
    ...nodeData.map((row) =>
      headers.map((header) => JSON.stringify(row[header] || '')).join(',')
    ),
  ].join('\n')

  downloadTextFile(csvContent, `${filename}-${Date.now()}.csv`, 'text/csv')
}

/**
 * Local storage helpers
 */
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (err) {
    console.error('Error saving to localStorage:', err)
    return false
  }
}

export const loadFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch (err) {
    console.error('Error loading from localStorage:', err)
    return null
  }
}

export const clearLocalStorage = (key) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (err) {
    console.error('Error clearing localStorage:', err)
    return false
  }
}

