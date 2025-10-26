import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ibmPlexSans, lora } from "./fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Orvion - Creating What's Next in AI Native Mobile",
  description:
    "Orvion builds innovative AI-based mobile applications to transform everyday experiences. Discover Nutrai and Genso.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icon.png",
  },
};

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
