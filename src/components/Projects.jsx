import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../constants/data'

export default function Projects() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            <span className="grad">Projects</span>
          </h2>
          <p className="text-sm mb-5 sm:mb-6" style={{ color: 'var(--text-3)' }}>
            Things I've built and shipped
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.name}
              project={p}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }) {
  const [iframeError, setIframeError] = useState(false)
  const containerRef = useRef(null)
  const [scale, setScale] = useState(0.35)
  const [visible, setVisible] = useState(false)

  // Lazy load: only render iframe when card scrolls into view
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { rootMargin: '200px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Dynamic scale based on container width
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div className="glass group overflow-hidden flex flex-col h-full">
      {/* Preview — aspect-video, iframe scales to fit */}
      <div
        ref={containerRef}
        className="w-full relative overflow-hidden flex-shrink-0 bg-black aspect-video"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {visible && project.demo && !iframeError && (
          <iframe
            src={project.demo}
            title={`${project.name} live preview`}
            className="border-0 absolute top-0 left-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
            style={{
              width: '1280px',
              height: '720px',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              pointerEvents: 'none',
            }}
            onError={() => setIframeError(true)}
          />
        )}
        <img
          src={project.image}
          alt={project.name}
          className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${visible && project.demo && !iframeError ? 'hidden' : ''}`}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-3);font-size:14px;font-weight:500">${project.name}</div>`
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-[36px]">
        <div className="flex flex-wrap items-center" style={{ gap: '10px', marginBottom: '12px' }}>
          <h3 className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text)' }}>
            {project.name}
          </h3>
          <span
            className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-center"
            style={{
              background: 'var(--bg-card-hover)',
              color: 'var(--text-3)',
              border: '1px solid var(--border)',
            }}
          >
            {project.label}
          </span>
        </div>

        <p
          className="text-xs sm:text-sm leading-[1.7] sm:leading-[1.8]"
          style={{
            color: 'var(--text-2)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '16px'
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap" style={{ gap: '6px', marginBottom: '16px' }}>
          {project.tech.map((t) => (
            <span key={t} className="pill" style={{ fontSize: '11px', padding: '4px 10px' }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center flex-wrap" style={{ gap: '10px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ fontSize: '12px', padding: '8px 14px' }}
          >
            <FiGithub size={13} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
            style={{ fontSize: '12px', padding: '8px 14px' }}
          >
            <FiExternalLink size={13} /> Website
          </a>
        </div>
      </div>
      </div>
    </motion.article>
  )
}
