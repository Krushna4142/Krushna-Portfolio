"use client";
import React from "react";
import Image from "next/image";
import { ProjectComp } from "@/components/ui/projectComp";

const content = [
    {
        title: "FitOS Dashboard 🩺",
        subtitle: "AI-powered health OS with wellness hub, gamification, predictive analytics",
        description:
            "An intelligent health operating system that combines AI-powered analytics with intuitive dashboard design. Features real-time health monitoring, personalized recommendations, and comprehensive data visualization. Built with modern web technologies to provide users with actionable health insights and seamless tracking capabilities.",
        tech: "React, Tailwind CSS, Recharts, Node.js",
        liveUrl: "https://krushna-fitos.vercel.app/",
        githubUrl: "https://github.com/Krushna4142/fitos-dashboard",
        content: (
            <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] text-white">
                <Image src="/projectsrc/FitOS.webp.png" alt="FitOS Dashboard" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
    {
        title: "AgriTech Web App 🌱",
        subtitle: "Crop management solution for farmers using Flask, MySQL, and React",
        description:
            "An intuitive crop management platform that helps farmers track, analyze, and optimize crop yield using Flask, React, and MySQL. Features comprehensive monitoring tools and data-driven insights for agricultural optimization.",
        tech: "Flask, React, MySQL",
        liveUrl: null,
        githubUrl: "https://github.com/Krushna4142/agritech-webapp",
        content: (
            <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--emerald-500))] text-white">
                <Image src="/projectsrc/agritech.webp" alt="AgriTech Web App" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
    {
        title: "Quantum Calendar 🌀",
        subtitle: "A fun, quantum-style interactive calendar",
        description:
            "An innovative calendar application that combines functionality with quantum physics aesthetics. Features interactive date selection, event management, and visually stunning animations. Designed to make scheduling both productive and engaging with modern web technologies.",
        tech: "React, Tailwind CSS",
        liveUrl: "https://krushna4142.github.io/quantum-calendar-/",
        githubUrl: "https://github.com/Krushna4142/quantum-calendar-",
        content: (
            <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
                <Image src="/projectsrc/quantum calender.webp.png" alt="Quantum Calendar" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
    {
        title: "Task Flow ⏳",
        subtitle: "Gamified productivity app blending work and play",
        description:
            "A cutting-edge productivity application featuring quantum-inspired design elements and advanced task management capabilities. Includes priority-based scheduling, time tracking, and intuitive workflow management. Built with TypeScript and React for a seamless user experience.",
        tech: "TypeScript, React, Node.js",
        liveUrl: "https://task-flow-krushna-one.vercel.app/",
        githubUrl: "https://github.com/Krushna4142/task-flow",
        content: (
            <div className="flex items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] text-white">
                <Image src="/projectsrc/Task Flow.webp.png" alt="Task Flow" fill style={{ objectFit: 'cover' }} />
            </div>
        ),
    },
];

export default function ProjectSection() {
    return (
        <div className="w-full project-text" id="projects">
            <ProjectComp content={content} />
        </div>
    );
}
