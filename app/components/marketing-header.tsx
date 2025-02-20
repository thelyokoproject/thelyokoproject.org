"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import Link from "next/link"
import { Command, Cpu, FileText, Users, BookOpen, ChevronDown, Sparkles, Brain, Network, Lock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface MarketingHeaderProps {
  onEnterApp: () => void
}

const navItems = [
  {
    name: "Technology",
    icon: Cpu,
    items: [
      { name: "Features", href: "#features", icon: Sparkles },
      { name: "Research", href: "#research", icon: Brain },
      { name: "Case Studies", href: "#case-studies", icon: Network },
    ],
  },
  {
    name: "Resources",
    icon: FileText,
    items: [
      { name: "Documentation", href: "#docs", icon: BookOpen },
      { name: "Partners", href: "#partners", icon: Users },
      { name: "Security", href: "#security", icon: Lock },
    ],
  },
]

export function MarketingHeader({ onEnterApp }: MarketingHeaderProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-12 items-center">
        <Link href="/" className="flex items-center gap-1.5 font-bold text-lg hover:text-primary transition-colors">
          <Command className="w-5 h-5 text-primary" />
          Lyoko
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {navItems.map((item) => (
            <DropdownMenu key={item.name}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 gap-1.5 px-2 hover:bg-accent liquid-hover">
                  <item.icon className="w-4 h-4" />
                  {item.name}
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {item.items.map((subItem) => (
                  <DropdownMenuItem key={subItem.name} asChild className="gap-2">
                    <Link href={subItem.href}>
                      <subItem.icon className="w-4 h-4" />
                      {subItem.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 ml-auto">
          <LanguageSelector />
          <ThemeToggle />
          <Button onClick={onEnterApp} size="sm" className="liquid-button gap-1.5 ml-1.5">
            <Users className="w-4 h-4" />
            Enter Studio
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

