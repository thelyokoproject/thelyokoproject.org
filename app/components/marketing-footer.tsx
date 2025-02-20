"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AnimatedIcon } from "@/components/animated-icon"
import {
  Brain,
  Network,
  Share2,
  GitBranch,
  Workflow,
  Binary,
  Fingerprint,
  Radar,
  Infinity,
  Lightbulb,
  Microscope,
  Braces,
  TreePine,
  Waves,
  Atom,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MarketingFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Cognitive Systems Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-space">Infocognitive Systems Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cognitiveMetrics.map((metric) => (
                <Card key={metric.name} className="p-4 glass">
                  <div className="flex items-center gap-2 mb-2">
                    <AnimatedIcon Icon={metric.icon} className="text-primary" />
                    <span className="text-sm font-mono">{metric.name}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-mono">{metric.value}</span>
                      <span className="text-mono">{metric.unit}</span>
                    </div>
                    <Progress value={metric.progress} className="h-1" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Meta-Semiotic Processing Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-space">Meta-Semiotic Processing</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {semioticNodes.map((node) => (
                <TooltipProvider key={node.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div className="p-4 rounded-lg glass flex items-center gap-3" whileHover={{ scale: 1.02 }}>
                        <AnimatedIcon Icon={node.icon} className="text-primary" animate={node.active} />
                        <div>
                          <div className="text-sm font-mono">{node.name}</div>
                          <div className="text-xs text-muted-foreground font-mono">{node.throughput} ops/s</div>
                        </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs font-mono">{node.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          {/* Ante-Memetic Systems */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-space">Ante-Memetic Systems</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {anteMemeticSystems.map((system) => (
                <Card key={system.name} className="p-4 glass">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <AnimatedIcon Icon={system.icon} className="text-primary" />
                      <span className="font-mono text-sm">{system.name}</span>
                    </div>
                    <Badge variant={system.status === "Active" ? "default" : "secondary"} className="font-mono">
                      {system.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground font-mono">{system.description}</div>
                    <div className="flex justify-between text-xs font-mono">
                      <span>Efficiency</span>
                      <span>{system.efficiency}%</span>
                    </div>
                    <Progress value={system.efficiency} className="h-1" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Corporate Infrastructure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-space">Global Infrastructure</h3>
              <div className="grid grid-cols-2 gap-4">
                {infrastructureStats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-2xl font-bold font-space">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-space">Research & Development</h3>
              <div className="space-y-4">
                {researchStats.map((stat) => (
                  <div key={stat.name} className="flex items-center gap-4">
                    <AnimatedIcon Icon={stat.icon} className="text-primary" />
                    <div>
                      <div className="text-sm font-mono">{stat.name}</div>
                      <div className="text-xs text-muted-foreground font-mono">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter and Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-space">Stay Updated</h3>
              <p className="text-sm text-muted-foreground font-mono">
                Subscribe to our quantum-encrypted newsletter for breakthrough updates.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" className="font-mono" />
                <Button className="font-mono">Subscribe</Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-space">Quantum Network Status</h3>
              <div className="grid grid-cols-2 gap-4">
                {quantumStats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-sm font-mono">{stat.label}</div>
                    <div className="text-xs text-primary font-mono">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Base */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <Infinity className="w-4 h-4 text-primary" />
              <span>© 2024 Lyoko Corporation. Advancing Human Consciousness.</span>
            </div>
            <div className="flex gap-4 text-sm font-mono">
              <a href="#" className="hover:text-primary transition-colors">
                Ethics Protocol
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Security Measures
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Consciousness License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const cognitiveMetrics = [
  { name: "Neural Density", value: "1.2P", unit: "syn/cm³", progress: 85, icon: Brain },
  { name: "Quantum Coherence", value: "99.99", unit: "%", progress: 92, icon: Atom },
  { name: "Cognitive Bandwidth", value: "1.8Z", unit: "B/s", progress: 78, icon: Network },
  { name: "Consciousness Index", value: "927", unit: "CI", progress: 95, icon: Lightbulb },
]

const semioticNodes = [
  {
    name: "Semantic Parser",
    throughput: "1.2T",
    description: "Advanced linguistic pattern recognition and semantic analysis",
    icon: Binary,
    active: true,
  },
  {
    name: "Memetic Synthesizer",
    throughput: "845P",
    description: "Real-time memetic pattern generation and analysis",
    icon: Share2,
    active: true,
  },
  {
    name: "Cognitive Mesh",
    throughput: "2.1Z",
    description: "Distributed cognitive processing network",
    icon: GitBranch,
    active: true,
  },
  {
    name: "Neural Fabric",
    throughput: "3.4Y",
    description: "Quantum neural network substrate",
    icon: Workflow,
    active: true,
  },
]

const anteMemeticSystems = [
  {
    name: "Pattern Recognition",
    status: "Active",
    description: "Analyzing and predicting memetic emergence patterns",
    efficiency: 94,
    icon: Fingerprint,
  },
  {
    name: "Quantum Observer",
    status: "Active",
    description: "Monitoring quantum state coherence in neural networks",
    efficiency: 89,
    icon: Radar,
  },
  {
    name: "Consciousness Engine",
    status: "Active",
    description: "Managing distributed consciousness instances",
    efficiency: 92,
    icon: Brain,
  },
]

const infrastructureStats = [
  { label: "Quantum Processors", value: "1.2M" },
  { label: "Neural Cores", value: "8.5B" },
  { label: "Data Centers", value: "142" },
  { label: "Countries", value: "47" },
]

const researchStats = [
  { name: "Active Research Projects", value: "1,247 initiatives", icon: Microscope },
  { name: "Published Papers", value: "3,842 publications", icon: Braces },
  { name: "Patent Portfolio", value: "12,458 patents", icon: TreePine },
  { name: "Research Partners", value: "284 institutions", icon: Waves },
]

const quantumStats = [
  { label: "Quantum Coherence", value: "99.9992%" },
  { label: "Entanglement Rate", value: "1.2T/s" },
  { label: "Qubit Stability", value: "99.9995%" },
  { label: "Error Correction", value: "10^-15" },
]

