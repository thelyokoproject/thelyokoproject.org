"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import type * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, OrbitControls, Sphere, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function Planet() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <meshStandardMaterial
        color="#ffd700"
        metalness={0.7}
        roughness={0.2}
        emissive="#ffd700"
        emissiveIntensity={0.2}
      />
    </Sphere>
  )
}

function FloatingText() {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Text3D
      ref={textRef}
      font="/fonts/Geist_Bold.json"
      size={0.5}
      height={0.1}
      curveSegments={12}
      position={[-2, 1, 0]}
    >
      LYOKO
      <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
    </Text3D>
  )
}

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="font-mono text-primary">
                v1.0.0-alpha
              </Badge>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-space"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                The Lyoko Project
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground text-xl font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Advanced hypervisor orchestration with angel processes and daemon clusters. Next-generation AI
                infrastructure for the modern age.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-4 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="font-mono">
                Deploy Hypervisor
              </Button>
              <Button size="lg" variant="outline" className="font-mono">
                Read Documentation
              </Button>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-xl font-bold font-space">{metric.value}</p>
                  <p className="text-xs text-muted-foreground font-mono">{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="h-[600px] relative">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Planet />
              <FloatingText />
              <OrbitControls enableZoom={false} />
              <Environment preset="night" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

const metrics = [
  { value: "99.99%", label: "Hypervisor Uptime" },
  { value: "1.2ms", label: "Angel Process Latency" },
  { value: "10k+", label: "Active Daemons" },
  { value: "500TB", label: "Data Processed" },
]

