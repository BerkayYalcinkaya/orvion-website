"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.li
      className="flex items-start space-x-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0">
        <Check className="w-6 h-6 text-orvion-green" />
      </div>
      <span className="text-lg text-orvion-dark text-left">{children}</span>
    </motion.li>
  )
} 