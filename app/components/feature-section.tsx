"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Brain, Code2, Cpu, Database, FlaskRoundIcon as Flask, Globe, Layers, Lock, Zap } from "lucide-react"

export function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className="py-24 bg-muted/50">
      <motion.div className="container px-4 md:px-6" style={{ y }}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powerful Features for Modern AI Development
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to build, test, and deploy AI models in one place
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group">
                <div className="p-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-lg group-hover:border-primary/30 transition-colors" />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Access and fine-tune state-of-the-art AI models for your specific use cases.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Process and analyze data in real-time with high-performance computing.",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Deploy your models globally with edge computing capabilities.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security with encryption at rest and in transit.",
  },
  {
    icon: Database,
    title: "Scalable Infrastructure",
    description: "Auto-scaling infrastructure that grows with your needs.",
  },
  {
    icon: Layers,
    title: "Version Control",
    description: "Track and manage different versions of your models and datasets.",
  },
  {
    icon: Flask,
    title: "Experiment Tracking",
    description: "Monitor and compare different experiments and model iterations.",
  },
  {
    icon: Code2,
    title: "API Integration",
    description: "Easy integration with RESTful APIs and webhooks.",
  },
  {
    icon: Cpu,
    title: "Hardware Optimization",
    description: "Automatic hardware optimization for maximum performance.",
  },
]

