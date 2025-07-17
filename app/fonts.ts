import { IBM_Plex_Sans, Lora } from "next/font/google"

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-sans",
})

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
}) 