export const languages = {
  en: { name: "English", flag: "🇺🇸", dir: "ltr" },
  fr: { name: "Français", flag: "🇫🇷", dir: "ltr" },
  ja: { name: "日本語", flag: "🇯🇵", dir: "ltr" },
  ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" },
  zh: { name: "中文", flag: "🇨🇳", dir: "ltr" },
  de: { name: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  es: { name: "Español", flag: "🇪🇸", dir: "ltr" },
  ru: { name: "Русский", flag: "🇷🇺", dir: "ltr" },
  ko: { name: "한국어", flag: "🇰🇷", dir: "ltr" },
  hi: { name: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = "en"

export const translations = {
  en: {
    common: {
      tryNow: "Try Now",
      learnMore: "Learn More",
      viewDemo: "View Demo",
      getStarted: "Get Started",
      contactUs: "Contact Us",
    },
    marketing: {
      hero: {
        title: "Project Lyoko",
        subtitle: "Advanced Cognitive Infrastructure",
        description:
          "Pioneering the frontier of artificial consciousness through quantum neural networks and ante-memetic processing systems.",
      },
      features: {
        title: "Quantum Neural Architecture",
        subtitle: "Next-Generation AI Infrastructure",
      },
      // Add more marketing translations
    },
    app: {
      labs: {
        neural: "Neural Lab",
        quantum: "Quantum Lab",
        memory: "Memory Lab",
        // Add more lab translations
      },
      // Add more app translations
    },
  },
  // Add other language translations following the same structure
} as const

export type TranslationKey = keyof typeof translations.en

