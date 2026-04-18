import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills } from '../constants/data'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}
const pop = {
  hidden: { opacity: 0, y: 16, scale: 0.95, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Skills() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="skills" className="sec">
      <div className="wrap">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Tech <span className="grad">Stack</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: 'var(--text-3)' }}>
            Technologies I work with daily
          </p>
        </motion.div>

        {/* Category cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {skills.map((cat) => (
            <motion.div key={cat.category} variants={pop}>
              <div className="glass h-full" style={{ padding: '40px' }}>
              {/* Category label */}
              <h3
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: 'var(--text-3)', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '20px' }}
              >
                {cat.category}
              </h3>

              {/* Skill items */}
              <div className="flex flex-wrap gap-3">
                {cat.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={pop}
                    className="skill-card"
                  >
                    <div className="icon-wrap">
                      <skill.icon size={16} />
                    </div>
                    <span
                      className="text-[13px] font-medium"
                      style={{ color: 'var(--text)' }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
