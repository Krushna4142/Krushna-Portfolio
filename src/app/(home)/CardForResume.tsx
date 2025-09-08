import { GlareCard } from "@/components/ui/glare-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

export function CardForResume() {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            // Mouse position tracking removed as it's not used
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Dispatch custom event to notify paragraph section
        window.dispatchEvent(new CustomEvent('photoHover', { detail: { isHovered: true } }));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Dispatch custom event to notify paragraph section
        window.dispatchEvent(new CustomEvent('photoHover', { detail: { isHovered: false } }));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" id="about">
            <motion.div
                ref={cardRef}
                className="relative"
                style={{ willChange: 'transform' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, duration: 0.3 }}
            >
                {/* Clean border frame around photo */}
                <motion.div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                        border: '4px solid rgba(255, 255, 0, 0.8)',
                        background: 'transparent',
                    }}
                    animate={{
                        borderColor: isHovered 
                            ? [
                                "rgba(255, 255, 0, 1)",
                                "rgba(255, 215, 0, 1)",
                                "rgba(255, 255, 0, 1)"
                              ]
                            : "rgba(255, 255, 0, 0.8)",
                        boxShadow: isHovered 
                            ? [
                                "0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(255, 255, 0, 0.6)",
                                "0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 215, 0, 0.8)",
                                "0 0 20px rgba(255, 255, 0, 0.8), 0 0 40px rgba(255, 255, 0, 0.6)"
                              ]
                            : "0 0 8px rgba(255, 255, 0, 0.4)",
                    }}
                    transition={{
                        duration: isHovered ? 2 : 0.4,
                        repeat: isHovered ? Infinity : 0,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />

                <GlareCard className="flex flex-col items-center justify-center relative z-10">
                    <Image
                        className="absolute inset-0 object-cover"
                        src="/krishna.jpg.png"
                        alt="Krushna"
                        fill 
                        style={{ objectFit: 'cover' }}
                    />
                </GlareCard>
            </motion.div>
        </div>
    );
}
