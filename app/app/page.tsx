"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ParticleBackground } from "@/components/particle-background"
import { UniverseHero } from "@/components/universe-hero"
import { FeatureSection } from "@/components/feature-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"
import { MarketingFooter } from "@/components/marketing-footer"
import { MainApp } from "@/components/main-app"
import { MarketingHeader } from "@/components/marketing-header"
import { SystemStatus } from "@/components/system-status"
import { TechShowcase } from "@/components/marketing/tech-showcase"
import { CaseStudies } from "@/components/marketing/case-studies"
import { ResearchPapers } from "@/components/marketing/research-papers"
import { PartnerEcosystem } from "@/components/marketing/partner-ecosystem"
import { FloatingActionButton } from "@/components/floating-action-button"

export default function Home() {
  const [showApp, setShowApp] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />

      <AnimatePresence mode="wait">
        {!showApp ? (
          <motion.div
            key="marketing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <MarketingHeader onEnterApp={() => setShowApp(true)} />
            <UniverseHero />
            <TechShowcase />
            <FeatureSection />
            <CaseStudies />
            <SystemStatus />
            <ResearchPapers />
            <TestimonialSection />
            <PartnerEcosystem />
            <StatsSection />
            <PricingSection />
            <MarketingFooter />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0"
          >
            <MainApp />
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingActionButton showApp={showApp} onClick={() => setShowApp(!showApp)} />
    </div>
  )
}

