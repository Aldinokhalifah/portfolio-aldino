"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/Card"
import  Button  from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: " Simple AI Chatbot",
        description:
        "This project aims to explore the implementation of artificial intelligence in web applications, as well as open up opportunities for the development of more complex and efficient chatbots in the future.",
        image: "/images/ai_chatbot.png",
        tags: ["Next.js", "Gemini API", "Tailwind CSS", "TypeScript"],
        demoLink: "https://ai-web-app-beta.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/ai-web-app",
    },
    {
        title: "Modern Car Sales Website",
        description: "A car sales web project that I developed using Next.js, TypeScript, and SendGrid. The project provides an interactive and efficient user experience in searching and buying their dream car.",
        image: "/images/my_Cars.png",
        tags: ["Next.js", "TypeScript", "SendGrid", "Tailwind CSS"],
        demoLink: "https://my-cars-xgti.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/my-cars/tree/main",
    },
    {
        title: "Notes App - Fullstack MERN Application",
        description:
        "I developed Notes App, a web-based personal note-taking application designed to help users store and manage their notes securely and efficiently.",
        image: "/images/notes_app.png",
        tags: ["React", "MongoDB", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "JWT"],
        demoLink: "https://notes-app-pi-cyan.vercel.app/",
        githubLink: "https://github.com/Aldinokhalifah/notes_app",
    },
    {
        title: "Financial Management App ",
        description: "I just finished a Laravel-based Financial Management project, which helps users manage their income and expenses in a more structured and easy-to-understand way.",
        image: "/images/finance_app.png",
        tags: ["Laravel", "PHP", "MYSQL", "Tailwind CSS", "Chart"],
        demoLink: "https://aldino-khalifah.web.id/",
        githubLink: "https://github.com/Aldinokhalifah/Coba.php/tree/main/LARAVEL/Manajemen%20Keuangan/manajemen_keuangan",
    },
    {
        title: "Employee Case Study",
        description: "This project is an implementation of the concept of Inheritance in object-oriented programming using Java. I created a simple system that represents different types of employees in a company.",
        image: "https://placehold.co/500x200?text=No+Image",
        tags: ["Java", "OOP"],
        demoLink: "https://github.com/Aldinokhalifah/coba_Java/blob/main/Latihan2/inheritanceLatihan3.java",
        githubLink: "https://github.com/Aldinokhalifah/coba_Java/blob/main/Latihan2/inheritanceLatihan3.java",
    },
]

export default function Projects() {
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
        <section id="projects" className="py-20 bg-background">
            <div className="container px-4">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
                >
                <h2 className="text-3xl font-bold mb-2">My Projects</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-2xl mx-auto text-white/40">
                    A selection of my recent work showcasing my skills and expertise in web development.
                </p>
                </motion.div>

                <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={item}>
                    <Card className="overflow-hidden border border-white/10 bg-card/30 backdrop-blur-sm h-full flex flex-col">
                        <div className="overflow-hidden aspect-auto">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain bg-black/50"
                                whileHover={{ scale: 1.05 }}
                            />
                        </div>
                        <CardContent className="p-6 flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-white/40 mb-4 text-pretty">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                            <Badge
                                key={tagIndex}
                                className="bg-white/10 text-white rounded-full p-1"
                            >
                                {tag}
                            </Badge>
                            ))}
                        </div>
                        </CardContent>
                        <CardFooter className="p-6 pt-0 flex gap-3">
                        <Link href={project.demoLink}>
                            <Button variant="outline" size="sm" className="flex items-center gap-2 border border-white/40 hover:bg-white/15">
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </Button>
                        </Link>
                        <Link href={project.githubLink}>
                            <Button variant="outline" size="sm" className="flex items-center gap-2 border border-white/40 hover:bg-white/15">
                                <Github className="h-4 w-4" />
                                Source Code
                            </Button>
                        </Link>
                        </CardFooter>
                    </Card>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    )
}

