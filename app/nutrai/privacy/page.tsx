"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, FileText, Calendar, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Header } from "@/components/ui/header"

const MotionCard = motion(Card)

export default function NutraiPrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1">


        {/* Full Privacy Policy */}
        <section id="policy" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Privacy Policy
                </h2>
                <p className="text-gray-600">
                  Last updated: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">1. Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Personal Information</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Name and contact information</li>
                      <li>Profile information and preferences</li>
                      <li>Health and nutrition data you choose to share</li>
                      <li>Device information and usage statistics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Automatically Collected Information</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>Device identifiers and IP addresses</li>
                      <li>App usage patterns and interactions</li>
                      <li>Crash reports and performance data</li>
                      <li>Location data (with your consent)</li>
                    </ul>
                  </div>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">2. How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Provide personalized nutrition recommendations and meal plans</li>
                    <li>Improve our app functionality and user experience</li>
                    <li>Send important updates and notifications</li>
                    <li>Analyze usage patterns to enhance our services</li>
                    <li>Ensure app security and prevent fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">3. Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                    <li>With trusted service providers who assist in app operations</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">4. Data Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>End-to-end encryption for sensitive data</li>
                    <li>Regular security audits and updates</li>
                    <li>Secure data storage and transmission</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">5. Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Objection:</strong> Object to certain processing activities</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">6. Data Retention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We retain your personal information only for as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Provide our services to you</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Improve our services</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">7. Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Nutrai is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">8. Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>Posting the updated policy in the app</li>
                    <li>Sending you an email notification</li>
                    <li>Displaying a prominent notice in the app</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Your continued use of Nutrai after any changes constitutes acceptance of the updated policy.
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">9. Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">contact@orviondigital.co</span>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            </motion.div>
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
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
