"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Apple, Smartphone, Heart, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Header } from "@/components/ui/header"

const MotionCard = motion(Card)

export default function NutraiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="w-[200px] md:w-[250px] lg:w-[300px]">
                  <Image
                    src="/nutrai_logo.png"
                    alt="Nutrai Logo"
                    width={300}
                    height={300}
                    className="h-auto w-full"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center space-y-4 text-center lg:text-left"
              >
                <Badge className="bg-green-100 text-green-800 border-green-200 w-fit mx-auto lg:mx-0">
                  AI-Powered Nutrition
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
                  Nutrai
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                  Your personal AI nutritionist for healthier living
                </p>
                <p className="text-gray-600">
                  Get personalized meal plans, nutrition advice, and health insights powered by artificial intelligence.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-6 justify-center lg:justify-start">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Apple className="w-4 h-4 mr-2" />
                    Download on App Store
                  </Button>
                  <Link href="/nutrai/privacy">
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                      <Shield className="w-4 h-4 mr-2" />
                      Privacy Policy
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Why Choose Nutrai?
              </h2>
              <p className="max-w-[600px] mx-auto text-gray-600">
                Experience the future of nutrition with AI-powered insights and personalized recommendations.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Personalized Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get customized meal plans and nutrition advice tailored to your health goals and preferences.
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">AI-Powered Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Advanced AI algorithms analyze your data to provide intelligent nutrition recommendations.
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Privacy First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Your health data is protected with industry-leading security and privacy measures.
                  </p>
                </CardContent>
              </MotionCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-green-600">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-8 text-center text-white"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Nutrition?
              </h2>
              <p className="max-w-[600px] text-green-100 text-lg">
                Join thousands of users who have already improved their health with Nutrai.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-green-600 hover:bg-green-50">
                  <Apple className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
                <Link href="/nutrai/privacy">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                    <Shield className="w-4 h-4 mr-2" />
                    Privacy Policy
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/orvion_logo.png"
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
