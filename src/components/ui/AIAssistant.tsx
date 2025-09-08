"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypingAnimation } from "./TypingAnimation";

export function AIAssistant() {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-t border-cyan-500/20"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-4">
          {/* AI Robot Icon */}
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73C13.6 6.07 14 6.74 14 7.5C14 8.33 13.33 9 12.5 9C12.22 9 11.96 8.93 11.73 8.8C11.39 9.4 10.74 9.8 10 9.8C9.26 9.8 8.61 9.4 8.27 8.8C8.04 8.93 7.78 9 7.5 9C6.67 9 6 8.33 6 7.5C6 6.74 6.4 6.07 7 5.73C6.4 5.39 6 4.74 6 4C6 2.9 6.9 2 8 2C8.74 2 9.39 2.4 9.73 3C10.07 2.4 10.74 2 11.5 2H12Z"
                  fill="currentColor"
                />
                <path
                  d="M12 10C15.31 10 18 12.69 18 16C18 19.31 15.31 22 12 22C8.69 22 6 19.31 6 16C6 12.69 8.69 10 12 10ZM12 12C9.79 12 8 13.79 8 16C8 18.21 9.79 20 12 20C14.21 20 16 18.21 16 16C16 13.79 14.21 12 12 12Z"
                  fill="currentColor"
                  opacity="0.7"
                />
                <circle cx="10" cy="15" r="1" fill="currentColor" />
                <circle cx="14" cy="15" r="1" fill="currentColor" />
                <path
                  d="M10 17.5C10 17.5 11 18.5 12 18.5C13 18.5 14 17.5 14 17.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-cyan-400/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* AI Assistant Text */}
          <div className="flex-1 max-w-md">
            {showTyping ? (
              <TypingAnimation
                text="💡 Hi! I'm KIT – Krushna's Digital Brain"
                speed={60}
                className="text-sm md:text-base font-medium text-white"
              />
            ) : (
              <div className="text-sm md:text-base font-medium text-white opacity-0">
                💡 Hi! I'm KIT – Krushna's Digital Brain
              </div>
            )}
          </div>

          {/* Subtle neon accent line */}
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
