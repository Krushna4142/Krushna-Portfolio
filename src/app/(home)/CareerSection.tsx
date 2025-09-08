import React from "react";
import { Timeline } from "@/components/ui/careerComp";

export function CareerSection() {
    const data = [
        {
            title: "Aug 2025 – Present",
            content: (
                <div>
                    <p className="mb-8 text-xl font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        Software Developer – National Informatics Centre (NIC), Kolkata
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🚀 Developing core Laravel REST APIs for high-traffic scholarship portals.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🔐 Integrated Single Sign-On (OAuth2) to enhance security.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ⚡ Built GitLab CI/CD pipelines for faster, safer releases.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2019 – 2021",
            content: (
                <div>
                    <p className="mb-8 text-xl font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        Higher Secondary Certificate (HSC) – Science Stream
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            📚 Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🔬 Built strong analytical and problem-solving foundation for engineering studies.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🎯 Achieved excellent academic performance leading to engineering admission.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2021 – 2025",
            content: (
                <div>
                    <p className="mb-8 text-xl font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        Bachelor of Engineering (BE) – Computer Science & Engineering
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🎓 Graduated with comprehensive knowledge in software development and computer systems.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            💻 Specialized in web development, algorithms, and database management.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🏆 Strong foundation in programming languages and software engineering principles.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Jan 2025 – Jul 2025",
            content: (
                <div>
                    <p className="mb-8 text-xl font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        Software Developer Intern – National Informatics Centre (NIC), Kolkata
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🧠 Architected CRUD workflows and RBAC systems with Laravel.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🎨 Designed mobile-responsive UIs with Blade & Bootstrap.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ⚡ Optimized PostgreSQL indexes to accelerate load times by 30%.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Apr 2023 – Nov 2023",
            content: (
                <div>
                    <p className="mb-8 text-xl font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        Software Engineer Intern – Defence Research and Development Organisation (DRDO), Kolkata
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            🧠 Developed Tkinter GUIs to visualize CNN tasks for researchers.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            📊 Engineered Python preprocessing pipelines for large datasets.
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ⚡ Ensured real-time data sync between visualization and backend.
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip" id="experience">
            <Timeline data={data} />
        </div>
    );
}
