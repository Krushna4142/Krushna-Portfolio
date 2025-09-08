"use client";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useState, useEffect } from "react";

const StyledText = ({ isPhotoHovered }: { isPhotoHovered: boolean }) => (
  <div className="space-y-6 text-lg leading-relaxed">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-gray-300"
    >
      I'm{" "}
      <span className="font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Krushna Nawale
      </span>
      , a passionate{" "}
      <motion.span 
        className={`font-semibold transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        Full Stack Developer
      </motion.span>{" "}
      with a strong interest in{" "}
      <motion.span 
        className={`font-semibold transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        Cybersecurity
      </motion.span> and{" "}
      <motion.span 
        className={`font-semibold transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        Cloud technologies
      </motion.span>.
    </motion.p>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-gray-300"
    >
      I thrive on building{" "}
      <motion.span 
        className={`font-medium transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        impactful
      </motion.span>,{" "}
      <motion.span 
        className={`font-medium transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        secure
      </motion.span>, and{" "}
      <motion.span 
        className={`font-medium transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        scalable applications
      </motion.span>{" "}
      that blend{" "}
      <motion.span 
        className={`font-medium italic transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        creativity
      </motion.span> with{" "}
      <motion.span 
        className={`font-medium italic transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        performance
      </motion.span>.
    </motion.p>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-gray-300"
    >
      With a{" "}
      <motion.span 
        className={`font-semibold transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        problem-solving mindset
      </motion.span>,{" "}
      <motion.span 
        className={`font-semibold transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        curiosity
      </motion.span>, and{" "}
      <motion.span 
        className={`font-semibold transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        hard work
      </motion.span>, I aim to craft{" "}
      <motion.span 
        className={`font-bold transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        digital solutions
      </motion.span>{" "}
      that empower people, protect data, and drive innovation in a{" "}
      <motion.span 
        className={`font-medium transition-colors duration-300 ${isPhotoHovered ? 'text-yellow-400' : 'text-purple-400'}`}
        animate={{
          textShadow: isPhotoHovered ? "0 0 8px rgba(255, 255, 0, 0.6)" : "0 0 0px rgba(147, 51, 234, 0)"
        }}
      >
        connected world
      </motion.span>
      .
    </motion.p>
    
    {/* Decorative elements */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="flex items-center justify-center mt-8"
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full" />
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      </div>
    </motion.div>
  </div>
);

export function ParagraphSection() {
    const [isPhotoHovered, setIsPhotoHovered] = useState(false);

    useEffect(() => {
        const handlePhotoHover = (event: CustomEvent) => {
            setIsPhotoHovered(event.detail.isHovered);
        };

        window.addEventListener('photoHover', handlePhotoHover as EventListener);
        
        return () => {
            window.removeEventListener('photoHover', handlePhotoHover as EventListener);
        };
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
        className="max-w-4xl mx-auto p-6 hover:scale-105 transition-transform duration-300 cursor-pointer relative"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
          borderRadius: '16px',
          border: '1px solid rgba(147, 51, 234, 0.2)',
          boxShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
          animation: 'breathe 3s ease-in-out infinite'
        }}
      >
        <style jsx>{`
          @keyframes breathe {
            0%, 100% {
              box-shadow: 0 0 30px rgba(147, 51, 234, 0.3), 0 0 60px rgba(59, 130, 246, 0.2);
              border-color: rgba(147, 51, 234, 0.2);
            }
            50% {
              box-shadow: 0 0 50px rgba(147, 51, 234, 0.5), 0 0 100px rgba(59, 130, 246, 0.3), 0 0 150px rgba(236, 72, 153, 0.2);
              border-color: rgba(147, 51, 234, 0.4);
            }
          }
        `}</style>
        <StyledText isPhotoHovered={isPhotoHovered} />
      </motion.div>
    );
}
