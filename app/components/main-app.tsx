"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatPanel } from "@/components/chat-panel"
import { CodeLab } from "@/components/code-lab"
import { Sidebar } from "@/components/sidebar"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const sections = [
  { id: "chat", name: "Chat Studio" },
  { id: "code", name: "Code Lab" },
  { id: "image", name: "Image Lab" },
  { id: "audio", name: "Audio Lab" },
  { id: "data", name: "Data Lab" },
]

export function MainApp() {
  const [activeSection, setActiveSection] = useState("chat")

  const renderContent = (section: string) => {
    switch (section) {
      case "chat":
        return <ChatPanel />
      case "code":
        return <CodeLab />
      default:
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-space">
              {section.charAt(0).toUpperCase() + section.slice(1)} Lab
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="h-48 rounded-lg bg-muted/50 backdrop-blur"
                />
              ))}
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="flex-1">
          <div className="container flex gap-2 py-2">
            <TabsList className="bg-background border h-12">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-mono"
                >
                  {section.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="flex-1">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={20} minSize={15}>
                <Sidebar activeLab={activeSection} />
              </ResizablePanel>

              <ResizableHandle />

              <ResizablePanel defaultSize={80}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <TabsContent value={activeSection} className="h-full m-0">
                      {renderContent(activeSection)}
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}

