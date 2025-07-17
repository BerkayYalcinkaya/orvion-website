import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ibmPlexSans, lora } from "./fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Orvion - Cutting-Edge AI Mobile Applications",
  description:
    "Orvion builds innovative AI-based mobile applications like Nutrai and Dermai to transform everyday experiences.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans", ibmPlexSans.variable, lora.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
