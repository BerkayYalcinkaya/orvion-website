// @ts-nocheck
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, Smartphone, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ListItem } from "@/components/ui/list-item"

const MotionCard = motion(Card)

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-8 lg:px-12 h-20 flex items-center border-b border-gray-200">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo_transparent.png"
            alt="Orvion Logo"
            width={40}
            height={40}
            style={{ filter: "brightness(0) saturate(100%) invert(13%) sepia(50%) saturate(2588%) hue-rotate(125deg) brightness(94%) contrast(96%)" }}
          />
          <span className="ml-3 text-3xl font-bold text-orvion-green font-sans">Orvion</span>
        </Link>
        <nav className="ml-auto flex items-center gap-6 sm:gap-8">
          <Link
            href="#apps"
            className="text-lg font-medium text-orvion-dark hover:text-orvion-green transition-colors"
          >
            Apps
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium text-orvion-dark hover:text-orvion-green transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium text-orvion-dark hover:text-orvion-green transition-colors"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <Image
                  src="/logo_transparent.png"
                  alt="Orvion Logo"
                  width={300}
                  height={300}
                  style={{ filter: "brightness(0) saturate(100%) invert(13%) sepia(50%) saturate(2588%) hue-rotate(125deg) brightness(94%) contrast(96%)" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center space-y-4 text-center lg:text-left"
              >
                <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none text-orvion-green font-sans">
                  ORVION
                </h1>
                <p className="text-4xl text-orvion-green font-lora">Orchestrating Vision</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-6">
                  <Link href="#apps">
                    <Button className="bg-orvion-green hover:bg-orvion-green/90 text-white">Explore Our Apps</Button>
                  </Link>
                  <Link href="#about">
                    <Button
                      variant="outline"
                      className="border-orvion-blue text-orvion-blue hover:bg-orvion-blue hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <motion.section
          id="about"
          className="w-full py-20 md:py-32 bg-orvion-dark/5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge className="bg-orvion-green text-white">Our Story</Badge>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-orvion-dark">
                  Pioneering the Next Wave of Mobile AI
                </h2>
                <motion.p
                  className="max-w-[800px] text-orvion-dark/80 md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  The idea for Orvion was born in early 2025 with a simple yet ambitious goal: to bring a new perspective
                  to the non-gaming mobile app sector. Today, as a corporation, we are at the forefront of a market
                  exploding with potential. The global mobile AI market is projected to grow from $2.81 billion in 2023
                  to an astounding <b>$128 billion by 2033</b>. We are poised to lead this charge.
                </motion.p>
              </div>
              <ul className="grid gap-6 max-w-3xl mx-auto">
                <ListItem>
                  We are <b>laser-focused on creating intelligent, user-centric applications</b> that transform everyday
                  experiences.
                </ListItem>
                <ListItem>
                  Our team is dedicated to{" "}
                  <b>
                    pushing the boundaries of what's possible in personalized health, lifestyle management, and beyond.
                  </b>
                </ListItem>
                <ListItem>
                  Join us as we build the <b>future of mobile AI</b>, one innovative app at a time.
                </ListItem>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Apps Section */}
        <motion.section
          id="apps"
          className="w-full py-12 md:py-24 lg:py-32 bg-orvion-dark/5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-orvion-green text-white">Our Products</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orvion-dark">
                  AI-Powered Mobile Apps
                </h2>
                <p className="max-w-[900px] text-orvion-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our flagship applications that leverage cutting-edge AI to solve real-world problems
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* Nutrai App */}
              <MotionCard
                className="border-2 border-orvion-green/20 hover:border-orvion-green/40 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <CardHeader className="items-center">
                  <Image src="/nutrai_logo.png" alt="Nutrai Logo" width={80} height={80} className="rounded-xl" />
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardTitle className="text-orvion-dark">Nutrai</CardTitle>
                  <CardDescription>Diet & Calorie Tracking</CardDescription>
                  <p className="text-orvion-dark/80">
                    Revolutionary diet tracking that analyzes your meals with just one photo. Get personalized, tailored
                    diet plans for every day based on AI-powered nutritional analysis.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-orvion-green/10 text-orvion-green">
                      Photo Analysis
                    </Badge>
                    <Badge variant="secondary" className="bg-orvion-blue/10 text-orvion-blue">
                      Personalized Plans
                    </Badge>
                    <Badge variant="secondary" className="bg-orvion-dark/10 text-orvion-dark">
                      Calorie Tracking
                    </Badge>
                  </div>
                  <Button className="w-full bg-orvion-green hover:bg-orvion-green/90 text-white">Coming Soon</Button>
                </CardContent>
              </MotionCard>

              {/* Dermai App */}
              <MotionCard
                className="border-2 border-orvion-blue/20 hover:border-orvion-blue/40 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <CardHeader className="items-center">
                  <Image src="/dermai_logo.png" alt="Dermai Logo" width={80} height={80} className="rounded-xl" />
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardTitle className="text-orvion-dark">Dermai</CardTitle>
                  <CardDescription>Skin Care & Product Scanner</CardDescription>
                  <p className="text-orvion-dark/80">
                    Advanced skin tracking technology that creates personalized skincare routines. Features an
                    intelligent product scanner to analyze and recommend skincare products.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-orvion-blue/10 text-orvion-blue">
                      Skin Analysis
                    </Badge>
                    <Badge variant="secondary" className="bg-orvion-green/10 text-orvion-green">
                      Product Scanner
                    </Badge>
                    <Badge variant="secondary" className="bg-orvion-dark/10 text-orvion-dark">
                      Routine Tracking
                    </Badge>
                  </div>
                  <Button className="w-full bg-orvion-blue hover:bg-orvion-blue/90 text-white">Coming Soon</Button>
                </CardContent>
              </MotionCard>
            </div>
          </div>
        </motion.section>

        {/* CTA & Contact Section */}
        <motion.section
          id="contact"
          className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-r from-orvion-green to-orvion-blue"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 pb-8 border-b border-white/30">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Experience the Future?
                </h2>
                <p className="mx-auto max-w-[600px] text-white/90 md:text-xl">
                  Join us on our journey to revolutionize mobile AI applications. Stay updated on our latest
                  developments and be the first to try our&nbsp;apps.
                </p>
              </div>
              <div className="flex w-full max-w-xs gap-4">
                <Button className="flex-1 bg-white text-orvion-dark hover:bg-white/90">Get Notified</Button>
                <Link href="mailto:contact@orviondigital.co" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-orvion-dark bg-transparent"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter text-white">Contact Us</h2>
                <p className="mx-auto max-w-[600px] text-white/80 md:text-lg">
                  Rather than that, for further questions, please don't hesitate to contact us.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-1">
                <p className="text-lg font-semibold text-white">contact@orviondigital.co</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-orvion-dark/60">&copy; 2024 Orvion. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs text-orvion-dark/80 hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs text-orvion-dark/80 hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
