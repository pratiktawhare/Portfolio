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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            <span className="grad">Achievements</span>
          </h2>
          <p className="text-sm mb-5 sm:mb-6" style={{ color: 'var(--text-3)' }}>
            Milestones & recognition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -16, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div 
                className="glass flex items-start h-full p-4 sm:p-6 md:p-[28px]"
                style={{ gap: '14px' }}
              >
              <span className="text-xl sm:text-2xl flex-shrink-0" style={{ marginTop: '2px' }}>{a.icon}</span>
              <div className="min-w-0">
                <h3
                  className="text-sm sm:text-base font-semibold"
                  style={{ color: 'var(--text)', marginBottom: '4px' }}
                >
                  {a.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>
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
