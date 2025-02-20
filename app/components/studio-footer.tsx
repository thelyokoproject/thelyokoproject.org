"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Activity, Cpu, Database, Network, Zap, Brain, Clock, GitBranch, Globe, Server } from "lucide-react"

export function StudioFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4 px-4">
        <TooltipProvider>
          {/* System Status */}
          <div className="flex items-center gap-4 flex-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Activity className="w-4 h-4 text-green-500" />
                  </motion.div>
                  <span className="text-sm font-mono">System Optimal</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-mono">All systems operational</p>
              </TooltipContent>
            </Tooltip>

            {/* Resource Metrics */}
            <div className="flex items-center gap-6">
              {metrics.map((metric) => (
                <Tooltip key={metric.name}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2">
                      <metric.icon className="w-4 h-4 text-primary" />
                      <div className="flex flex-col">
                        <span className="text-xs font-mono">{metric.value}</span>
                        <Progress value={metric.percentage} className="w-16 h-1" />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs font-mono">{metric.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Active Processes */}
          <div className="flex items-center gap-4">
            {processes.map((process) => (
              <Tooltip key={process.name}>
                <TooltipTrigger asChild>
                  <Badge variant="outline" className="font-mono">
                    <process.icon className="w-3 h-3 mr-1" />
                    {process.value}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs font-mono">{process.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Time and Location */}
          <div className="flex items-center gap-4 ml-auto">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-mono">{new Date().toLocaleTimeString()}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-mono">System Time</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-mono">Quantum Grid</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-mono">Connected to Quantum Network</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </footer>
  )
}

const metrics = [
  { name: "CPU Usage", value: "45%", percentage: 45, icon: Cpu },
  { name: "Memory", value: "6.2GB", percentage: 65, icon: Brain },
  { name: "Network", value: "1.2GB/s", percentage: 80, icon: Network },
  { name: "Storage", value: "2.1TB", percentage: 35, icon: Database },
]

const processes = [
  { name: "Active Neural Threads", value: "1.2K", icon: GitBranch },
  { name: "Quantum Operations", value: "845K", icon: Zap },
  { name: "Active Instances", value: "23", icon: Server },
]

