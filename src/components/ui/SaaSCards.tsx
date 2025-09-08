"use client"
import { motion } from 'framer-motion'
import { IconCalendar, IconTrendingUp, IconBolt, IconShield } from '@tabler/icons-react'
import { useState } from 'react'

const features = [
  {
    title: "Featured Challenges",
    description: "AI-powered coding challenges and problem-solving sessions",
    icon: IconBolt,
    color: "from-blue-500 to-cyan-500",
    stats: "15+ Completed"
  },
  {
    title: "Upcoming Appointments", 
    description: "Scheduled consultations and project discussions",
    icon: IconCalendar,
    color: "from-purple-500 to-pink-500",
    stats: "3 This Week"
  },
  {
    title: "Performance Metrics",
    description: "Real-time analytics and project success rates",
    icon: IconTrendingUp,
    color: "from-green-500 to-emerald-500",
    stats: "98% Success"
  },
  {
    title: "Security Audits",
    description: "Cybersecurity assessments and vulnerability testing",
    icon: IconShield,
    color: "from-orange-500 to-red-500",
    stats: "5+ Audits"
  }
]

export function SaaSCards() {
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false)

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 pointer-events-none"
              animate={{
                opacity: isDescriptionHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ willChange: 'opacity' }}
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Professional Dashboard
            </h2>
          </div>
          <p 
            className="text-gray-300 max-w-2xl mx-auto cursor-pointer"
            onMouseEnter={() => setIsDescriptionHovered(true)}
            onMouseLeave={() => setIsDescriptionHovered(false)}
          >
            Real-time insights and management tools for enhanced productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-medium`}>
                    {feature.stats}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
