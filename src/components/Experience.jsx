import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experience } from '../constants/data'

export default function Experience() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="experience" className="sec">
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            <span className="grad">Experience</span>
          </h2>
          <p className="text-sm mb-5 sm:mb-6" style={{ color: 'var(--text-3)' }}>
            My journey so far
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[2px]"
            style={{ background: 'var(--border)' }}
          />

          <div className="flex flex-col gap-6 sm:gap-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1.5 w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: 'var(--bg)',
                    border: '2px solid var(--accent)',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                </div>

                <div className="glass p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-lg sm:text-xl">{item.icon}</span>
                    <h3 className="text-sm sm:text-base font-semibold" style={{ color: 'var(--text)' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-medium mb-1" style={{ color: 'var(--accent)' }}>
                    {item.org}
                  </p>
                  <p className="text-[11px] sm:text-xs mb-3" style={{ color: 'var(--text-3)' }}>
                    {item.period}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
