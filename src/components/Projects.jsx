import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiLayers, FiCpu } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../constants/data'

const categories = ['All', 'AI & Agents', 'Full-Stack']

export default function Projects() {
  const { ref, isInView } = useScrollAnimation()
  const [activeTab, setActiveTab] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects
    if (activeTab === 'AI & Agents') {
      return projects.filter(
        (p) =>
          p.category === 'AI / Agents' ||
          p.tech.some((t) =>
            ['LangGraph', 'LangChain', 'ChromaDB', 'Whisper', 'Gemini', 'Transformers.js'].some((k) =>
              t.includes(k)
            )
          )
      )
    }
    if (activeTab === 'Full-Stack') {
      return projects.filter(
        (p) =>
          p.category === 'Full-Stack' ||
          p.tech.some((t) =>
            ['FastAPI', 'Node.js', 'Express', 'React', 'MongoDB', 'PostgreSQL'].some((k) =>
              t.includes(k)
            )
          )
      )
    }
    return projects
  }, [activeTab])

  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Featured <span className="grad">Projects</span>
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>
                Production-grade Agentic AI systems, RAG pipelines, and full-stack applications
              </p>
            </div>

            {/* Category Filter Pills */}
            <div
              className="inline-flex p-1 rounded-xl glass border self-start sm:self-auto"
              style={{ borderColor: 'var(--border)' }}
            >
              {categories.map((cat) => {
                const isActive = activeTab === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className="relative px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    style={{
                      color: isActive ? 'var(--text)' : 'var(--text-3)',
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProjectTab"
                        className="absolute inset-0 rounded-lg shadow-sm"
                        style={{
                          background: 'var(--bg-card-hover)',
                          border: '1px solid var(--border)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <ProjectCard
                key={p.name}
                project={p}
                index={i}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }) {
  const [iframeError, setIframeError] = useState(false)
  const [showLiveEmbed, setShowLiveEmbed] = useState(false)
  const containerRef = useRef(null)
  const [scale, setScale] = useState(0.35)

  // Dynamic scale calculation for responsive iframe preview
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width
        if (w > 0) setScale(w / 1280)
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const isAi =
    project.category === 'AI / Agents' ||
    project.tech.some((t) =>
      ['LangGraph', 'LangChain', 'ChromaDB', 'Whisper', 'Gemini', 'Transformers.js'].some((k) =>
        t.includes(k)
      )
    )

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="w-full"
    >
      <div className="glass group overflow-hidden flex flex-col h-full rounded-2xl border" style={{ borderColor: 'var(--border)' }}>
        
        {/* Preview Container — aspect-video */}
        <div
          ref={containerRef}
          className="w-full relative overflow-hidden flex-shrink-0 bg-black aspect-video select-none"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          {/* Interactive Live Embed Mode */}
          {showLiveEmbed && project.demo && !iframeError ? (
            <iframe
              src={project.demo}
              title={`${project.name} live preview`}
              className="border-0 absolute top-0 left-0 w-[1280px] h-[720px]"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              onError={() => setIframeError(true)}
            />
          ) : (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none'
                if (e.target.parentElement) {
                  e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-3);font-size:14px;font-weight:600">${project.name}</div>`
                }
              }}
            />
          )}

          {/* Top badges over preview */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-auto">
            {isAi ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide backdrop-blur-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                <FiCpu size={12} className="text-cyan-400" /> AI / Agentic System
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide backdrop-blur-md bg-blue-950/80 text-blue-300 border border-blue-500/30">
                <FiLayers size={12} className="text-blue-400" /> Full-Stack Architecture
              </span>
            )}

            {/* Optional embed toggle */}
            {project.demo && (
              <button
                type="button"
                onClick={() => setShowLiveEmbed(!showLiveEmbed)}
                className="text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
                style={{
                  background: showLiveEmbed ? 'rgba(34,197,94,0.2)' : 'rgba(0,0,0,0.5)',
                  color: showLiveEmbed ? '#4ade80' : 'var(--text-3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {showLiveEmbed ? 'Exit Live' : 'Interactive View'}
              </button>
            )}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
          <div>
            {/* Header: Title + Subtitle */}
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <h3 className="text-base sm:text-lg font-bold tracking-tight" style={{ color: 'var(--text)' }}>
                {project.name}
              </h3>
              <span
                className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: 'var(--bg-card-hover)',
                  color: 'var(--text-2)',
                  border: '1px solid var(--border)',
                }}
              >
                {project.label}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-xs sm:text-[13px] leading-[1.7] mb-4"
              style={{
                color: 'var(--text-2)',
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.description}
            </p>
          </div>

          <div>
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="pill"
                  style={{
                    fontSize: '11px',
                    padding: '3px 9px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex-1 sm:flex-none justify-center"
                style={{ fontSize: '12px', padding: '8px 14px' }}
              >
                <FiGithub size={13} /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent flex-1 sm:flex-none justify-center"
                style={{ fontSize: '12px', padding: '8px 16px' }}
              >
                <FiExternalLink size={13} /> Live Demo
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.article>
  )
}
