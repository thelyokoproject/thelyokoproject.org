"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Network, Lock } from "lucide-react"

export function MarketingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/50 to-primary-foreground organic-border p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Project Lyoko
                <br />
                <span className="text-2xl sm:text-3xl xl:text-4xl text-muted-foreground">
                  Advanced Cognitive Infrastructure
                </span>
              </motion.h1>
              <motion.p
                className="max-w-[800px] text-muted-foreground md:text-xl mx-auto font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Pioneering the frontier of artificial consciousness through quantum neural networks and ante-memetic
                processing systems.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-4 min-[400px]:flex-row justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="neo-gradient organic-border gap-2">
                <Brain className="w-5 h-5" />
                Initialize Neural Link
              </Button>
              <Button size="lg" variant="outline" className="neo-gradient organic-border gap-2">
                <Network className="w-5 h-5" />
                Access Documentation
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 lg:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative group overflow-hidden organic-card neo-gradient p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-space">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-mono">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Brain,
    title: "Quantum Neural Core",
    description: "Advanced cognitive processing with quantum entanglement and neural synchronization.",
  },
  {
    icon: Network,
    title: "Ante-Memetic Shield",
    description: "Revolutionary protection against cognitive hazards and memetic attacks.",
  },
  {
    icon: Lock,
    title: "Secure Infrastructure",
    description: "Military-grade quantum encryption and neural firewall systems.",
  },
]

