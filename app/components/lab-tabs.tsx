"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight } from "lucide-react"
import * as Icons from "lucide-react"

export const labs = [
  { id: "chat", name: "Neural Chat", icon: "Brain" },
  { id: "code", name: "Code Synthesis", icon: "Code2" },
  { id: "image", name: "Visual Cortex", icon: "Image" },
  { id: "audio", name: "Audio Matrix", icon: "Waveform" },
  { id: "data", name: "Data Nexus", icon: "Database" },
  { id: "security", name: "Security Core", icon: "Shield" },
  { id: "knowledge", name: "Knowledge Graph", icon: "Network" },
  { id: "quantum", name: "Quantum Lab", icon: "Atom" },
  { id: "memory", name: "Memory Bank", icon: "HardDrive" },
  { id: "analytics", name: "Analytics Hub", icon: "BarChart" },
  { id: "research", name: "Research Lab", icon: "Flask" },
  { id: "terminal", name: "Neural Terminal", icon: "Terminal" },
]

interface LabTabsProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function LabTabs({ activeTab, onTabChange }: LabTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative flex items-center w-full">
      {showLeftArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 z-10 bg-background/80 backdrop-blur"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      <ScrollArea ref={scrollRef} className="w-full" onScroll={handleScroll}>
        <div className="flex gap-2 p-2 min-w-max">
          {labs.map((lab) => {
            const Icon = Icons[lab.icon as keyof typeof Icons]
            return (
              <motion.button
                key={lab.id}
                onClick={() => onTabChange(lab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg
                  ${activeTab === lab.id ? "bg-primary text-primary-foreground neo-gradient" : "hover:bg-muted"}
                  transition-all duration-200 font-mono text-sm
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4" />
                {lab.name}
              </motion.button>
            )
          })}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>

      {showRightArrow && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 z-10 bg-background/80 backdrop-blur"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

