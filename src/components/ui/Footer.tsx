"use client"
import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react'
import { useState } from 'react'

export function Footer() {
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false)

  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 pointer-events-none"
                animate={{
                  opacity: isDescriptionHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Top left corner */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                     style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))' }} />
                {/* Top right corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                     style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))' }} />
                {/* Bottom left corner */}
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                     style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))' }} />
                {/* Bottom right corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-yellow-400 shadow-lg shadow-yellow-400/50" 
                     style={{ filter: 'drop-shadow(0 0 8px rgba(255, 255, 0, 0.8))' }} />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                KIT – Krushna In Tech
              </h3>
            </div>
            <p 
              className="text-gray-400 max-w-md mx-auto cursor-pointer"
              onMouseEnter={() => setIsDescriptionHovered(true)}
              onMouseLeave={() => setIsDescriptionHovered(false)}
            >
              Building innovative solutions with AI, Cloud & Cybersecurity
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <motion.a
              href="mailto:krushnanawale4142@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/20 transition-all duration-300"
            >
              <IconMail className="w-5 h-5 text-gray-300 hover:text-white" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/krushna4142"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/20 transition-all duration-300"
            >
              <IconBrandLinkedin className="w-5 h-5 text-gray-300 hover:text-white" />
            </motion.a>
            <motion.a
              href="https://github.com/Krushna4142"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/20 transition-all duration-300"
            >
              <IconBrandGithub className="w-5 h-5 text-gray-300 hover:text-white" />
            </motion.a>
          </div>

          <div className="pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 KIT – Krushna In Tech. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
