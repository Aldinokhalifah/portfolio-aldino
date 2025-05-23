"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-10 bg-background border-t border-white/10">
        <div className="container px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
                Aldino Khalifah
                </h3>
                <p className="text-muted-foreground text-white/40">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex space-x-4 mt-4 md:mt-0"
            >
                <Link
                    href="https://github.com/aldinokhalifah"
                    className="p-2 rounded-full bg-white/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/aldino-khalifah"
                    className="p-2 rounded-full bg-white/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRfHrFNTqgnMGvnvVrBQGLDpChqJLmDbgWRkTHJJXHnglbwXTCgXCpdmwkKpKCJhqfrcXq"
                    className="p-2 rounded-full bg-white/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                </Link>
                <Link
                    href="https://www.instagram.com/aldinokhalifah"
                    className="p-2 rounded-full bg-white/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link
                    href="https://x.com/AldinoKhal34366"
                    className="p-2 rounded-full bg-white/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </motion.div>
            </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 pt-8 border-t border-white/10 text-center text-balance gap-6  text-muted-foreground text-white/40"
            >
                <h2>Contact me to discuss further or share your technology insights!</h2>
            </motion.div>
        </div>
        </footer>
    )
}

