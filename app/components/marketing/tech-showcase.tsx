"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere } from "@react-three/drei"
import { Brain, Cpu, Network, Lock, Atom, Fingerprint } from "lucide-react"
import type * as THREE from "three"

function QuantumSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
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

export function TechShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-space">
            Quantum Neural Technology
          </h2>
          <p className="mt-4 text-muted-foreground font-mono">
            Experience the convergence of quantum computing and neural networks
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              style={{ y }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 neo-gradient h-full overflow-hidden group">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <QuantumSphere />
                    <OrbitControls enableZoom={false} />
                  </Canvas>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <tech.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-space">{tech.name}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 font-mono">{tech.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.capabilities.map((capability) => (
                      <Badge key={capability} variant="outline" className="font-mono">
                        {capability}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    {tech.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-bold text-space">{metric.value}</div>
                        <div className="text-sm text-muted-foreground font-mono">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const technologies = [
  {
    name: "Quantum Processing Core",
    description: "Advanced quantum computing architecture with neural network integration",
    icon: Cpu,
    capabilities: ["Quantum Entanglement", "Neural Processing", "Quantum Error Correction"],
    metrics: [
      { label: "Processing Power", value: "1.2 YF/s" },
      { label: "Quantum Bits", value: "1M+" },
    ],
  },
  {
    name: "Neural Synthesis Engine",
    description: "Bio-inspired neural architecture for advanced cognitive processing",
    icon: Brain,
    capabilities: ["Pattern Recognition", "Cognitive Synthesis", "Neural Mapping"],
    metrics: [
      { label: "Neural Density", value: "845T/cm³" },
      { label: "Synapse Speed", value: "0.1ps" },
    ],
  },
  {
    name: "Quantum Network Fabric",
    description: "Distributed quantum computing network with real-time synchronization",
    icon: Network,
    capabilities: ["Quantum Routing", "Neural Sync", "Distributed Processing"],
    metrics: [
      { label: "Network Speed", value: "100TB/s" },
      { label: "Node Count", value: "10K+" },
    ],
  },
  {
    name: "Quantum Security Core",
    description: "Military-grade quantum encryption and security protocols",
    icon: Lock,
    capabilities: ["Quantum Encryption", "Neural Firewall", "Threat Detection"],
    metrics: [
      { label: "Encryption Strength", value: "1024Q" },
      { label: "Response Time", value: "0.1ms" },
    ],
  },
  {
    name: "Atomic Memory Matrix",
    description: "Quantum state memory system with atomic-level storage",
    icon: Atom,
    capabilities: ["Quantum Storage", "State Preservation", "Instant Recall"],
    metrics: [
      { label: "Storage Capacity", value: "100PB" },
      { label: "Access Speed", value: "1ps" },
    ],
  },
  {
    name: "Neural Authentication",
    description: "Advanced biometric system with quantum neural verification",
    icon: Fingerprint,
    capabilities: ["Biometric Sync", "Neural Pattern", "Quantum Verification"],
    metrics: [
      { label: "Accuracy Rate", value: "99.99%" },
      { label: "Verify Speed", value: "1ms" },
    ],
  },
]

