"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBriefcase, IconCode, IconUsers } from "@tabler/icons-react";

const opportunities = [
  {
    id: "part-time",
    title: "Part-time Positions",
    icon: <IconBriefcase className="w-8 h-8" />,
    description: "Looking for entry-level to junior roles where I can apply my skills and continue learning.",
    color: "from-green-400 to-emerald-500"
  },
  {
    id: "freelance",
    title: "Freelance Projects",
    icon: <IconCode className="w-8 h-8" />,
    description: "Available for short to medium-term projects in web development and UI/UX implementation.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: "collaborations",
    title: "Collaborations",
    icon: <IconUsers className="w-8 h-8" />,
    description: "Interested in collaborating on open-source projects or innovative web applications.",
    color: "from-purple-400 to-pink-500"
  }
];

export function OpenToWork() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden" id="open-to-work">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-green-500/20 border border-yellow-500/30 rounded-full mb-8"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(255, 255, 0, 0.3)",
                "0 0 40px rgba(255, 255, 0, 0.5)",
                "0 0 20px rgba(255, 255, 0, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 font-semibold text-lg">Open to Work</span>
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text mb-6">
            I&apos;m Currently Available for Opportunities
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I&apos;m actively seeking new opportunities in frontend and full-stack development where I can 
            contribute my skills and grow as a developer. Currently open to:
          </p>
        </motion.div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="group relative"
            >
              {/* Glowing border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${opportunity.color} rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-300`} />
              
              {/* Card content */}
              <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:border-white/30 transition-all duration-300">
                <div className="text-center">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${opportunity.color} mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">
                      {opportunity.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all duration-300">
                    {opportunity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 text-center"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-300 font-medium">Available: 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-gray-300 font-medium">Location: Remote | On-site</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-gray-300 font-medium">Working Hours: Flexible</span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-green-500 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let&apos;s Work Together</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
