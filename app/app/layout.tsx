import type React from "react"
import "@/styles/globals.css"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context" // Add language provider
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased theme-transition",
          spaceGrotesk.variable,
          jetbrainsMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {" "}
            {/* Add language provider */}
            <div className="relative min-h-screen">
              <div className="fixed inset-0 grid-background -z-10 opacity-50" />
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

