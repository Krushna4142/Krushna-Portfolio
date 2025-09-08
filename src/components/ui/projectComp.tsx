"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

export type ProjectContent = {
    title: string;
    subtitle: string;
    description: string;
    tech: string;
    liveUrl: string | null;
    githubUrl: string;
    content?: React.ReactNode;
};

interface ProjectCompProps {
    content: ProjectContent[];
    contentClassName?: string;
}

export const ProjectComp: React.FC<ProjectCompProps> = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "#020618",
        "#171717",
        "#20002c",
        "#093637",
        "#000000",
    ];

    const linearGradients = useMemo(
        () => [
            "linear-gradient(to bottom right, #06b6d4, #10b981)",
            "linear-gradient(to bottom right, #f97316, #eab308)",
            "linear-gradient(to bottom right, #ef32d9, #89fffd)",
            "linear-gradient(to bottom right, #43C6AC, #F8FFAE)",
            "linear-gradient(to bottom right, #ec4899, #6366f1)",
        ],
        []
    );

    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard, linearGradients]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className={cn("relative flex min-h-screen justify-center space-x-10 rounded-md p-10")}
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-2xl project-section-mobile">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.h2
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-lg font-bold text-slate-100"
                            >
                                {item.subtitle}
                            </motion.h2>
                            <motion.p
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-lg mt-10 max-w-sm text-slate-300 project-text-mobile"
                            >
                                {item.description}
                            </motion.p>
                            <motion.div
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="mt-6 flex flex-col gap-3"
                            >
                                <p className="text-sm text-blue-400 font-medium">Tech Stack: {item.tech}</p>
                                <div className="flex gap-3">
                                    {item.liveUrl && (
                                        <a
                                            href={item.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                                        >
                                            🚀 Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={item.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                                    >
                                        📂 GitHub
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                className={cn(
                    "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md lg:block cursor-pointer",
                    contentClassName
                )}
                style={{
                    background: backgroundGradient,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    willChange: 'transform, box-shadow'
                }}
                animate={{
                    boxShadow: [
                        "0 10px 30px rgba(0, 0, 0, 0.3)",
                        "0 15px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(147, 51, 234, 0.3)",
                        "0 10px 30px rgba(0, 0, 0, 0.3)"
                    ]
                }}
                transition={{
                    boxShadow: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }
                }}
                whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 50px rgba(59, 130, 246, 0.6), 0 0 40px rgba(147, 51, 234, 0.5)",
                    transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25,
                        duration: 0.4
                    }
                }}
            >
                <motion.div
                    className="w-full h-full relative overflow-hidden"
                    style={{ willChange: 'transform' }}
                    whileHover={{
                        scale: 1.02,
                        transition: { 
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 0.25
                        }
                    }}
                >
                    {content[activeCard].content ?? null}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
