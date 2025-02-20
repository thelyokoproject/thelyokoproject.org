"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Brain, Globe, Server, Users } from "lucide-react"

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} className="py-24 bg-primary/5">
      <motion.div className="container px-4 md:px-6" style={{ y }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <CountingNumber value={stat.value} />
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function CountingNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepValue = value / steps
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      setCount(Math.min(Math.round(stepValue * current), value))
      if (current >= steps) clearInterval(timer)
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-3xl font-bold mb-2">
      {count.toLocaleString()}
      {value >= 1000 && "+"} {/* Add + symbol for large numbers */}
    </div>
  )
}

const stats = [
  {
    icon: Users,
    value: 50000,
    label: "Active Users",
  },
  {
    icon: Brain,
    value: 1000000,
    label: "Models Trained",
  },
  {
    icon: Server,
    value: 99.99,
    label: "Uptime %",
  },
  {
    icon: Globe,
    value: 150,
    label: "Countries",
  },
]

