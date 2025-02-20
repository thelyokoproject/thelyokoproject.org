"use client"

import { Button } from "@/components/ui/button"
import { SystemMetrics } from "@/components/system-metrics"
import { AnimatedIcon } from "@/components/animated-icon"
import { Database, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <motion.div
        className="container flex h-14 items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <SystemMetrics />

        <div className="flex items-center gap-4 ml-auto">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <AnimatedIcon Icon={Database} />
            <span className="text-sm text-muted-foreground">GPT-4</span>
            <Badge variant="outline" className="text-xs">
              v2.1
            </Badge>
          </motion.div>

          <Button variant="ghost" size="icon">
            <AnimatedIcon Icon={Info} />
          </Button>
        </div>
      </motion.div>
    </footer>
  )
}

