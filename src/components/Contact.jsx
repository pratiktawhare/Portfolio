import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiSend } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personalInfo } from '../constants/data'

export default function Contact() {
  const formRef = useRef()
  const { ref, isInView } = useScrollAnimation()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'demo',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'demo',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo'
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const txt = {
    idle: 'Send Message',
    sending: 'Sending...',
    success: 'Sent ✓',
    error: 'Failed. Retry',
  }

  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            Get In <span className="grad">Touch</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: 'var(--text-3)' }}>
            Let's work together
          </p>

          {/* Two-column layout: info + form side by side */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Info column — 2/5 */}
            <div className="md:col-span-2 glass flex flex-col gap-8" style={{ padding: '40px' }}>
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-medium mb-2"
                  style={{ color: 'var(--text-3)' }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-medium break-all"
                  style={{ color: 'var(--text)' }}
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-medium mb-2"
                  style={{ color: 'var(--text-3)' }}
                >
                  Location
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {personalInfo.location}
                </p>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-medium mb-2"
                  style={{ color: 'var(--text-3)' }}
                >
                  Status
                </p>
                <span
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: 'var(--text)' }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: '#22c55e',
                      animation: 'pulse-dot 2s ease-in-out infinite',
                    }}
                  />
                  Open to Work
                </span>
              </div>
            </div>

            {/* Form column — 3/5 */}
            <div className="md:col-span-3 glass" style={{ padding: '40px' }}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: '20px' }}>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="form-input"
                    aria-label="Your name"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="form-input"
                    aria-label="Your email"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="form-input resize-none"
                  aria-label="Your message"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`btn ${
                    status === 'success'
                      ? ''
                      : status === 'error'
                        ? ''
                        : 'btn-accent'
                  }`}
                  style={
                    status === 'success'
                      ? {
                          background: '#22c55e',
                          borderColor: '#22c55e',
                          color: '#fff',
                        }
                      : status === 'error'
                        ? {
                            background: '#ef4444',
                            borderColor: '#ef4444',
                            color: '#fff',
                          }
                        : {}
                  }
                >
                  <FiSend size={13} /> {txt[status]}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
