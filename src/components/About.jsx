import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personalInfo, stats } from '../constants/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Stat({ stat }) {
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    if (!ref.current) return
    const t = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        if (done.current) return
        done.current = true
        const o = { v: 0 }
        gsap.to(o, {
          v: stat.value,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            ref.current.textContent =
              stat.decimals > 0 ? o.v.toFixed(stat.decimals) : Math.floor(o.v)
          },
        })
      },
    })
    return () => t.kill()
  }, [stat])

  return (
    <div className="text-center py-6 px-4">
      <div className="flex items-baseline justify-center gap-1 mb-1.5">
        <span
          ref={ref}
          className="text-2xl font-bold"
          style={{ color: 'var(--text)' }}
        >
          0
        </span>
        <span className="text-sm font-medium" style={{ color: 'var(--text-3)' }}>
          {stat.suffix}
        </span>
      </div>
      <p
        className="text-[11px] uppercase tracking-widest font-medium"
        style={{ color: 'var(--text-3)' }}
      >
        {stat.label}
      </p>
    </div>
  )
}

export default function About() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about" className="sec">
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            About <span className="grad">Me</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: 'var(--text-3)' }}>
            A quick intro
          </p>

          {/* Bio card */}
          <div className="glass" style={{ padding: '56px', marginBottom: '24px' }}>
            <p
              className="text-[15px] leading-[2] max-w-3xl"
              style={{ color: 'var(--text-2)' }}
            >
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-3" style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
              {[
                `📍 ${personalInfo.location}`,
                `🎓 ${personalInfo.education}`,
              ].map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="glass grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  borderRight:
                    i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <Stat stat={s} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
