import { useState, useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import Dock from './components/Dock'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import CommandPalette from './components/CommandPalette'
import CustomCursor from './components/CustomCursor'
import Toast from './components/Toast'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loaded, setLoaded] = useState(
    () => sessionStorage.getItem('portfolio-loaded') === 'true'
  )
  const [toast, setToast] = useState(null)

  const handleLoadComplete = useCallback(() => {
    sessionStorage.setItem('portfolio-loaded', 'true')
    setLoaded(true)
  }, [])

  const showToast = useCallback((t) => {
    setToast(t)
    setTimeout(() => setToast(null), 4000)
  }, [])

  if (!loaded) return <LoadingScreen onComplete={handleLoadComplete} />

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />

      {/* Aceternity-style dot grid */}
      <div className="dot-grid" />
      <div className="dot-mask" />

      <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Contact onToast={showToast} />
        </main>
        <Footer />
        <Dock theme={theme} toggleTheme={toggleTheme} />
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
      <ScrollToTop />
    </>
  )
}
