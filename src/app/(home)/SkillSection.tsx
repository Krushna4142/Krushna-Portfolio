import { FocusCards } from "@/components/ui/skillGridComp";
import { SkillText } from "./SkillText";

export function SkillSection() {
    const cards = [
        // Programming Languages
        {
            title: "Java",
            src: "./logo/java.webp",
            category: "Programming"
        },
        {
            title: "C",
            src: "./logo/c.webp",
            category: "Programming"
        },
        {
            title: "C++",
            src: "./logo/cpp.webp",
            category: "Programming"
        },
        {
            title: "Python",
            src: "./logo/python.webp",
            category: "Programming"
        },
        // Web Development
        {
            title: "HTML",
            src: "./logo/html.webp",
            category: "Web Development"
        },
        {
            title: "CSS",
            src: "./logo/css.webp",
            category: "Web Development"
        },
        {
            title: "JavaScript",
            src: "./logo/javascript.webp",
            category: "Web Development"
        },
        {
            title: "React",
            src: "./logo/react.webp",
            category: "Web Development"
        },
        {
            title: "Node.js",
            src: "./logo/nodejs.webp",
            category: "Web Development"
        },
        {
            title: "MERN Stack",
            src: "./logo/mern.webp",
            category: "Web Development"
        },
        // Data & Analytics
        {
            title: "SQL",
            src: "./logo/sql.webp",
            category: "Data & Analytics"
        },
        {
            title: "Excel",
            src: "./logo/excel.webp",
            category: "Data & Analytics"
        },
        {
            title: "Tableau",
            src: "./logo/tableau.webp",
            category: "Data & Analytics"
        },
        {
            title: "Data Visualization",
            src: "./logo/dataviz.webp",
            category: "Data & Analytics"
        },
        // Cybersecurity
        {
            title: "Network Security",
            src: "./logo/network-security.webp",
            category: "Cybersecurity"
        },
        {
            title: "Log Analysis",
            src: "./logo/log-analysis.webp",
            category: "Cybersecurity"
        },
        {
            title: "Web Security",
            src: "./logo/web-security.webp",
            category: "Cybersecurity"
        },
        // Tools
        {
            title: "Git",
            src: "./logo/git.webp",
            category: "Tools"
        },
        {
            title: "Vercel",
            src: "./logo/vercel.webp",
            category: "Tools"
        },
        {
            title: "Windsurf",
            src: "./logo/windsurf.webp",
            category: "Tools"
        },
        {
            title: "Cursor",
            src: "./logo/cursor.webp",
            category: "Tools"
        },
        // Companies/Organizations
        {
            title: "Oasis Infobyte",
            src: "./logo/oasis-infobyte.webp",
            category: "Companies",
            url: "https://oasisinfobyte.com"
        },
        {
            title: "Goldman Sachs",
            src: "./logo/goldman-sachs.webp", 
            category: "Companies",
            url: "https://www.goldmansachs.com"
        },
    ];

    return (
        <>
            <SkillText />
            <FocusCards cards={cards} />
        </>
    );
}
