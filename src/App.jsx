import { useState, useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import Dock from './components/Dock'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loaded, setLoaded] = useState(
    () => sessionStorage.getItem('portfolio-loaded') === 'true'
  )

  const handleLoadComplete = useCallback(() => {
    sessionStorage.setItem('portfolio-loaded', 'true')
    setLoaded(true)
  }, [])

  if (!loaded) return <LoadingScreen onComplete={handleLoadComplete} />

  return (
    <>
      {/* Aceternity-style dot grid */}
      <div className="dot-grid" />
      <div className="dot-mask" />

      <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <Dock theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  )
}
