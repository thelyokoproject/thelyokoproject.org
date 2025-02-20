"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import type { Language } from "@/lib/i18n/config"
import { defaultLanguage, languages } from "@/lib/i18n/config"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  dir: "ltr",
})

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  useEffect(() => {
    // Update document direction
    document.documentElement.dir = languages[language].dir
    setDir(languages[language].dir)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, dir }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

