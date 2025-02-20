"use client"

// Update the LabContent component to use the new components
import { CodeLab } from "@/components/code-lab"
import { PromptEngineering } from "@/components/prompt-engineering"
import { motion } from "framer-motion"

interface LabContentProps {
  labId: string
}

export function LabContent({ labId }: LabContentProps) {
  const renderContent = () => {
    switch (labId) {
      case "code":
        return <CodeLab />
      case "chat":
        return <PromptEngineering />
      // Add other lab components...
      default:
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold">Select a Lab</h2>
            <p className="text-muted-foreground">Choose a lab from the tabs above to get started</p>
          </div>
        )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="h-full overflow-auto bg-background/50 backdrop-blur-sm"
    >
      {renderContent()}
    </motion.div>
  )
}

