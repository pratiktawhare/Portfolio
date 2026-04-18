import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => { setShow(false); setTimeout(onComplete, 400) }, 800)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-[100] flex items-center justify-center" style={{ backgroundColor: '#050505' }}>
          <span className="text-lg font-semibold tracking-wider" style={{ color: '#52525b', animation: 'loading-pulse 1s ease-in-out infinite' }}>PT</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
