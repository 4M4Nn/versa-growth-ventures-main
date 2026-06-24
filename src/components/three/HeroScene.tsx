"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, Stars } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })
  return (
    <Sphere ref={meshRef} args={[1.2, 32, 32]}>
      <meshStandardMaterial color="#4A7C59" wireframe={false} roughness={0.3} metalness={0.6} />
    </Sphere>
  )
}

function OrbitingSpheres() {
  const groupRef = useRef<THREE.Group>(null)
  const colors = ["#C9A84C", "#00D4FF", "#4A7C59", "#6E44FF", "#8FBC5A", "#C9A84C"]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {colors.map((color, i) => {
        const angle = (i / colors.length) * Math.PI * 2
        const radius = 3.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(angle * 2) * 0.5
        return (
          <group key={i} position={[x, y, z]}>
            <Sphere args={[0.25, 16, 16]}>
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </Sphere>
          </group>
        )
      })}
    </group>
  )
}

function Scene() {
  const { mouse } = useThree()
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += (mouse.y * 0.1 - groupRef.current.rotation.x) * 0.05
      groupRef.current.rotation.y += (mouse.x * 0.1 - groupRef.current.rotation.y) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <CentralSphere />
      <OrbitingSpheres />
      <Stars radius={50} depth={50} count={800} factor={4} saturation={0} fade />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#8FBC5A" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#C9A84C" />
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <Scene />
      <EffectComposer>
        <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} intensity={0.5} />
      </EffectComposer>
    </Canvas>
  )
}
