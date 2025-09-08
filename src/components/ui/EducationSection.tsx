"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shramik Junior College, Sangamner",
    duration: "2021 - 2023", 
    cgpa: "80%",
    description: "Completed science stream with strong foundation in mathematics, physics, and computer science fundamentals.",
    logo: "/hsc.jpg"
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Parvatibai Genba Moze College of Engineering",
    duration: "2023 - 2027",
    cgpa: "CGPA: 8+",
    description: "Pursuing comprehensive computer science education with focus on software development, algorithms, and emerging technologies.",
    logo: "/be.jpg"
  }
];

export function EducationSection() {
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);

  return (
    <section className="py-20 px-4 bg-black" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Education Title */}
          <div className="relative inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-inter px-8 py-4">
              🎓 Education
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
                Building a strong foundation in Computer Science & Full Stack development
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-teal-500/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1 font-inter group-hover:text-teal-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-teal-400 font-medium mb-1 font-inter">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 text-sm font-inter">
                    {edu.duration}
                  </p>
                </div>
                
                {/* Grade section with logo above */}
                <div className="mt-3 sm:mt-0 flex flex-col items-center">
                  {/* Logo with neon hover effect */}
                  <motion.div 
                    className="relative group/logo cursor-pointer mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover/logo:border-cyan-400 transition-all duration-300">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.degree} logo`}
                        className="w-full h-full object-cover transition-all duration-300 group-hover/logo:brightness-110"
                      />
                      {/* Neon glow effect on hover */}
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-sm"></div>
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 shadow-lg shadow-cyan-400/50"></div>
                    </div>
                    
                    {/* Animated neon ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover/logo:opacity-100"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ 
                        scale: [0.8, 1.2, 1],
                        opacity: [0, 1, 0.7],
                      }}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      style={{
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 10px rgba(34, 211, 238, 0.3)'
                      }}
                    />
                  </motion.div>
                  
                  {/* Grade badge below logo */}
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 text-teal-400 font-medium rounded-full text-sm">
                    {edu.cgpa}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed font-inter">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
