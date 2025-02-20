"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Download, ExternalLink, Star, Users, BookOpen } from "lucide-react"

export function ResearchPapers() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-space">
            Research & Publications
          </h2>
          <p className="mt-4 text-muted-foreground font-mono">
            Pioneering research in quantum neural computing and cognitive systems
          </p>
        </motion.div>

        <ScrollArea className="h-[800px] rounded-lg p-4">
          <div className="grid gap-6">
            {papers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 neo-gradient">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold text-space">{paper.title}</h3>
                      </div>

                      <p className="text-muted-foreground mb-4 font-mono">{paper.abstract}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.keywords.map((keyword) => (
                          <Badge key={keyword} variant="outline" className="font-mono">
                            {keyword}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {paper.authors}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {paper.citations} citations
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {paper.journal}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button className="w-full gap-2">
                        <Download className="w-4 h-4" />
                        PDF
                      </Button>
                      <Button variant="outline" className="w-full gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Online
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  )
}

const papers = [
  {
    title: "Quantum Neural Networks: A New Paradigm in Cognitive Computing",
    authors: "Dr. Sarah Chen, et al.",
    abstract:
      "This paper introduces a novel approach to integrating quantum computing principles with neural network architectures, achieving unprecedented processing capabilities and cognitive functions.",
    keywords: ["Quantum Computing", "Neural Networks", "Cognitive Systems"],
    citations: 1247,
    journal: "Nature Quantum Science",
    year: 2024,
  },
  {
    title: "Ante-Memetic Processing in Quantum Cognitive Systems",
    authors: "Dr. Michael Rodriguez, et al.",
    abstract:
      "An exploration of ante-memetic processing techniques in quantum cognitive systems, demonstrating significant improvements in pattern recognition and information processing.",
    keywords: ["Ante-Memetic", "Quantum Processing", "Pattern Recognition"],
    citations: 892,
    journal: "Quantum Computing Review",
    year: 2024,
  },
  {
    title: "Advanced Neural Architecture for Quantum-Scale Computing",
    authors: "Dr. Emily Watson, et al.",
    abstract:
      "Presenting a revolutionary neural architecture designed specifically for quantum-scale computing, enabling new levels of computational power and efficiency.",
    keywords: ["Neural Architecture", "Quantum Scale", "Computing Efficiency"],
    citations: 756,
    journal: "IEEE Quantum Electronics",
    year: 2024,
  },
  {
    title: "Quantum Encryption in Neural Network Communications",
    authors: "Dr. James Liu, et al.",
    abstract:
      "A comprehensive study of quantum encryption techniques applied to neural network communications, ensuring unprecedented levels of security and privacy.",
    keywords: ["Quantum Encryption", "Neural Security", "Network Privacy"],
    citations: 634,
    journal: "Cybersecurity Quantum Journal",
    year: 2024,
  },
  {
    title: "Bio-Inspired Quantum Neural Processing",
    authors: "Dr. Anna Kowalski, et al.",
    abstract:
      "Exploring the intersection of biological neural systems and quantum computing, leading to more efficient and powerful cognitive processing systems.",
    keywords: ["Bio-Inspired", "Neural Processing", "Quantum Biology"],
    citations: 523,
    journal: "Biological Computing Systems",
    year: 2024,
  },
]

