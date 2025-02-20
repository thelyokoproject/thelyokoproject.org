"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cpu, Globe, Shield } from "lucide-react"

export function CaseStudies() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Real-World Applications
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover how organizations are leveraging Project Lyoko's advanced cognitive systems
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 neo-gradient h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <study.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-space">{study.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{study.organization}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 font-mono">{study.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold text-space">{metric.value}</div>
                      <div className="text-sm text-muted-foreground font-mono">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const caseStudies = [
  {
    title: "Quantum Neural Defense",
    organization: "Global Security Initiative",
    description:
      "Implementation of advanced neural networks for threat detection and prevention across quantum computing infrastructure.",
    icon: Shield,
    technologies: ["Quantum Computing", "Neural Networks", "Threat Detection"],
    metrics: [
      { label: "Threat Prevention Rate", value: "99.99%" },
      { label: "Processing Speed", value: "1.2 YF/s" },
      { label: "Neural Density", value: "845T s/cm³" },
      { label: "Cost Reduction", value: "75%" },
    ],
  },
  {
    title: "Cognitive Healthcare System",
    organization: "MediTech Solutions",
    description:
      "Revolutionary healthcare diagnostics using quantum-powered cognitive analysis and pattern recognition.",
    icon: Brain,
    technologies: ["Medical AI", "Pattern Recognition", "Quantum Analysis"],
    metrics: [
      { label: "Diagnostic Accuracy", value: "99.95%" },
      { label: "Response Time", value: "0.3ms" },
      { label: "Patient Capacity", value: "100K+" },
      { label: "Success Rate", value: "98.5%" },
    ],
  },
  {
    title: "Global Data Synthesis",
    organization: "DataSphere Corporation",
    description: "Massive-scale data processing and synthesis using distributed quantum cognitive networks.",
    icon: Globe,
    technologies: ["Data Processing", "Quantum Networks", "Neural Synthesis"],
    metrics: [
      { label: "Data Processed", value: "15 EB/s" },
      { label: "Accuracy Rate", value: "99.99%" },
      { label: "Network Nodes", value: "1.2M+" },
      { label: "Efficiency Gain", value: "850%" },
    ],
  },
  {
    title: "Quantum Financial Systems",
    organization: "QuantumFin Technologies",
    description: "High-frequency trading and risk analysis powered by quantum neural prediction engines.",
    icon: Cpu,
    technologies: ["Quantum Trading", "Risk Analysis", "Neural Prediction"],
    metrics: [
      { label: "Transaction Speed", value: "0.1ms" },
      { label: "Prediction Accuracy", value: "97.8%" },
      { label: "Daily Volume", value: "$500B+" },
      { label: "ROI Increase", value: "340%" },
    ],
  },
]

