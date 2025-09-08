"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { IconSchool, IconCalendar, IconTrophy, IconX } from '@tabler/icons-react'

const educationData = [
  {
    degree: '12th Grade – Science',
    institution: 'Shramik Junior College, Sangamner',
    period: '2021 – 2023',
    cgpa: '80%',
    description: 'Completed higher secondary education in Science stream with strong foundation in Mathematics, Physics, and Chemistry, building the groundwork for my computer science journey.',
    color: 'from-green-500 to-emerald-500',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
  },
  {
    degree: 'B.E. Computer Engineering',
    institution: 'Parvatibai Genba Moze College of Engineering',
    period: '2023 – 2027',
    cgpa: 'CGPA 8+',
    description: 'Pursuing Bachelor of Engineering in Computer Engineering with focus on AI, Cloud Computing, Software Development, and Cybersecurity. Embracing a continuous growth mindset and hands-on learning approach.',
    color: 'from-blue-500 to-purple-500',
    subjects: ['Data Structures', 'Algorithms', 'Web Development', 'Database Management', 'Computer Networks', 'Cybersecurity']
  }
]

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EducationModal({ isOpen, onClose }: EducationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="w-full h-full bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden"
                 style={{
                   background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,40,0.95) 100%)',
                   boxShadow: '0 0 60px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(255, 0, 255, 0.1)'
                 }}>
              
              {/* Header */}
              <div className="relative p-8 border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      🧑‍🎓 Education Journey
                    </h2>
                    <p className="text-gray-300 text-lg">
                      My academic path and educational achievements
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                  >
                    <IconX className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 h-full overflow-y-auto">
                <div className="space-y-8 max-w-4xl mx-auto">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-6 mb-6">
                          <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${edu.color} rounded-full shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <IconSchool className="w-10 h-10 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {edu.degree}
                              </h3>
                              <div className="flex items-center gap-3">
                                <IconTrophy className={`w-6 h-6 text-yellow-400`} />
                                <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-white text-lg font-bold shadow-lg`}>
                                  {edu.cgpa}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-2xl text-gray-300 font-medium mb-3">
                              {edu.institution}
                            </p>
                            
                            <div className="flex items-center text-gray-400 text-lg mb-4">
                              <IconCalendar className="w-5 h-5 mr-3" />
                              {edu.period}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                          {edu.description}
                        </p>

                        {/* Subjects */}
                        <div>
                          <h4 className="text-white font-semibold mb-3 text-lg">Key Subjects:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((subject, subIndex) => (
                              <motion.span
                                key={subject}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (index * 0.2) + (subIndex * 0.1) }}
                                className={`px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} bg-opacity-20 border border-white/20 text-white text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                              >
                                {subject}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
