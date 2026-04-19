import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { personalInfo, socialLinks, currentlyBuilding } from '../constants/data'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center" style={{ minHeight: '100vh', paddingTop: '60px' }}>
      {/* Subtle radial glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] pointer-events-none opacity-60" style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08), transparent 70%)', filter: 'blur(60px)' }} />

      <div className="wrap relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col order-2 lg:order-1">
            <motion.h1 {...fade(0)} className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6">
              Hi, I'm <span className="grad">{personalInfo.name.split(' ')[0]}</span>.
            </motion.h1>

            <motion.p {...fade(0.1)} className="text-sm sm:text-base md:text-lg max-w-xl leading-[1.8]" style={{ color: 'var(--text-2)', marginBottom: '20px' }}>
              {personalInfo.title} — crafting high-performance web applications with clean architecture, AI integrations, and production-ready DevOps pipelines.
            </motion.p>

            {/* Status badges */}
            <motion.div {...fade(0.2)} className="flex flex-wrap items-center gap-2 sm:gap-3" style={{ marginBottom: '24px' }}>
              <span className="inline-flex items-center gap-2 sm:gap-3 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide uppercase" style={{ padding: '5px 14px', background: 'var(--bg-card)', color: 'var(--text-2)', border: '1px solid var(--border)' }}>
                <span className="w-2 h-2 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: '#22c55e', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                <span>Available for opportunities</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide" style={{ padding: '5px 14px', background: 'var(--bg-card)', color: 'var(--text-2)', border: '1px solid var(--border)' }}>
                {currentlyBuilding.emoji} {currentlyBuilding.project}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.3)} className="flex flex-wrap items-center" style={{ gap: '12px', marginBottom: '24px' }}>
              <a href="#projects" className="btn btn-accent" style={{ padding: '12px 20px', fontSize: '13px', borderRadius: '12px' }}><FiArrowRight size={15} /> View Projects</a>
              <a href="/resume/Resume_V4.pdf" target="_blank" className="btn" style={{ padding: '12px 20px', fontSize: '13px', borderRadius: '12px' }}><FiDownload size={15} /> Resume</a>
            </motion.div>

            {/* Socials */}
            <motion.div {...fade(0.4)} className="flex items-center flex-wrap" style={{ gap: '10px' }}>
              {socialLinks.slice(0, 5).map((s) => (
                <a key={s.name} href={s.url} target={s.url.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" title={s.name} className="dock-btn hover-lift" style={{ width: 40, height: 40, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }} aria-label={s.name}>
                  <s.icon size={16} />
                </a>
              ))}
            </motion.div>

            {/* Keyboard shortcut hint */}
            <motion.div {...fade(0.5)} className="mt-6 hidden sm:flex items-center gap-2">
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-card)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>
                Ctrl+K
              </kbd>
              <span className="text-[11px]" style={{ color: 'var(--text-3)' }}>Quick navigation</span>
            </motion.div>
          </div>

          {/* Right: Large Photo */}
          <motion.div {...fade(0.2)} className="order-1 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 mix-blend-overlay z-10 pointer-events-none" />
              <img src="/images/profile.jpg" alt={personalInfo.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]" loading="eager"
                onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML='<span style="font-size:32px;display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-3);font-weight:700">PT</span>' }} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
