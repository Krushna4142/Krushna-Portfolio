"use client";
import React from "react";
import { motion } from "framer-motion";
import { PixelatedCanvas } from "@/components/ui/profile-canvas";

export function ProfilePicture() {
  const [canvasSize, setCanvasSize] = React.useState({ width: 280, height: 420 });
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 768) {
        setCanvasSize({ width: 420, height: 520 });
      } else {
        setCanvasSize({ width: 280, height: 420 });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    setMousePosition({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="mx-auto mt-8 relative">
      <motion.div 
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        animate={{
          rotateX: mousePosition.y * -0.5,
          rotateY: mousePosition.x * 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Glowing neon border */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: isHovered 
              ? [
                  "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2), 0 0 60px rgba(0, 255, 255, 0.1)",
                  "0 0 30px rgba(255, 0, 255, 0.3), 0 0 50px rgba(255, 0, 255, 0.2), 0 0 70px rgba(255, 0, 255, 0.1)",
                  "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2), 0 0 60px rgba(0, 255, 255, 0.1)"
                ]
              : "0 0 0px rgba(0, 255, 255, 0)",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        />
        
        {/* Profile canvas with enhanced 3D effects */}
        <motion.div 
          className="relative z-10 rounded-lg overflow-hidden"
          animate={{
            scale: isHovered ? 1.05 : 1,
            z: isHovered ? 50 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          <PixelatedCanvas
            className="profile-canvas rounded-lg overflow-hidden"
            src="/krushna.jpg"
            width={canvasSize.width}
            height={canvasSize.height}
            cellSize={3}
            dotScale={0.9}
            shape="square"
            backgroundColor=""
            dropoutStrength={0.2}
            interactive
            distortionStrength={isHovered ? 5 : 3}
            distortionRadius={isHovered ? 100 : 80}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={isHovered ? 6 : 4}
            jitterSpeed={isHovered ? 6 : 4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
