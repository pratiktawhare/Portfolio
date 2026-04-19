import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi'

export default function Toast({ toast, onClose }) {
  if (!toast) return null

  const isSuccess = toast.type === 'success'

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-20 sm:bottom-6 left-1/2 z-[150] flex items-center gap-3 px-5 py-3.5 rounded-xl"
          style={{
            transform: 'translateX(-50%)',
            background: isSuccess ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            border: `1px solid ${isSuccess ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
            backdropFilter: 'blur(20px)',
            color: isSuccess ? '#4ade80' : '#f87171',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          {isSuccess ? <FiCheckCircle size={18} /> : <FiAlertCircle size={18} />}
          <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
            {toast.message}
          </span>
          <button
            onClick={onClose}
            className="ml-2 cursor-pointer border-none bg-transparent"
            style={{ color: 'var(--text-3)' }}
            aria-label="Close"
          >
            <FiX size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
