"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AnimatedIcon } from "@/components/animated-icon"
import { Activity, Cpu, Globe, HardDrive, Network } from "lucide-react"

export function SystemMetrics() {
  const [metrics, setMetrics] = useState({
    cpu: 45,
    memory: 60,
    network: 120,
    requests: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        cpu: Math.min(100, Math.max(0, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.min(100, Math.max(0, prev.memory + (Math.random() - 0.5) * 5)),
        network: Math.min(200, Math.max(80, prev.network + (Math.random() - 0.5) * 20)),
        requests: prev.requests + Math.floor(Math.random() * 3),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <AnimatedIcon Icon={Activity} className="text-green-500" />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                className="text-sm text-muted-foreground overflow-hidden whitespace-nowrap"
              >
                All Systems Operational
              </motion.div>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="space-y-2">
              <p>System Status</p>
              <p className="text-xs text-muted-foreground">Last checked: Just now</p>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <AnimatedIcon Icon={Cpu} animate={metrics.cpu > 80} />
              <Progress value={metrics.cpu} className="w-24 h-2" />
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="space-y-1">
              <p>CPU Usage: {metrics.cpu.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground">8 Cores Active</p>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <AnimatedIcon Icon={HardDrive} animate={metrics.memory > 80} />
              <Progress value={metrics.memory} className="w-24 h-2" />
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="space-y-1">
              <p>Memory Usage: {metrics.memory.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground">12GB / 16GB</p>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <AnimatedIcon Icon={Network} animate={metrics.network > 150} />
              <span className="text-sm text-muted-foreground tabular-nums">{metrics.network.toFixed(0)}ms</span>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="space-y-1">
              <p>Network Latency</p>
              <p className="text-xs text-muted-foreground">API Response Time</p>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <AnimatedIcon Icon={Globe} />
              <motion.div
                className="text-sm text-muted-foreground tabular-nums"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                key={metrics.requests}
              >
                {metrics.requests.toLocaleString()} reqs
              </motion.div>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="space-y-1">
              <p>Total Requests</p>
              <p className="text-xs text-muted-foreground">Since last reset</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

