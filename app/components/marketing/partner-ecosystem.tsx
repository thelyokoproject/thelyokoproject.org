"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function PartnerEcosystem() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-space">Partner Ecosystem</h2>
          <p className="mt-4 text-muted-foreground font-mono">
            Collaborating with industry leaders in quantum computing and AI
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 neo-gradient h-full group">
                <div className="relative h-32 mb-6 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain p-4 filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-space">{partner.name}</h3>
                  <p className="text-muted-foreground mb-4 font-mono">{partner.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {partner.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground font-mono">Partnership Focus: {partner.focus}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground font-mono">Join our ecosystem of innovation and quantum advancement</p>
        </motion.div>
      </div>
    </section>
  )
}

const partners = [
  {
    name: "QuantumTech Solutions",
    logo: "/placeholder.svg",
    description: "Leading provider of quantum computing infrastructure and solutions",
    technologies: ["Quantum Hardware", "Neural Processing", "Cloud Infrastructure"],
    focus: "Quantum Infrastructure Development",
  },
  {
    name: "NeuroCorp Systems",
    logo: "/placeholder.svg",
    description: "Pioneering neural network architectures and cognitive computing",
    technologies: ["Neural Networks", "Cognitive Systems", "AI Research"],
    focus: "Neural Architecture Innovation",
  },
  {
    name: "Secure Quantum Inc.",
    logo: "/placeholder.svg",
    description: "Specialized in quantum encryption and security protocols",
    technologies: ["Quantum Encryption", "Security Protocols", "Neural Security"],
    focus: "Quantum Security Solutions",
  },
  {
    name: "BioQuant Research",
    logo: "/placeholder.svg",
    description: "Bio-inspired quantum computing and neural systems",
    technologies: ["Bio-Computing", "Quantum Biology", "Neural Systems"],
    focus: "Bio-Quantum Integration",
  },
  {
    name: "DataSphere Networks",
    logo: "/placeholder.svg",
    description: "Global quantum network infrastructure and data processing",
    technologies: ["Network Infrastructure", "Data Processing", "Quantum Networks"],
    focus: "Global Network Solutions",
  },
  {
    name: "CogniTech Industries",
    logo: "/placeholder.svg",
    description: "Advanced cognitive computing and AI solutions",
    technologies: ["Cognitive Computing", "AI Systems", "Machine Learning"],
    focus: "Cognitive System Development",
  },
]

