"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  Icon: LucideIcon
  className?: string
  animate?: boolean
}

export function AnimatedIcon({ Icon, className, animate = true }: AnimatedIconProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={className}>
      <motion.div
        animate={
          animate
            ? {
                rotate: [0, 5, -5, 0],
              }
            : undefined
        }
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Icon className="w-4 h-4" />
      </motion.div>
    </motion.div>
  )
}

