"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function KitAI() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    // Add a subtle interaction feedback
    setTimeout(() => setIsActive(false), 2000);
  };

  return (
    <div className="fixed top-6 left-6 z-50">
      <motion.button
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-purple-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full hover:bg-gradient-to-r hover:from-teal-500/30 hover:to-purple-500/30 transition-all duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* KIT AI Profile Image */}
        <motion.div
          className="relative"
          animate={isActive ? { 
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0]
          } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-red-500 overflow-hidden bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center relative">
            <img 
              src="/ai.jpg" 
              alt="KIT AI" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to brain emoji if image fails
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback content */}
            <div className="absolute inset-0 flex items-center justify-center text-red-500 text-xs font-bold" style={{ display: 'none' }}>
              🧠
            </div>
          </div>
          
          {/* Pulsing red effect when active */}
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-500 bg-red-400/20"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 1, repeat: 2 }}
            />
          )}
        </motion.div>

        {/* KIT AI Label */}
        <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
          KIT AI
        </span>
      </motion.button>
    </div>
  );
}
