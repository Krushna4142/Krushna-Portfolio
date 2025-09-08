"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);

  return (
    <section className="py-20 px-4 bg-black" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          {/* About Me Title */}
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-inter px-8 py-4">
              About Me
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
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="p-6"
              onMouseEnter={() => setIsDescriptionHovered(true)}
              onMouseLeave={() => setIsDescriptionHovered(false)}
            >
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-gray-300 font-inter"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm a <span className="text-teal-400 font-semibold">Full Stack Developer</span> passionate about AI-driven, cloud-based, and secure applications. Currently pursuing <span className="text-purple-400 font-semibold">B.E. 3rd year Computer Engineering</span>. Specialized in modern web development, data analytics, and cybersecurity.
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-gray-300 font-inter mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Always curious, I love solving real-world problems by developing efficient, elegant software. Looking for opportunities to contribute, grow, and collaborate on innovative projects.
              </motion.p>
            </motion.div>
          </div>
          
          {/* Subtle accent line */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
