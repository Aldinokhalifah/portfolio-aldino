"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"

export default function About() {
    return (
        <section id="about" className="py-20 bg-background">
        <div className="container px-4">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
            >
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-white/40">
                Get to know more about me, my background, and what drives my passion for web development.
            </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card className="border border-white/10 bg-card/10 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                    <p className="text-muted-foreground text-pretty mb-4 text-white/40">
                    I&apos;m Aldino Khalifah, a passionate Fullstack Developer, Software Engineer, and Backend Developer with expertise in building modern,
                    responsive, and user-friendly web applications. With a strong foundation in both frontend and backend
                    technologies, I strive to create seamless digital experiences.
                    </p>
                    <div className="text-muted-foreground text-pretty text-white/40">
                        <p className="my-2">
                            I have skills in various technologies, such as Laravel, Next.js, Node js, Express js, Python, JavaScript, Tailwind CSS, Bootstrap, PHP, database, and Java. With this combination of skills, I am constantly honing my ability to build efficient and innovative solutions in the field of software development.
                            I am always open to learning new things and interested in collaborating on challenging projects, especially in the field of backend development and software engineering.
                        </p>
                    </div>
                </CardContent>
                </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
            >
                <Card className="border border-white/10 bg-card/10 backdrop-blur-sm">
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground text-white/40">Bachelor&apos;s Degree in Computer Science</p>
                </CardContent>
                </Card>

                <Card className="border border-white/10 bg-card/10 backdrop-blur-sm">
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Experience</h3>
                    <p className="text-muted-foreground text-white/40">{new Date().getFullYear() - 2024} years in web development</p>
                </CardContent>
                </Card>

                <Card className="border border-white/10 bg-card/10 backdrop-blur-sm">
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Interests</h3>
                    <p className="text-muted-foreground text-white/40">Fullstack Development, Backend Systems, Software Engineering</p>
                </CardContent>
                </Card>

                <Card className="border border-white/10 bg-card/10 backdrop-blur-sm">
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground text-white/40">Available for remote work worldwide</p>
                </CardContent>
                </Card>
            </motion.div>
            </div>
        </div>
        </section>
    )
}

