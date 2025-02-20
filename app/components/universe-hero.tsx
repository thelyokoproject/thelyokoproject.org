"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, OrbitControls } from "@react-three/drei"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Network } from "lucide-react"
import * as THREE from "three"

// Memoized calculation of node connections
const useNodeConnections = (numPoints: number, maxDistance: number) => {
  return useMemo(() => {
    const points = []
    const connections = []

    // Generate points
    for (let i = 0; i < numPoints; i++) {
      const x = (Math.random() - 0.5) * 2
      const y = (Math.random() - 0.5) * 2
      const z = (Math.random() - 0.5) * 2
      points.push(new THREE.Vector3(x, y, z))
    }

    // Generate connections
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < maxDistance) {
          connections.push(points[i].clone())
          connections.push(points[j].clone())
        }
      }
    }

    return {
      points: new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])),
      connections: new Float32Array(connections.flatMap((p) => [p.x, p.y, p.z])),
    }
  }, [numPoints, maxDistance])
}

function NodeConnections({ numPoints = 100, maxDistance = 0.5 }) {
  const linesRef = useRef<THREE.LineSegments>(null)
  const pointsRef = useRef<THREE.Points>(null)

  const { points, connections } = useNodeConnections(numPoints, maxDistance)

  useFrame((state) => {
    if (linesRef.current && pointsRef.current) {
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
      linesRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.1) * 0.2
      pointsRef.current.rotation.x = linesRef.current.rotation.x
      pointsRef.current.rotation.y = linesRef.current.rotation.y
    }
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={4} color="#ffd700" sizeAttenuation={false} transparent opacity={0.8} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffd700" transparent opacity={0.2} />
      </lineSegments>
    </group>
  )
}

function StarField({ count = 5000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      p[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      p[i * 3 + 2] = radius * Math.cos(phi)
    }
    return p
  }, [count])

  const ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#ffd700" size={0.002} sizeAttenuation={true} depthWrite={false} />
    </Points>
  )
}

export function UniverseHero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <StarField />
          <NodeConnections />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="grid gap-6 items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/50 to-primary-foreground">
            Project Lyoko
            <br />
            <span className="text-2xl sm:text-3xl xl:text-4xl text-muted-foreground">The Super Internet</span>
          </h1>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl font-mono">
            A quantum neural network powering the next generation of digital consciousness
          </p>

          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg" className="liquid-button-enhanced gap-2">
              <Brain className="w-5 h-5" />
              Initialize Neural Link
            </Button>
            <Button size="lg" variant="outline" className="liquid-button-outline-enhanced gap-2">
              <Network className="w-5 h-5" />
              Access Documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

