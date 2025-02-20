"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ClockIcon } from "lucide-react"

export function Clock() {
  const [time, setTime] = useState(new Date())
  const [showSeconds, setShowSeconds] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setShowSeconds(true)}
      onHoverEnd={() => setShowSeconds(false)}
    >
      <ClockIcon className="w-4 h-4 text-muted-foreground" />
      <motion.time className="text-sm tabular-nums" layout>
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: showSeconds ? "2-digit" : undefined,
        })}
      </motion.time>
    </motion.div>
  )
}

