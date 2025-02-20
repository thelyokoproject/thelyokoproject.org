"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function ToggleButton({ className, children, ...props }: ToggleButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative px-12 py-4 text-primary-foreground overflow-hidden rounded-full",
        "bg-gradient-to-r from-primary to-primary/80",
        "shadow-[0_0_30px_rgba(234,179,8,0.3)]",
        "hover:shadow-[0_0_50px_rgba(234,179,8,0.5)]",
        "transition-all duration-300",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/25 to-primary/0"
        animate={{
          x: ["0%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <span className="relative flex items-center justify-center gap-2 text-xl font-bold text-space">
        <Sparkles className="w-6 h-6" />
        {children}
      </span>
    </motion.button>
  )
}

