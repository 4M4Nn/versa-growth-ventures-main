"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars, Line } from "@react-three/drei"
import * as THREE from "three"

const VENTURES = [
  { label: "IPB", color: "#C9A84C", angle: 0 },
  { label: "DIGITAL", color: "#8FBC5A", angle: Math.PI / 3 },
  { label: "GLOBAL", color: "#4A7C59", angle: (2 * Math.PI) / 3 },
  { label: "ELYRA", color: "#00D4C8", angle: Math.PI },
  { label: "TRADING", color: "#E8C96A", angle: (4 * Math.PI) / 3 },
  { label: "EXPORTS", color: "#A8B89A", angle: (5 * Math.PI) / 3 },
]

function CoreSphere() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.3
  })
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial color="#4A7C59" emissive="#2A5040" emissiveIntensity={0.8} roughness={0.2} metalness={0.6} />
    </mesh>
  )
}

function OrbitingNode({ angle, color, speed = 1 }: { angle: number; color: string; speed?: number }) {
  const group = useRef<THREE.Group>(null)
  const RADIUS = 2.2

  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime() * speed * 0.4
    group.current.rotation.y = t
  })

  return (
    <group ref={group}>
      <mesh position={[RADIUS, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
      </mesh>
    </group>
  )
}

function OrbitRing({ color }: { color: string }) {
  const points = useMemo(() => {
    const pts: [number, number, number][] = []
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2
      pts.push([Math.cos(a) * 2.2, 0, Math.sin(a) * 2.2])
    }
    return pts
  }, [])
  return <Line points={points} color={color} lineWidth={0.5} transparent opacity={0.2} />
}

function Scene() {
  const { camera } = useThree()
  camera.position.set(0, 1.5, 6)

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#C9A84C" />
      <pointLight position={[3, 3, 3]} intensity={0.5} color="#4A7C59" />
      <Stars radius={30} depth={10} count={600} factor={3} fade speed={0.5} />
      <CoreSphere />
      <OrbitRing color="#C9A84C" />
      {VENTURES.map((v, i) => (
        <OrbitingNode key={i} angle={v.angle} color={v.color} speed={0.7 + i * 0.05} />
      ))}
    </>
  )
}

export default function OrbitalSystem() {
  return (
    <div className="w-full h-full" style={{ minHeight: 500 }}>
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 1.5, 6], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
