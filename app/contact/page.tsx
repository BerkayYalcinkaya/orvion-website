"use client"

import { Button } from "@/components/ui/button"
import { Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Ready to experience the future of mobile AI? Let's start a conversation.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto w-full">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-white/70">contact@orviondigital.co</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/">
                <Button className="bg-white text-gray-900 hover:bg-white/90 px-8 py-6 rounded-full text-lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Orvion
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-white/60">
        <p>&copy; 2025 Orvion Digital. All rights reserved.</p>
      </footer>
    </div>
  )
}
