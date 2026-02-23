import { Database, Code2, Server, Layout, Wrench } from "lucide-react"
import { ReactElement } from "react";

interface SkillItem {
    name: string;
    icon?: string;
}

interface SkillGroup {
    category: string;
    icon: ReactElement;
    items: SkillItem[];
    bg: string;
    dark?: boolean;
}

export const skills: SkillGroup[] = [
    {
        category: "Frontend",
        icon: <Layout className="h-5 w-5" />,
        bg: "bg-white",
        dark: false,
        items: [
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
        ],
    },
    {
        category: "Backend",
        icon: <Server className="h-5 w-5" />,
        bg: "bg-[#1A1A1A]",
        dark: true,
        items: [
            { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
            { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
        ],
    },
    {
        category: "Database & Cloud",
        icon: <Database className="h-5 w-5" />,
        bg: "bg-[#D4E9C8]",
        dark: false,
        items: [
            { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
            { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
        ],
    },
    {
        category: "Blockchain & Web3",
        icon: <Code2 className="h-5 w-5" />,
        bg: "bg-[#EDE9E3]",
        dark: false,
        items: [
            { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/363636" },
            { name: "Ethers.js", icon: "https://cdn.simpleicons.org/ethers/2535A0" },
            { name: "Hardhat", icon: "https://cdn.simpleicons.org/hardhat/FFF100" },
        ],
    },
    {
        category: "Tools & Others",
        icon: <Wrench className="h-5 w-5" />,
        bg: "bg-white",
        dark: false,
        items: [
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
            { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
            { name: "Gemini AI", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
        ],
    },
]

export const certifications = [
    { name: "Junior Web Developer", issuer: "BNSP", year: "2026", color: "bg-blue-50 text-blue-700 border border-blue-100" },
    { name: "Fullstack Web Developer", issuer: "NF Academy", year: "2025", color: "bg-purple-50 text-purple-700 border border-purple-100" },
    { name: "Back-End with JavaScript", issuer: "Dicoding", year: "2025", color: "bg-green-50 text-green-700 border border-green-100" },
    { name: "Basic of JavaScript", issuer: "Dicoding", year: "2025", color: "bg-green-50 text-green-700 border border-green-100" },
    { name: "Cloud & Gen AI AWS", issuer: "Dicoding", year: "2025", color: "bg-green-50 text-green-700 border border-green-100" },
    { name: "Programming with Java", issuer: "Dicoding", year: "2025", color: "bg-green-50 text-green-700 border border-green-100" },
    { name: "Basic of AI", issuer: "Dicoding", year: "2024", color: "bg-green-50 text-green-700 border border-green-100" },
    { name: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2024", color: "bg-orange-50 text-orange-700 border border-orange-100" },
    { name: "Silver Medalist — English", issuer: "KSN 2025", year: "2025", color: "bg-yellow-50 text-yellow-700 border border-yellow-100" },
]