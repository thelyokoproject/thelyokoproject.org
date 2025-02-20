"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Save, Play, History, ChevronRight, Plus } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"

interface Variable {
  name: string
  value: string
}

export function PromptEngineering() {
  const [variables, setVariables] = useState<Variable[]>([])
  const [activeTemplate, setActiveTemplate] = useState("custom")
  const [temperature, setTemperature] = useState([0.7])

  const templates = [
    { id: "custom", name: "Custom Prompt" },
    { id: "analysis", name: "Deep Analysis" },
    { id: "creative", name: "Creative Writing" },
    { id: "code", name: "Code Generation" },
  ]

  return (
    <div className="grid gap-4 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Prompt Engineering Studio</h3>
        <Button variant="outline" size="sm">
          <History className="w-4 h-4 mr-2" />
          History
        </Button>
      </div>

      <Tabs defaultValue="editor" className="flex-1">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="variables">Variables</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-4">
          <div className="flex gap-2 mb-4">
            {templates.map((template) => (
              <Button
                key={template.id}
                variant={activeTemplate === template.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTemplate(template.id)}
                className="smooth-transition"
              >
                {template.name}
              </Button>
            ))}
          </div>

          <Card className="p-4 space-y-4 backdrop-blur-sm bg-background/50">
            <textarea
              className="w-full h-48 p-4 text-sm font-mono border rounded-lg bg-background/50 focus:ring-2 focus:ring-primary"
              placeholder="Enter your prompt here..."
            />

            <AnimatePresence>
              {variables.map((variable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 p-2 border rounded-lg"
                >
                  <Badge variant="outline">{variable.name}</Badge>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{variable.value}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex gap-2">
              <Button className="flex-1">
                <Play className="w-4 h-4 mr-2" />
                Execute
              </Button>
              <Button variant="outline">
                <Save className="w-4 h-4 mr-2" />
                Save Template
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="variables" className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Variables</h4>
              <Button size="sm" onClick={() => setVariables([...variables, { name: "", value: "" }])}>
                <Plus className="w-4 h-4 mr-2" />
                Add Variable
              </Button>
            </div>

            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {variables.map((variable, index) => (
                  <motion.div key={index} layout className="grid gap-2">
                    <Input
                      placeholder="Variable name"
                      value={variable.name}
                      onChange={(e) => {
                        const newVariables = [...variables]
                        newVariables[index].name = e.target.value
                        setVariables(newVariables)
                      }}
                    />
                    <Input
                      placeholder="Default value"
                      value={variable.value}
                      onChange={(e) => {
                        const newVariables = [...variables]
                        newVariables[index].value = e.target.value
                        setVariables(newVariables)
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Temperature</label>
                <div className="flex items-center gap-4">
                  <Slider value={temperature} onValueChange={setTemperature} max={1} step={0.1} className="flex-1" />
                  <span className="text-sm text-muted-foreground w-12">{temperature[0]}</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Model</label>
                <select className="w-full p-2 mt-1 border rounded-md bg-background">
                  <option>GPT-4</option>
                  <option>GPT-3.5 Turbo</option>
                  <option>Claude 2</option>
                </select>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

