"use client"

import { motion } from "framer-motion"
import { Database, Code2, Server, Layout, Layers, FileCode, Cpu, Coffee } from "lucide-react"

const skills = [
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

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section id="skills" className="py-20 bg-background/50 relative">
        <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 left-1/4 h-[30vh] w-[30vh] rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/4 h-[30vh] w-[30vh] rounded-full bg-purple-500/10 blur-[100px]" />
        </div>

        <div className="container px-4 relative z-10">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
            >
            <h2 className="text-3xl font-bold mb-2">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-white/40">
                A comprehensive overview of my technical expertise and proficiency levels.
            </p>
            </motion.div>

            <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            >
            {skills.map((skillGroup, index) => (
                <motion.div
                key={index}
                variants={item}
                className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-md bg-white/10 text-primary">{skillGroup.icon}</div>
                    <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>

                <div className="space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-start">
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    ))}
                </div>
                </motion.div>
            ))}
            </motion.div>

            <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
            <motion.div
                className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/10 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <Layers className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-medium text-lg">Full Stack</h4>
                <p className="text-sm text-muted-foreground mt-2 text-white/40">End-to-end development expertise</p>
            </motion.div>

            <motion.div
                className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/10 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <FileCode className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-medium text-lg">Clean Code</h4>
                <p className="text-sm text-muted-foreground mt-2 text-white/40">Maintainable & efficient solutions</p>
            </motion.div>

            <motion.div
                className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/10 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <Cpu className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-medium text-lg">Optimization</h4>
                <p className="text-sm text-muted-foreground mt-2 text-white/40">Performance-focused development</p>
            </motion.div>

            <motion.div
                className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-white/10 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
                <Coffee className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h4 className="font-medium text-lg">Problem Solving</h4>
                <p className="text-sm text-muted-foreground mt-2 text-white/40">Creative & analytical thinking</p>
            </motion.div>
            </motion.div>
        </div>
        </section>
    )
}

