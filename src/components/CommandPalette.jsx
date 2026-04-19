import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiHome, FiUser, FiCode, FiFolder, FiAward, FiMail, FiDownload, FiGithub, FiLinkedin, FiX } from 'react-icons/fi'
import { SiLeetcode, SiX as SiXIcon } from 'react-icons/si'

const actions = [
  { id: 'home', label: 'Go to Home', icon: FiHome, action: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }), group: 'Navigation' },
  { id: 'about', label: 'Go to About', icon: FiUser, action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), group: 'Navigation' },
  { id: 'experience', label: 'Go to Experience', icon: FiAward, action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), group: 'Navigation' },
  { id: 'skills', label: 'Go to Tech Stack', icon: FiCode, action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), group: 'Navigation' },
  { id: 'projects', label: 'Go to Projects', icon: FiFolder, action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), group: 'Navigation' },
  { id: 'achievements', label: 'Go to Achievements', icon: FiAward, action: () => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }), group: 'Navigation' },
  { id: 'contact', label: 'Go to Contact', icon: FiMail, action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), group: 'Navigation' },
  { id: 'resume', label: 'Download Resume', icon: FiDownload, action: () => window.open('/resume/Resume_V4.pdf', '_blank'), group: 'Actions' },
  { id: 'github', label: 'Open GitHub', icon: FiGithub, action: () => window.open('https://github.com/pratiktawhare', '_blank'), group: 'Social' },
  { id: 'linkedin', label: 'Open LinkedIn', icon: FiLinkedin, action: () => window.open('https://linkedin.com/in/pratik-tawhare', '_blank'), group: 'Social' },
  { id: 'leetcode', label: 'Open LeetCode', icon: SiLeetcode, action: () => window.open('https://leetcode.com/u/pratik-tawhare/', '_blank'), group: 'Social' },
  { id: 'x', label: 'Open X (Twitter)', icon: SiXIcon, action: () => window.open('https://x.com/Pratik_2005_', '_blank'), group: 'Social' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(0)
  const inputRef = useRef(null)

  // Keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  // Focus input on open
  useEffect(() => {
    if (open) {
      setQuery('')
      setSelectedIdx(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const filtered = useMemo(() => {
    if (!query) return actions
    const q = query.toLowerCase()
    return actions.filter(
      (a) => a.label.toLowerCase().includes(q) || a.group.toLowerCase().includes(q)
    )
  }, [query])

  // Reset selection when filtered changes
  useEffect(() => {
    setSelectedIdx(0)
  }, [filtered])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIdx((i) => (i + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIdx((i) => (i - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter' && filtered[selectedIdx]) {
      filtered[selectedIdx].action()
      setOpen(false)
    }
  }

  const runAction = (action) => {
    action.action()
    setOpen(false)
  }

  // Group filtered items
  const grouped = useMemo(() => {
    const groups = {}
    filtered.forEach((a) => {
      if (!groups[a.group]) groups[a.group] = []
      groups[a.group].push(a)
    })
    return groups
  }, [filtered])

  let flatIdx = -1

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[300] flex items-start justify-center pt-[20vh]"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-[90vw] max-w-[520px] rounded-2xl overflow-hidden"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border-h)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
              <FiSearch size={18} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search actions..."
                className="w-full bg-transparent border-none outline-none text-sm font-medium"
                style={{ color: 'var(--text)', fontFamily: 'inherit' }}
              />
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-card)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto py-2 px-2">
              {filtered.length === 0 && (
                <p className="text-sm text-center py-8" style={{ color: 'var(--text-3)' }}>No results found</p>
              )}
              {Object.entries(grouped).map(([group, items]) => (
                <div key={group}>
                  <p className="text-[10px] uppercase tracking-widest font-semibold px-3 py-2" style={{ color: 'var(--text-3)' }}>
                    {group}
                  </p>
                  {items.map((item) => {
                    flatIdx++
                    const isSelected = flatIdx === selectedIdx
                    const idx = flatIdx
                    return (
                      <button
                        key={item.id}
                        onClick={() => runAction(item)}
                        onMouseEnter={() => setSelectedIdx(idx)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left cursor-pointer border-none"
                        style={{
                          background: isSelected ? 'var(--bg-card-hover)' : 'transparent',
                          color: isSelected ? 'var(--text)' : 'var(--text-2)',
                          fontFamily: 'inherit',
                          transition: 'background 0.1s',
                        }}
                      >
                        <item.icon size={16} style={{ flexShrink: 0, color: isSelected ? 'var(--accent)' : 'var(--text-3)' }} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center gap-4 px-5 py-3" style={{ borderTop: '1px solid var(--border)' }}>
              <span className="text-[10px] flex items-center gap-1" style={{ color: 'var(--text-3)' }}>
                <kbd className="font-mono px-1 py-0.5 rounded" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', fontSize: '9px' }}>↑↓</kbd>
                navigate
              </span>
              <span className="text-[10px] flex items-center gap-1" style={{ color: 'var(--text-3)' }}>
                <kbd className="font-mono px-1 py-0.5 rounded" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', fontSize: '9px' }}>↵</kbd>
                select
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
