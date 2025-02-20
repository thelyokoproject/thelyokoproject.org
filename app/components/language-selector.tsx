"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"
import { languages, type Language } from "@/lib/i18n/config"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="w-4 h-4" />
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className="flex items-center gap-2"
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="flex-1">{lang.name}</span>
            {code === language && <motion.div layoutId="activeLanguage" className="w-1 h-1 bg-primary rounded-full" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

