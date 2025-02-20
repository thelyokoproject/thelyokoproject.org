"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Code2, MessageSquare, Settings, Sparkles, Atom, Network, Database, Shield } from "lucide-react"

interface AIModule {
  id: string
  name: string
  icon: any
  description: string
  specialty: string
  processingPower: string
  neuralDensity: string
  color: string
}

const aiModules: AIModule[] = [
  {
    id: "xana",
    name: "XANA",
    icon: Brain,
    description: "Advanced cognitive processing and pattern recognition",
    specialty: "Meta-cognitive analysis",
    processingPower: "1.2 ZettaFLOPS",
    neuralDensity: "845T synapses/cm³",
    color: "from-red-500/20 to-red-600/20",
  },
  {
    id: "carthage",
    name: "Carthage",
    icon: Shield,
    description: "Quantum security and encryption protocols",
    specialty: "Ante-memetic defense",
    processingPower: "2.4 YottaFLOPS",
    neuralDensity: "1.2P synapses/cm³",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: "hopper",
    name: "Hopper",
    icon: Code2,
    description: "Advanced code synthesis and optimization",
    specialty: "Neural architecture",
    processingPower: "3.6 ZettaFLOPS",
    neuralDensity: "567T synapses/cm³",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    id: "aelita",
    name: "Aelita",
    icon: Network,
    description: "Creative synthesis and pattern generation",
    specialty: "Cognitive emergence",
    processingPower: "4.8 YottaFLOPS",
    neuralDensity: "923T synapses/cm³",
    color: "from-pink-500/20 to-pink-600/20",
  },
]

export function ChatPanel() {
  const [activeModule, setActiveModule] = useState<AIModule>(aiModules[0])
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Initializing quantum neural pathways. How may I assist you today?",
      module: aiModules[0],
    },
  ])

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] organic-card neo-gradient">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <motion.div
            className="p-2 rounded-full bg-primary/10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <activeModule.icon className="w-6 h-6 text-primary" />
          </motion.div>
          <div>
            <h3 className="font-bold text-lg text-space">{activeModule.name}</h3>
            <p className="text-sm text-muted-foreground font-mono">{activeModule.specialty}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right text-sm font-mono">
            <div className="text-primary">{activeModule.processingPower}</div>
            <div className="text-muted-foreground">{activeModule.neuralDensity}</div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="chat" className="flex-1">
        <TabsList className="p-2 bg-background/50 backdrop-blur">
          {aiModules.map((module) => (
            <TabsTrigger
              key={module.id}
              value={module.id}
              onClick={() => setActiveModule(module)}
              className="data-[state=active]:neo-inset"
            >
              <module.icon className="w-4 h-4 mr-2" />
              {module.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeModule.id} className="flex-1 p-0 m-0">
          <ScrollArea className="flex-1 h-[calc(100vh-16rem)]">
            <div className="flex flex-col gap-4 p-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`p-4 neo-gradient bg-gradient-to-r ${
                      message.role === "assistant" ? message.module.color : "from-gray-500/20 to-gray-600/20"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {message.role === "assistant" ? (
                        <message.module.icon className="w-5 h-5 mt-1 text-primary" />
                      ) : (
                        <MessageSquare className="w-5 h-5 mt-1" />
                      )}
                      <div className="flex-1 space-y-2">
                        <div className="font-mono text-sm">{message.content}</div>
                        {message.role === "assistant" && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Atom className="w-3 h-3" />
                            <span>Quantum Coherence: 99.99%</span>
                            <Database className="w-3 h-3 ml-2" />
                            <span>Neural Density: {message.module.neuralDensity}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 border-t neo-inset">
            <div className="flex gap-2">
              <Input placeholder="Interface with quantum neural network..." className="flex-1 font-mono neo-gradient" />
              <Button size="icon" className="neo-gradient">
                <Sparkles className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

