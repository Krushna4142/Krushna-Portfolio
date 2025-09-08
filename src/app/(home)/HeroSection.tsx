"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Link from 'next/link'
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import { HackerNameAnimation, WordByWordAnimation } from "@/components/ui/TypingAnimation";
import { ProfilePicture } from "./PofilePicture";
import TwoColumnGrid from "./TwoColumnGrid";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  
  // Glitch-style name animation
  const [isGlitching, setIsGlitching] = useState(false)
  const nameTexts = ["Krushna", "|{₹μ$|-|N@"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => {
        setIsGlitching(false)
      }, 200)
    }, 4000)
    return () => clearInterval(interval)
  }, [nameTexts.length])

  return (
    <HeroHighlight containerClassName="min-h-screen">
      <TwoColumnGrid align="center" className="min-h-screen" cellClassName="bg-transparent py-30 rounded-lg">
        <ProfilePicture />
        <motion.div
          className="flex flex-col justify-center order-2 lg:order-1 cta-header"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          id="welcome"
        >
          {/* Centered Name Box - Shivam Style */}
          <motion.div
            className="flex justify-center items-center mb-8 lg:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative px-8 py-4 bg-black/20 backdrop-blur-lg border border-cyan-500/20 rounded-2xl shadow-2xl">
              {/* Subtle glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-sm" />
              <div className="relative z-10">
                <HackerNameAnimation />
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            className="space-y-3 lg:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight hero-head">
              <WordByWordAnimation text="Full Stack Developer" className="block text-white mb-2" />
              <span className="block">
                <Highlight className="text-black dark:text-white">
                  <WordByWordAnimation text="AI, Cloud & Cybersecurity" className="inline" />
                </Highlight> 
                <WordByWordAnimation text=" Enthusiast" className="inline" />
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base lg:text-lg text-gray-300 mt-4 lg:mt-6 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="inline-block mr-2"
              animate={{
                textShadow: [
                  "0 0 8px rgba(255, 255, 0, 0.6), 0 0 16px rgba(255, 255, 0, 0.4)",
                  "0 0 12px rgba(255, 255, 0, 0.8), 0 0 24px rgba(255, 255, 0, 0.5)",
                  "0 0 8px rgba(255, 255, 0, 0.6), 0 0 16px rgba(255, 255, 0, 0.4)"
                ],
                filter: [
                  "brightness(1) drop-shadow(0 0 8px rgba(255, 255, 0, 0.6))",
                  "brightness(1.2) drop-shadow(0 0 12px rgba(255, 255, 0, 0.8))",
                  "brightness(1) drop-shadow(0 0 8px rgba(255, 255, 0, 0.6))"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              💡
            </motion.span>
            "            &quot;Code. Create. Innovate. Building SaaS, AI &amp; Cloud-powered solutions.&quot;"
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-6 lg:mt-8 button-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              style={{ willChange: 'transform' }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 500, damping: 25, duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href="#projects"
                className="group relative px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl overflow-hidden color-btn-wrapper block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:scale-110 color-btn" />
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(147, 51, 234, 0.3)",
                      "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4)",
                      "0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(147, 51, 234, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <span className="relative text-white font-medium text-sm lg:text-base">Explore My Work</span>
              </Link>
            </motion.div>
            
            <motion.div
              style={{ willChange: 'transform' }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 500, damping: 25, duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <a
                href="/resume/Krushna_Nawale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 group-hover:scale-110" />
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(16, 185, 129, 0.3)",
                      "0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(16, 185, 129, 0.4)",
                      "0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(16, 185, 129, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <span className="relative text-white font-medium text-sm lg:text-base">📄 View Resume</span>
              </a>
            </motion.div>
            
            <motion.div
              style={{ willChange: 'transform' }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { type: "spring", stiffness: 500, damping: 25, duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href="#contact"
                className="group relative px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl overflow-hidden block"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:scale-110" />
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)",
                      "0 0 25px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.2)",
                      "0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <span className="relative text-white font-medium text-sm lg:text-base">Let&apos;s Collaborate</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>


      </TwoColumnGrid>

      {/* Right content - Profile Image */}

      {/* Scroll progress bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
        style={{ scaleX }}
      />
    </HeroHighlight>
  )
}