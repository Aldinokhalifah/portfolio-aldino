import { Database, Code2, Server, Layout } from "lucide-react"
import { ReactElement } from "react";

interface SkillItem {
    name: string;
    level?: string;
}

interface SkillGroup {
    category: string;
    icon: ReactElement;
    items: SkillItem[];
}

export const skills: SkillGroup[] = [
    {
        category: "Frontend",
        icon: <Layout className="h-6 w-6" />,
        items: [
            { name: "JavaScript" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Bootstrap" },
            { name: "React" },
        ],
    },
    {
        category: "Backend",
        icon: <Server className="h-6 w-6" />,
        items: [
            { name: "Laravel" },
            { name: "Node.js" },
            { name: "Express.js" },
            { name: "PHP" },
            { name: "Java" },
        ],
    },
    {
        category: "Languages",
        icon: <Code2 className="h-6 w-6" />,
        items: [
            { name: "JavaScript" },
            { name: "Python" },
            { name: "PHP" },
            { name: "Java" },
        ],
    },
    {
        category: "Database",
        icon: <Database className="h-6 w-6" />,
        items: [
            { name: "MySQL", level: "Advanced" },
            { name: "MongoDB", level: "Advanced" },
        ],
    },
]