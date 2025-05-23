"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/Card"
import  Button  from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { projects } from "@/app/utils/projects"

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
        <section id="projects" className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 h-[40vh] w-[40vh] rounded-full bg-blue-500/5 blur-[120px]" />
                <div className="absolute bottom-1/3 right-1/4 h-[35vh] w-[35vh] rounded-full bg-purple-500/5 blur-[100px]" />
            </div>

            <div className="container px-4 relative z-10">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
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
                    <motion.div key={index} variants={item} className="group">
                    <Card className="overflow-hidden border border-white/20 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-xl h-full flex flex-col relative transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-blue-500/10">
                        {/* Gradient overlay for card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        {/* Header Section with Gradient Background */}
                        <div className="relative overflow-hidden h-20 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-blue-500/10">
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Floating geometric shapes */}
                            <div className="absolute top-2 right-4 opacity-30 group-hover:opacity-60 transition-all duration-500">
                                <div className="w-8 h-8 border border-white/30 rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-700" />
                            </div>
                            <div className="absolute bottom-2 left-6 opacity-20 group-hover:opacity-40 transition-all duration-700">
                                <div className="w-6 h-6 bg-white/20 rounded-sm transform group-hover:rotate-12 transition-transform duration-500" />
                            </div>
                            
                            {/* Floating tech indicator */}
                            <div className="absolute top-4 right-16 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                <div className="flex gap-1">
                                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                                        <div key={tagIndex} className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{animationDelay: `${tagIndex * 200}ms`}} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <CardContent className="p-8 flex-grow relative">
                            {/* Title with enhanced styling */}
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                                {project.title}
                            </h3>
                            
                            {/* Description with better spacing */}
                            <p className="text-white/60 mb-6 text-pretty leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                {project.description}
                            </p>
                            
                            {/* Enhanced tech stack display */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <Badge
                                        key={tagIndex}
                                        className="bg-white/10 hover:bg-white/20 text-white/90 rounded-full px-3 py-1 text-xs font-medium border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="p-8 pt-0 flex gap-4 relative">
                            <Link href={project.demoLink} className="flex-1">
                                <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 border border-white/40 hover:bg-white/15 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20">
                                    <ExternalLink className="h-4 w-4" />
                                    Live Demo
                                </Button>
                            </Link>
                            <Link href={project.githubLink} className="flex-1">
                                <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2 border border-white/40 hover:bg-white/15 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20">
                                    <Github className="h-4 w-4" />
                                    Source Code
                                </Button>
                            </Link>
                        </CardFooter>

                        {/* Subtle animated border */}
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-sm" />
                        </div>
                    </Card>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    )
}

