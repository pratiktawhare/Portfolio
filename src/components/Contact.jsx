import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personalInfo } from '../constants/data'

export default function Contact({ onToast }) {
  const formRef = useRef()
  const { ref, isInView } = useScrollAnimation()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    const formData = new FormData(formRef.current)
    const data = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('success')
      formRef.current.reset()
      onToast?.({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      onToast?.({ type: 'error', message: 'Failed to send. Please try again or email directly.' })
      setTimeout(() => setStatus('idle'), 3000)
    }
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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Get In <span className="grad">Touch</span>
          </h2>
          <p className="text-sm mb-5 sm:mb-6" style={{ color: 'var(--text-3)' }}>
            Let's work together
          </p>

          {/* Two-column layout: info + form side by side */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {/* Info column — 2/5 */}
            <div className="md:col-span-2 glass flex flex-col gap-6 sm:gap-8 p-4 sm:p-6 md:p-[40px]">
              <div>
                <p
                  className="text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-2"
                  style={{ color: 'var(--text-3)' }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-medium break-all"
                  style={{ color: 'var(--text)' }}
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p
                  className="text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-2"
                  style={{ color: 'var(--text-3)' }}
                >
                  Location
                </p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {personalInfo.location}
                </p>
              </div>
              <div>
                <p
                  className="text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-2"
                  style={{ color: 'var(--text-3)' }}
                >
                  Status
                </p>
                <span
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium"
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
            <div className="md:col-span-3 glass p-4 sm:p-6 md:p-[40px]">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" style={{ marginBottom: '16px' }}>
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
                  rows={4}
                  required
                  className="form-input resize-none"
                  aria-label="Your message"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-accent"
                >
                  <FiSend size={13} /> {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
