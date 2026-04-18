import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { achievements } from '../constants/data'

export default function Achievements() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="achievements" className="sec">
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            <span className="grad">Achievements</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: 'var(--text-3)' }}>
            Milestones & recognition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -16, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div 
                className="glass flex items-start h-full"
                style={{ padding: '28px', gap: '20px' }}
              >
              <span className="text-2xl flex-shrink-0" style={{ marginTop: '2px' }}>{a.icon}</span>
              <div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: 'var(--text)', marginBottom: '6px' }}
                >
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>
                  {a.detail}
                </p>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
