// @ts-nocheck
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Zap, Smartphone, Sparkles, Apple, Play, ArrowRight, Camera, Video, Star, Share2, Wand2, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ListItem } from "@/components/ui/list-item"
import { IPhoneMockup } from "@/components/ui/iphone-mockup"

const MotionCard = motion(Card)

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex items-center justify-center bg-[#96213A] relative overflow-hidden py-12 md:py-0">
          <div className="container px-6 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center justify-center space-y-12 md:space-y-12 text-center max-w-5xl mx-auto">
              {/* Logo - Back on top and bigger */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[350px] md:w-[500px] lg:w-[650px] xl:w-[750px]"
              >
                <Image
                  src="/logo-transparent.svg"
                  alt="Orvion Logo"
                  width={254}
                  height={77}
                  className="h-auto w-full"
                  priority
                />
              </motion.div>

              {/* Text content - Back below logo and smaller */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6 md:space-y-4"
              >
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide text-white/90 font-lora max-w-3xl mx-auto px-4">
                  Creating what's next in AI Native Mobile
                </h1>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white/70 max-w-2xl mx-auto px-4">
                  Experience the next generation of AI-powered mobile applications that transform how you live, work, and create.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-4"
              >
                <Link href="#apps">
                  <Button className="bg-white text-[#96213A] hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg">
                    Explore Our Apps
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6 rounded-full"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nutrai App Section - Full Screen */}
          <section id="apps" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-nutrai-blue via-nutrai-blue to-blue-600 relative overflow-hidden py-16 md:py-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
            
            <div className="container px-6 md:px-8 lg:px-16 mx-auto relative z-10">
              <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 md:gap-8 lg:gap-16 items-center">
                {/* Left Side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col space-y-8 md:space-y-6 text-white"
                >
                  {/* App Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 md:w-20 md:h-20 rounded-3xl bg-[#3253a1] p-3 flex items-center justify-center shadow-lg">
                      <Image
                        src="/nutrai_logo.png"
                        alt="Nutrai"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold">Nutrai</h3>
                      <p className="text-lg md:text-lg text-white/80 mt-2">AI Nutrition Assistant</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg">
                    Your personal AI nutritionist that helps you achieve your health goals. 
                    Get personalized meal plans, track calories, and receive expert nutrition 
                    advice powered by advanced AI technology.
                  </p>

                  {/* Store Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center pt-2">
                    <Link href="https://apps.apple.com/tr/app/nutrai-diyet-kalori-takibi/id6746746820?l=tr" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/app-store.png"
                        alt="Download on the App Store"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                      />
                    </Link>
                    <Link href="https://play.google.com" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/google-play.png"
                        alt="Get it on Google Play"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                      />
                    </Link>
                  </div>
                </motion.div>

                {/* Center - iPhone Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center py-8 md:py-0"
                >
                  <IPhoneMockup 
                    logoSrc="/nutrai_logo.png" 
                    logoAlt="Nutrai App"
                    backgroundColor="bg-[#3253a1]"
                  />
                </motion.div>

                {/* Right Side - Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col items-center lg:items-start space-y-10 md:space-y-8 text-white"
                >
                  {/* Badge */}
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                    <Award className="w-6 h-6" />
                    <span className="text-lg font-semibold">#1 Health App</span>
                  </div>

                  <div className="w-full max-w-xs space-y-8 md:space-y-6">
                    {/* Downloads */}
                    <div className="text-center lg:text-left">
                      <div className="text-5xl md:text-6xl font-bold">2M+</div>
                      <div className="text-xl text-white/80 mt-3 md:mt-2">DOWNLOADS</div>
                    </div>

                    <div className="h-px bg-white/20"></div>

                    {/* Rating */}
                    <div className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <span className="text-5xl md:text-6xl font-bold">4.8</span>
                        <div className="flex space-x-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-6 h-6 fill-yellow-400"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="text-xl text-white/80 mt-3 md:mt-2">RATING</div>
                    </div>

                    <div className="h-px bg-white/20"></div>

                    {/* Users */}
                    <div className="text-center lg:text-left">
                      <div className="text-5xl md:text-6xl font-bold">500K+</div>
                      <div className="text-xl text-white/80 mt-3 md:mt-2">ACTIVE USERS</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Genso App Section - Full Screen */}
          <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-genso-navy via-genso-navy to-gray-900 relative overflow-hidden py-16 md:py-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-genso-cyan/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
            
            <div className="container px-6 md:px-8 lg:px-16 mx-auto relative z-10">
              <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 md:gap-8 lg:gap-16 items-center">
                {/* Left Side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col space-y-8 md:space-y-6 text-white"
                >
                  {/* App Icon & Title */}
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 md:w-20 md:h-20 rounded-3xl bg-[#0b132b] p-3 flex items-center justify-center shadow-lg">
                      <Image
                        src="/genso-g-logo.png"
                        alt="Genso"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold">Genso</h3>
                      <p className="text-lg md:text-lg text-genso-cyan mt-2">Generative Social Media</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg">
                    The first-of-its-kind generative social media platform. Experience a 
                    TikTok-style feed powered entirely by AI-generated videos. Create stunning 
                    content using industry-leading models like Veo3, Sora, and Kling.
                  </p>

                  {/* Store Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center pt-2">
                    <Link href="https://apps.apple.com" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/app-store.png"
                        alt="Download on the App Store"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                      />
                    </Link>
                    <Link href="https://play.google.com" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image
                        src="/google-play.png"
                        alt="Get it on Google Play"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                      />
                    </Link>
                  </div>
                </motion.div>

                {/* Center - iPhone Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center py-8 md:py-0"
                >
                  <IPhoneMockup 
                    logoSrc="/genso-g-logo.png" 
                    logoAlt="Genso App"
                    backgroundColor="bg-[#0b132b]"
                  />
                </motion.div>

                {/* Right Side - Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col items-center lg:items-start space-y-10 md:space-y-8 text-white"
                >
                  {/* Badge */}
                  <div className="flex items-center space-x-3 bg-genso-cyan/10 backdrop-blur-sm px-6 py-3 rounded-full border border-genso-cyan/30">
                    <Award className="w-6 h-6 text-genso-cyan" />
                    <span className="text-lg font-semibold text-genso-cyan">#1 Creative App</span>
                  </div>

                  <div className="w-full max-w-xs space-y-8 md:space-y-6">
                    {/* Downloads */}
                    <div className="text-center lg:text-left">
                      <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-genso-cyan to-blue-400 bg-clip-text text-transparent">
                        Coming
                      </div>
                      <div className="text-xl text-white/80 mt-3 md:mt-2">SOON</div>
                    </div>

                    <div className="h-px bg-genso-cyan/20"></div>

                    {/* AI Models */}
                    <div className="text-center lg:text-left">
                      <div className="text-4xl md:text-5xl font-bold text-genso-cyan">3+</div>
                      <div className="text-xl text-white/80 mt-3 md:mt-2">AI MODELS</div>
                      <div className="text-sm text-white/60 mt-2 md:mt-1">Veo3 • Sora • Kling</div>
                    </div>

                    <div className="h-px bg-genso-cyan/20"></div>

                    {/* Content Types */}
                    <div className="text-center lg:text-left">
                      <div className="text-4xl md:text-5xl font-bold text-genso-cyan">∞</div>
                      <div className="text-xl text-white/80 mt-3 md:mt-2">POSSIBILITIES</div>
                      <div className="text-sm text-white/60 mt-2 md:mt-1">Create • Share • Explore</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo-transparent.svg"
                alt="Orvion Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-semibold">Orvion Digital</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/nutrai/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2025 Orvion Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
