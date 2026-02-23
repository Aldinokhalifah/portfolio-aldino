"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const socials = [
    { icon: Github, href: "https://github.com/aldinokhalifah", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aldino-khalifah", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/aldinokhalifah", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/AldinoKhal34366", label: "Twitter" },
    { icon: Mail, href: "mailto:khalifahaldino@gmail.com", label: "Email" },
]

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
]

export default function Footer() {
    return (
        <footer className="bg-[#F5F5F0] px-4 pb-6 pt-3">
            <div className="max-w-5xl mx-auto">

                {/* ── MOBILE LAYOUT ── */}
                <div className="flex flex-col gap-3 md:hidden">

                    {/* CTA Card */}
                    <motion.div {...fadeUp(0.1)} className="rounded-3xl bg-[#1A1A1A] p-7">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-3">Let&apos;s Talk</p>
                        <p className="text-white text-lg font-semibold leading-snug mb-5">
                            Have a project in mind? Let&apos;s build something great together.
                        </p>
                        <Link href="#contact"
                            className="inline-flex items-center gap-1.5 bg-white text-[#1A1A1A] text-sm font-semibold rounded-full px-4 py-2 hover:bg-gray-100 transition-colors">
                            Get In Touch <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Nav + Socials */}
                    <div className="grid grid-cols-2 gap-3">
                        <motion.div {...fadeUp(0.15)} className="rounded-3xl bg-white border border-gray-100 p-5">
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-3">Navigation</p>
                            <ul className="space-y-2">
                                {navLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link href={href} className="text-sm font-medium text-[#1A1A1A] hover:text-gray-500 transition-colors">
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div {...fadeUp(0.2)} className="rounded-3xl bg-[#EDE9E3] p-5">
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-3">Connect</p>
                            <div className="flex flex-col gap-2">
                                {socials.map(({ icon: Icon, href, label }) => (
                                    <Link key={label} href={href} target="_blank"
                                        className="flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-[#1A1A1A] transition-colors">
                                        <Icon className="w-3.5 h-3.5" /> {label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Copyright */}
                    <motion.div {...fadeUp(0.25)} className="rounded-3xl bg-white border border-gray-100 px-5 py-4 flex items-center justify-between">
                        <p className="font-bold text-sm text-[#1A1A1A]">Aldino Khalifah</p>
                        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </motion.div>
                </div>

                {/* ── DESKTOP BENTO LAYOUT ── */}
                <div className="hidden md:grid grid-cols-12 gap-3">

                    {/* CTA — large dark card */}
                    <motion.div {...fadeUp(0.1)} className="col-span-6 rounded-3xl bg-[#1A1A1A] p-8 flex flex-col justify-between min-h-[200px]">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">Let&apos;s Talk</p>
                        <div>
                            <p className="text-white text-2xl font-bold leading-snug mb-5">
                                Have a project in mind?<br />
                                Let&apos;s build something great together.
                            </p>
                            <Link href="#contact"
                                className="inline-flex items-center gap-1.5 bg-white text-[#1A1A1A] text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-gray-100 transition-colors">
                                Get In Touch <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Nav Links */}
                    <motion.div {...fadeUp(0.15)} className="col-span-3 rounded-3xl bg-white border border-gray-100 p-7 flex flex-col justify-between">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">Navigation</p>
                        <ul className="space-y-3 mt-4">
                            {navLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href}
                                        className="text-sm font-medium text-[#1A1A1A] hover:text-gray-400 transition-colors flex items-center justify-between group">
                                        {label}
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div {...fadeUp(0.2)} className="col-span-3 rounded-3xl bg-[#EDE9E3] p-7 flex flex-col justify-between">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">Connect</p>
                        <ul className="space-y-2.5 mt-4">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <li key={label}>
                                    <Link href={href} target="_blank"
                                        className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#1A1A1A] transition-colors group">
                                        <Icon className="w-4 h-4" />
                                        {label}
                                        <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Copyright bar — full width */}
                    <motion.div {...fadeUp(0.25)} className="col-span-12 rounded-3xl bg-white border border-gray-100 px-7 py-4 flex items-center justify-between">
                        <p className="font-bold text-sm text-[#1A1A1A]">Aldino Khalifah</p>
                        <p className="text-xs text-gray-400 text-center">
                            Contact me to discuss further or share your technology insights!
                        </p>
                        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </motion.div>

                </div>
            </div>
        </footer>
    )
}