import { useState } from 'react'
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
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            <span className="grad">Projects</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: 'var(--text-3)' }}>
            Things I've built and shipped
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
      style={{ maxWidth: '448px' }}
    >
      <div className="glass group overflow-hidden flex flex-col h-full">
      {/* Preview — properly constrained to match iframe scale exactly (1280*0.35 = 448w, 720*0.35 = 252h) */}
      <div
        className="w-full relative overflow-hidden flex-shrink-0 bg-black"
        style={{ height: '252px', borderBottom: '1px solid var(--border)' }}
      >
        {project.demo && !iframeError ? (
          <iframe
            src={project.demo}
            title={`${project.name} live preview`}
            className="border-0 absolute top-0 left-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
            style={{
              width: '1280px',
              height: '720px',
              transform: 'scale(0.35)',
              transformOrigin: 'top left',
              pointerEvents: 'none',
            }}
            onError={() => setIframeError(true)}
          />
        ) : (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-3);font-size:14px;font-weight:500">${project.name}</div>`
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '36px' }}>
        <div className="flex items-center" style={{ gap: '12px', marginBottom: '16px' }}>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
            {project.name}
          </h3>
          <span
            className="text-[11px] font-medium px-2.5 py-1 rounded-full"
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
          className="text-sm leading-[1.8]"
          style={{
            color: 'var(--text-2)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            marginBottom: '24px'
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap" style={{ gap: '8px', marginBottom: '24px' }}>
          {project.tech.map((t) => (
            <span key={t} className="pill" style={{ fontSize: '12px' }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center" style={{ gap: '12px' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
          >
            <FiExternalLink size={14} /> Website
          </a>
        </div>
      </div>
      </div>
    </motion.article>
  )
}
