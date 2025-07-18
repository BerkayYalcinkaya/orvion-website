
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#apps", label: "Apps" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="px-8 lg:px-12 h-20 flex items-center border-b border-gray-200 bg-white sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-bold text-orvion-green font-sans">Orvion Digital</span>
      </Link>
      <nav className="hidden md:flex ml-auto items-center gap-6 sm:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-lg font-medium text-orvion-dark hover:text-orvion-green transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="md:hidden ml-auto">
        <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-orvion-dark hover:text-orvion-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
} 