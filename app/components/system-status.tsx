"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Brain, Cpu, Network, Share2, GitBranch, Fingerprint } from "lucide-react"

export function SystemStatus() {
  const [clusters, setClusters] = useState(initialClusters)
  const [cognitiveLoad, setCognitiveLoad] = useState(0)
  const [neuralSync, setNeuralSync] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setClusters((prev) =>
        prev.map((cluster) => ({
          ...cluster,
          status: Math.random() > 0.05 ? "operational" : "optimizing",
          load: Math.min(100, Math.max(0, cluster.load + (Math.random() - 0.5) * 10)),
          latency: Math.min(200, Math.max(10, cluster.latency + (Math.random() - 0.5) * 20)),
          coherence: Math.min(100, Math.max(80, cluster.coherence + (Math.random() - 0.5) * 5)),
        })),
      )
      setCognitiveLoad((prev) => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 15)))
      setNeuralSync((prev) => Math.min(100, Math.max(0, prev + (Math.random() - 0.5) * 10)))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-space">Cognitive Systems Status</h2>
            <Badge variant="outline" className="font-mono">
              Real-time Monitoring
            </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clusters.map((cluster, index) => (
              <motion.div
                key={cluster.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 space-y-4 glass">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <cluster.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-space">{cluster.name}</h3>
                    </div>
                    <Badge
                      variant={cluster.status === "operational" ? "default" : "secondary"}
                      className="font-mono animate-pulse"
                    >
                      {cluster.status}
                    </Badge>
                  </div>

                  <TooltipProvider>
                    <div className="space-y-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-mono">Neural Load</span>
                              <span className="font-mono">{cluster.load.toFixed(1)}%</span>
                            </div>
                            <Progress value={cluster.load} />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-mono">Neural processing load</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-mono">Quantum Coherence</span>
                              <span className="font-mono">{cluster.coherence.toFixed(1)}%</span>
                            </div>
                            <Progress value={cluster.coherence} className="bg-primary/20" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-mono">Quantum state stability</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>

                  <div className="pt-4 border-t grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground font-mono">Cognitive Threads</p>
                      <p className="font-semibold font-space">{cluster.threads.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-mono">Memory Shards</p>
                      <p className="font-semibold font-space">{cluster.shards.toLocaleString()}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Meta-Cognitive Analytics */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 glass">
              <h3 className="font-semibold mb-4 text-space">Neural Synchronization</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm">Cognitive Load</span>
                  </div>
                  <span className="font-mono text-sm">{cognitiveLoad.toFixed(1)}%</span>
                </div>
                <Progress value={cognitiveLoad} className="h-2" />
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="text-muted-foreground font-mono">Active Neurons</p>
                    <p className="font-semibold font-space">1.2T</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground font-mono">Synaptic Speed</p>
                    <p className="font-semibold font-space">8.5P/s</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground font-mono">Memory Pool</p>
                    <p className="font-semibold font-space">42Z</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass">
              <h3 className="font-semibold mb-4 text-space">Quantum Entanglement</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Network className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm">Neural Sync</span>
                  </div>
                  <span className="font-mono text-sm">{neuralSync.toFixed(1)}%</span>
                </div>
                <Progress value={neuralSync} className="h-2" />
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="text-muted-foreground font-mono">Qubits</p>
                    <p className="font-semibold font-space">4.2M</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground font-mono">Coherence</p>
                    <p className="font-semibold font-space">99.99%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground font-mono">Error Rate</p>
                    <p className="font-semibold font-space">10^-15</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

const initialClusters = [
  {
    name: "Cognitive Core Alpha",
    icon: Brain,
    status: "operational",
    load: 65,
    latency: 45,
    coherence: 92,
    threads: 1_234_567,
    shards: 89_012,
  },
  {
    name: "Quantum Nexus Beta",
    icon: Cpu,
    status: "operational",
    load: 78,
    latency: 32,
    coherence: 95,
    threads: 2_345_678,
    shards: 67_890,
  },
  {
    name: "Neural Matrix Gamma",
    icon: Network,
    status: "operational",
    load: 82,
    latency: 28,
    coherence: 88,
    threads: 3_456_789,
    shards: 45_678,
  },
  {
    name: "Memetic Engine Delta",
    icon: Share2,
    status: "operational",
    load: 71,
    latency: 38,
    coherence: 91,
    threads: 4_567_890,
    shards: 34_567,
  },
  {
    name: "Consciousness Fabric",
    icon: GitBranch,
    status: "operational",
    load: 68,
    latency: 42,
    coherence: 94,
    threads: 5_678_901,
    shards: 23_456,
  },
  {
    name: "Pattern Recognition",
    icon: Fingerprint,
    status: "operational",
    load: 75,
    latency: 35,
    coherence: 89,
    threads: 6_789_012,
    shards: 12_345,
  },
]

