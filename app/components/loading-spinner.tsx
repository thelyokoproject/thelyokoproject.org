"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <motion.div
      className={cn("relative", sizes[size], className)}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-t-primary"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />
    </motion.div>
  )
}

