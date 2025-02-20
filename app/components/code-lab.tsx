"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { Code2, Play, Settings } from "lucide-react"
import Editor from "@monaco-editor/react"

export function CodeLab() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("javascript")

  return (
    <div className="grid gap-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Code Lab</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button size="sm">
            <Play className="w-4 h-4 mr-2" />
            Run
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="backdrop-blur-sm bg-background/50">
          <Tabs defaultValue="code" className="flex-1">
            <TabsList className="p-2 bg-muted">
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="tests">Tests</TabsTrigger>
              <TabsTrigger value="docs">Docs</TabsTrigger>
            </TabsList>

            <ScrollArea className="h-[600px]">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                <Editor
                  height="600px"
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: "IBM Plex Mono",
                    lineNumbers: "on",
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    readOnly: false,
                    automaticLayout: true,
                  }}
                />
              </motion.div>
            </ScrollArea>
          </Tabs>
        </Card>

        <Card className="backdrop-blur-sm bg-background/50">
          <div className="p-4 border-b">
            <h3 className="font-semibold">AI Assistant</h3>
          </div>
          <ScrollArea className="h-[600px]">
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-2">
                <Code2 className="w-4 h-4 mt-1" />
                <div className="flex-1">
                  <p className="text-sm">I can help you write, debug, and optimize your code. Try asking me to:</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• Write a specific function</li>
                    <li>• Debug your code</li>
                    <li>• Optimize performance</li>
                    <li>• Explain concepts</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  )
}

