import { Sun, Moon, Palette, Check } from 'lucide-react'
import useStore from '../store/useStore'

const ThemeDemo = () => {
  const { theme, toggleTheme } = useStore()

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl w-full mx-8">
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-6 transition-all">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
              <Palette className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Theme System Active! 🎨
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Click the toggle button to switch between light and dark mode
            </p>
          </div>

          {/* Theme Toggle Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={toggleTheme}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-6 h-6" />
                  <span className="font-semibold text-lg">Switch to Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-6 h-6" />
                  <span className="font-semibold text-lg">Switch to Light Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Current Theme Display */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  theme === 'light' 
                    ? 'bg-yellow-100 text-yellow-600' 
                    : 'bg-indigo-900 text-indigo-300'
                }`}>
                  {theme === 'light' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Current Theme</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                    {theme} Mode
                  </p>
                </div>
              </div>
              <Check className="w-8 h-8 text-green-500" />
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              ✨ Theme Features:
            </h3>
            {[
              'Automatic persistence (saved to localStorage)',
              'Smooth transitions between modes',
              'All components theme-aware',
              'Sidebar, toolbars, and canvases adapt',
              'Custom scrollbar styling',
              'Toggle from sidebar anytime'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6">
          <p className="text-sm text-indigo-900 dark:text-indigo-200 text-center">
            <strong>💡 Tip:</strong> The theme toggle is also available in the sidebar. 
            Your preference is saved and will persist across sessions!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThemeDemo

