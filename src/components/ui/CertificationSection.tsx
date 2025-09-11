"use client"
import { motion } from 'framer-motion'
import { IconExternalLink } from '@tabler/icons-react'
import { useState } from 'react'
import Image from 'next/image'

const  certifications = [
  {
    title: "OASIS INFOBYTE Web Development Internship",
    issuer: "Oasis Infobyte",
    year: "2025",
    pdfUrl: "/certificates/oasis-infobyte-certificate.pdf",
    thumbnail: "/oasis.png",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Deloitte Data Analytics Simulation",
    issuer: "Deloitte", 
    year: "2025",
    pdfUrl: "/certificates/Deloitte Australia's Data Analytics.pdf",
    thumbnail: "/data.png",
    color: "from-green-500 to-teal-500"
  },
  {
    title: "EA Software Engineering Simulation", 
    issuer: "Forage",
    year: "2025",
    pdfUrl: "/certificates/Electronic Arts-Software Engineering Job Simulation.pdf",
    thumbnail: "/ea.png",
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Goldman Sachs Operations Simulation",
    issuer: "Forage",
    year: "2025",
    pdfUrl: "/certificates/Goldman Sachs-Operations Job Simulation.pdf",
    thumbnail: "/gold.png",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Wire Cloud Metrics Internship Offer",
    issuer: "Wire Cloud Metrics",
    year: "2025",
    pdfUrl: "/certificates/internship offer from wire.pdf",
    thumbnail: "/wire.png",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Tata Data Visualization",
    issuer: "Tata",
    year: "2025", 
    pdfUrl: "/certificates/TATA-Data Visualisation  Empowering Business.pdf",
    thumbnail: "/tata.png",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Internship Common Aptitude Test",
    issuer: "ICAT",
    year: "2025",
    pdfUrl: "/certificates/internship studio certificate.pdf",
    thumbnail: "/icat.png",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS",
    year: "2025",
    pdfUrl: "/certificates/AWS-Solutions Architecture Job Simulation.pdf",
    thumbnail: "/AWS.png",
    color: "from-orange-500 to-yellow-500"
  }
]

export function CertificationSection() {
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <style jsx>{`
        @keyframes breathe {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1);
          }
          50% {
            box-shadow: 0 0 60px rgba(6, 182, 212, 0.6), 0 0 80px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(6, 182, 212, 0.2);
          }
        }
      `}</style>
      {/* Starry background dots */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-inter px-8 py-4">
              🏅 Certificate
            </h2>
            {/* Rectangular bracket border around title - appears only when description is hovered */}
            {isDescriptionHovered && (
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isDescriptionHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ willChange: 'opacity' }}
              >
                {/* Top-left corner */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-yellow-400" 
                     style={{ boxShadow: '0 0 10px rgba(255, 255, 0, 0.6)' }}></div>
                {/* Top-right corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-yellow-400"
                     style={{ boxShadow: '0 0 10px rgba(255, 255, 0, 0.6)' }}></div>
                {/* Bottom-left corner */}
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-yellow-400"
                     style={{ boxShadow: '0 0 10px rgba(255, 255, 0, 0.6)' }}></div>
                {/* Bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-yellow-400"
                     style={{ boxShadow: '0 0 10px rgba(255, 255, 0, 0.6)' }}></div>
              </motion.div>
            )}
          </div>
          
          {/* Description text - no border on text, only triggers title border */}
          <div>
            <motion.div
              className="p-4"
              onMouseEnter={() => setIsDescriptionHovered(true)}
              onMouseLeave={() => setIsDescriptionHovered(false)}
            >
              <p className="text-gray-300 text-lg max-w-2xl mx-auto font-inter">
                A collection of my professional certifications and course completions
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Responsive grid: 4 columns on desktop, 3 on tablet, 2 on mobile - matching skills section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-400/70 transition-all duration-500"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)',
                animation: 'breathe 3s ease-in-out infinite'
              }}
              onHoverStart={() => {
                // Add intense glow on hover
              }}
              onHoverEnd={() => {
                // Return to breathing animation
              }}
            >
              {/* Breathing neon background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-purple-500/5 rounded-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Enhanced glowing border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                   style={{
                     boxShadow: '0 0 40px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.4), inset 0 0 20px rgba(6, 182, 212, 0.2)',
                     animation: 'glow-pulse 2s ease-in-out infinite'
                   }} />
              
              {/* Certificate thumbnail - clickable */}
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-32 overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative p-2">
                  {/* Certificate image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={cert.thumbnail}
                      alt={`${cert.title} certificate`}
                      width={200}
                      height={120}
                      className="max-w-full max-h-full object-contain rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Click to view overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-md">
                      <div className="text-cyan-400 text-xs font-semibold bg-black/80 px-3 py-2 rounded-full border border-cyan-400/50 shadow-lg">
                        <div className="flex items-center gap-1">
                          <IconExternalLink className="w-3 h-3" />
                          <span>OPEN PDF</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                  
                  {/* Neon glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md" />
                </div>
              </a>
              
              {/* Certificate info */}
              <div className="p-3">
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-gray-400 text-xs mb-2">
                  {cert.issuer} • {cert.year}
                </p>
                
                {/* View Certificate link */}
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link cursor-pointer"
                >
                  <span className="text-xs font-medium">View Certificate</span>
                  <IconExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
              
              {/* Enhanced neon border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-500 opacity-0 group-hover:opacity-100" 
                   style={{
                     boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.1)'
                   }} />
              
              {/* Animated corner accents */}
              <div className="absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-1 right-1 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-1 left-1 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
