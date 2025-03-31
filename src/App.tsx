import Header from './components/Header'
import Education from './components/Education'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Activities from './components/Activities'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeToggle />
      {/* Hero section with gradient fade */}
      <div className="bg-gradient-to-b from-[#703c3c] to-white dark:to-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>

      {/* Main content with subtle gradient transitions */}
      <div className="bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Projects />
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <WorkExperience />
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Education />
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 via-gray-50 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Skills />
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Activities />
        </div>
      </div>
    </div>
  );
}

export default App;
