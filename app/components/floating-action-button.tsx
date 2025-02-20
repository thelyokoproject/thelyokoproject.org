"use client"

import { motion, useAnimation } from "framer-motion"
import { Brain, Sparkles, Zap } from "lucide-react"
import { useEffect } from "react"

interface FloatingActionButtonProps {
  onClick: () => void
  showApp: boolean
}

export function FloatingActionButton({ onClick, showApp }: FloatingActionButtonProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    })
  }, [controls])

  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 p-4 liquid-button glass-morphism"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={controls}
    >
      <motion.div className="flex items-center gap-2 px-2">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="relative w-6 h-6"
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [1, 0],
              scale: [1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Brain className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0, 1],
              scale: [0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
        <span className="text-sm font-bold">{showApp ? "View Marketing" : "Enter Lyoko"}</span>
        <Zap className="w-4 h-4 text-primary animate-pulse" />
      </motion.div>
    </motion.button>
  )
}

