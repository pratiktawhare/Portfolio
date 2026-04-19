import { useState, useEffect } from 'react'
import { FiHome, FiUser, FiCode, FiFolder, FiAward, FiMail, FiSun, FiMoon, FiBriefcase } from 'react-icons/fi'

const nav = [
  { icon: FiHome, href: '#hero', label: 'Home' },
  { icon: FiUser, href: '#about', label: 'About' },
  { icon: FiBriefcase, href: '#experience', label: 'Experience' },
  { icon: FiCode, href: '#skills', label: 'Skills' },
  { icon: FiFolder, href: '#projects', label: 'Projects' },
  { icon: FiAward, href: '#achievements', label: 'Achievements' },
  { icon: FiMail, href: '#contact', label: 'Contact' },
]

export default function Dock({ theme, toggleTheme }) {
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const secs = nav.map((n) => document.querySelector(n.href)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`) }),
      { rootMargin: '-30% 0px -60% 0px' }
    )
    secs.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="dock" aria-label="Navigation">
      {nav.map((n) => (
        <a key={n.href} href={n.href} className={`dock-btn ${active === n.href ? 'active' : ''}`} title={n.label} aria-label={n.label}>
          <n.icon size={17} />
        </a>
      ))}
      <div className="dock-sep" />
      <button onClick={toggleTheme} className="dock-btn" title="Toggle theme" aria-label="Toggle theme">
        {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
      </button>
    </nav>
  )
}
