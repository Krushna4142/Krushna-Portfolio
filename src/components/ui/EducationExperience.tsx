"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const timelineData = [
  {
    title: 'Assistant Supervisor',
    organization: 'Forever, Pune',
    period: 'Jul 2025 –',
    periodSecond: 'Present',
    emoji: '💼',
    achievements: [
      'Implemented process improvements by optimizing workflows and team efficiency.',
      'Trained new staff on company policies, procedures, and job expectations.',
      'Analyzed business performance data to support management decision-making.',
      'Identified performance gaps and suggested actionable improvements.'
    ]
  },
  {
    title: 'Frontend Developer Trainee',
    organization: 'Wire Cloud Metrics, Pune',
    period: 'Apr 2025 –',
    periodSecond: 'Jun 2025',
    emoji: '💻',
    achievements: [
      'Designed and developed frontend interfaces using HTML, CSS, and JavaScript.',
      'Integrated API services for dynamic data display.',
      'Enhanced user experience by building responsive layouts and optimizing performance.'
    ]
  },
  {
    title: 'Web Development Intern',
    organization: 'Oasis Infobyte, Pune',
    period: 'Jan 2025 –',
    periodSecond: 'Mar 2025',
    emoji: '🌐',
    achievements: [
      'Developed web pages and features with React and Tailwind CSS.',
      'Troubleshot frontend issues, improving page load time and user interaction flow.',
      'Collaborated on small-scale full-stack web apps for internal clients.'
    ]
  },
  {
    title: 'Professional Simulations',
    organization: 'Forage Platform',
    period: '2025',
    periodSecond: '',
    emoji: '🎓',
    achievements: [
      'Completed Deloitte Data Analytics, Electronic Arts Software Engineering, and Goldman Sachs Operations simulations.',
      'Gained real-world problem-solving exposure, applying analytics, engineering, and operations practices.'
    ]
  }
]

export function EducationExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-20 px-4 bg-black" ref={containerRef} id="experience">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
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
            <motion.h2 
              className="text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              From Intern to Impact:
              <br />
              My Career Timeline
            </motion.h2>
          </div>
          <motion.p 
            className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onMouseEnter={() => setIsDescriptionHovered(true)}
            onMouseLeave={() => setIsDescriptionHovered(false)}
          >
            Every opportunity I've had has shaped my mindset, sharpened my skills, and brought me closer to becoming a world-class developer. Here's a glimpse into the timeline of internships, experiences, and moments that defined my path.
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-32 top-0 bottom-0 w-0.5 bg-gray-700/50">
            <motion.div 
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 shadow-lg"
              style={{ height: lineHeight }}
            />
          </div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start mb-16 last:mb-0 group hover:scale-105 transition-transform duration-200"
            >
              {/* Date Section - Left Side */}
              <div className="w-32 flex-shrink-0">
                <div className="text-right pr-8">
                  <div className="text-gray-400 text-lg font-medium">
                    {item.period}
                  </div>
                  {item.periodSecond && (
                    <div className="text-gray-400 text-lg font-medium">
                      {item.periodSecond}
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-white rounded-full border-4 border-black shadow-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </div>

              {/* Content Section - Right Side */}
              <div className="flex-1 ml-8">
                {/* Emoji */}
                <div className="text-3xl mb-3">
                  {item.emoji}
                </div>

                {/* Job Title and Organization */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {item.title} – {item.organization}
                  </h3>
                </div>
                
                {/* Achievements */}
                <div className="space-y-2">
                  {item.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
