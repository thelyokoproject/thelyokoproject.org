"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function LiquidButton({ children, className, ...props }: LiquidButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const liquidRef = useRef<any>(null)

  useEffect(() => {
    if (!canvasRef.current || !buttonRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()
    canvas.width = rect.width * 2
    canvas.height = rect.height * 2
    ctx.scale(2, 2)

    class Liquid {
      points: { x: number; y: number; originX: number; originY: number }[]
      centerX: number
      centerY: number
      intensity: number
      ease: number

      constructor() {
        this.points = []
        this.centerX = rect.width / 2
        this.centerY = rect.height / 2
        this.intensity = 25
        this.ease = 0.1

        this.initializePoints()
      }

      initializePoints() {
        const segments = 16
        const radius = Math.min(rect.width, rect.height) / 2

        for (let i = 0; i < segments; i++) {
          const angle = (i / segments) * Math.PI * 2
          const x = this.centerX + Math.cos(angle) * radius
          const y = this.centerY + Math.sin(angle) * radius

          this.points.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
          })
        }
      }

      animate(mouseX: number, mouseY: number) {
        ctx!.clearRect(0, 0, canvas.width, canvas.height)

        const gradientColor = getComputedStyle(button).getPropertyValue("--primary").trim()

        ctx!.fillStyle = gradientColor
        ctx!.beginPath()

        for (let i = 0; i < this.points.length; i++) {
          const point = this.points[i]
          const nextPoint = this.points[i + 1] || this.points[0]

          const dx = mouseX - point.x
          const dy = mouseY - point.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          const angle = Math.atan2(dy, dx)
          const force = Math.max(0, (this.intensity - distance) / this.intensity)

          point.x += Math.cos(angle) * force + (point.originX - point.x) * this.ease
          point.y += Math.sin(angle) * force + (point.originY - point.y) * this.ease

          if (i === 0) {
            ctx!.moveTo(point.x, point.y)
          } else {
            const xc = (point.x + nextPoint.x) / 2
            const yc = (point.y + nextPoint.y) / 2
            ctx!.quadraticCurveTo(point.x, point.y, xc, yc)
          }
        }

        ctx!.closePath()
        ctx!.fill()
      }
    }

    liquidRef.current = new Liquid()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      liquidRef.current?.animate(x, y)
    }

    const handleMouseLeave = () => {
      liquidRef.current?.animate(rect.width / 2, rect.height / 2)
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    liquidRef.current.animate(rect.width / 2, rect.height / 2)

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.button
      ref={buttonRef}
      className={cn("relative px-8 py-4 text-primary-foreground overflow-hidden", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

