"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        <div className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-10 h-10 relative"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

