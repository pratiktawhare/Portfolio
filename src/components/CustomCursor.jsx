import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only on desktop (no touch)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    const move = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    let raf
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 16}px, ${pos.current.y - 16}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      cancelAnimationFrame(raf)
    }
  }, [visible])

  // Don't render on touch/mobile
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: '1.5px solid var(--accent)',
        opacity: visible ? 0.5 : 0,
        transition: 'opacity 0.3s',
        mixBlendMode: 'difference',
      }}
    />
  )
}
