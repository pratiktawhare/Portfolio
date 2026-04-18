import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ mouse }) {
  const meshRef = useRef()
  const count = 60

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 20
      pos[i + 1] = (Math.random() - 0.5) * 12
      pos[i + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [])

  const speeds = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 0.002,
      y: (Math.random() - 0.5) * 0.002,
      z: (Math.random() - 0.5) * 0.001,
    }))
  }, [])

  useFrame(() => {
    if (!meshRef.current) return
    const posArray = meshRef.current.geometry.attributes.position.array

    for (let i = 0; i < count * 3; i += 3) {
      const idx = i / 3
      posArray[i] += speeds[idx].x
      posArray[i + 1] += speeds[idx].y
      posArray[i + 2] += speeds[idx].z

      // Wrap around bounds
      if (posArray[i] > 10) posArray[i] = -10
      if (posArray[i] < -10) posArray[i] = 10
      if (posArray[i + 1] > 6) posArray[i + 1] = -6
      if (posArray[i + 1] < -6) posArray[i + 1] = 6
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true

    // Mouse parallax — subtle camera offset
    if (mouse.current) {
      const cam = meshRef.current.parent
      if (cam) {
        meshRef.current.rotation.x +=
          (mouse.current.y * 0.05 - meshRef.current.rotation.x) * 0.02
        meshRef.current.rotation.y +=
          (mouse.current.x * 0.05 - meshRef.current.rotation.y) * 0.02
      }
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3b82f6"
        size={0.06}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleBackground() {
  const mouse = useRef({ x: 0, y: 0 })
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }

    const handleVisibility = () => {
      setVisible(!document.hidden)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <div
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        frameloop={visible ? 'always' : 'never'}
        style={{ background: 'transparent' }}
      >
        <Particles mouse={mouse} />
      </Canvas>
    </div>
  )
}
