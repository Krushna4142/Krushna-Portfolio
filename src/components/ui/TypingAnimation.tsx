"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

export function TypingAnimation({ text, speed = 100, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className={className}>
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </div>
  );
}

interface WordByWordAnimationProps {
  text: string;
  className?: string;
}

export function WordByWordAnimation({ text, className = "" }: WordByWordAnimationProps) {
  const words = text.split(' ');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.1,
            y: -5,
            transition: { type: "spring", stiffness: 500, damping: 25, duration: 0.25 }
          }}
          style={{ willChange: 'transform' }}
        >
          <motion.span
            animate={{
              textShadow: hoveredIndex === index 
                ? [
                    "0 0 8px rgba(139, 92, 246, 0.6)",
                    "0 0 16px rgba(139, 92, 246, 0.8)",
                    "0 0 8px rgba(139, 92, 246, 0.6)"
                  ]
                : "0 0 0px rgba(139, 92, 246, 0)"
            }}
            transition={{
              duration: 1.5,
              repeat: hoveredIndex === index ? Infinity : 0,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && ' '}
        </motion.span>
      ))}
    </span>
  );
}

export function HackerNameAnimation() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "KIT – KRUSHNA IN TECH";

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        // Typing forward
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        // Finished typing, wait 2 seconds then start deleting
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        setDisplayText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="text-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        className="flex justify-center items-center"
      >
        <motion.div
          className="relative"
          animate={{
            textShadow: [
              "0 0 10px rgba(0, 255, 255, 0.5)",
              "0 0 20px rgba(255, 0, 255, 0.5)",
              "0 0 10px rgba(0, 255, 255, 0.5)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center tracking-wide">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
