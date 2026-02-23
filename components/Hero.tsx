"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const techStack = [
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "GIT", icon: "https://cdn.simpleicons.org/git/F1502F" },
]

const socials = [
    { icon: Github, href: "https://github.com/aldinokhalifah", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aldino-khalifah", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/aldinokhalifah", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/AldinoKhal34366", label: "Twitter" },
    { icon: Mail, href: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNpzqqDLLCHZJpxzZTrWxpMkkTdgbmzgvHlsGdvFBDcQPPSmkkQGCflhtgTqGRCBTHnwL", label: "Email" },
]

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#F5F5F0] flex items-center justify-center px-4 py-16 font-sans">
        <div className="w-full max-w-5xl">

            {/* Mobile Layout */}
            <div className="flex flex-col gap-3 md:hidden">

            {/* Photo + Name stacked */}
            <motion.div {...fadeUp(0.1)} className="rounded-3xl overflow-hidden bg-[#E8E8E2] relative h-64">
                <Image src="/images/logo.png" alt="Aldino Khalifah" fill className="object-cover object-top" />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-2xl px-3 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-700">Open to Work</span>
                </div>
            </motion.div>

            {/* Name & Tagline */}
            <motion.div {...fadeUp(0.2)} className="rounded-3xl bg-[#1A1A1A] text-white p-6 flex flex-col gap-3">
                <p className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">Software Engineer | Fullstack Developer</p>
                <h1 className="text-3xl font-bold tracking-tight leading-tight">Aldino Khalifah</h1>
                <p className="text-white/50 text-sm leading-relaxed">
                Building scalable web solutions from architecture to experience.
                </p>
            </motion.div>

            {/* Quote + CTA row */}
            <div className="grid grid-cols-2 gap-3">
                <motion.div {...fadeUp(0.3)} className="rounded-3xl bg-[#D4E9C8] p-5 flex flex-col justify-between min-h-[130px]">
                <span className="text-3xl leading-none text-[#3a6b2a]/30 font-serif">&quot;</span>
                <p className="text-[#2d5220] text-xs font-medium leading-relaxed -mt-2">
                    Strong engineering meets meaningful product impact.
                </p>
                </motion.div>

                <motion.div {...fadeUp(0.35)} className="rounded-3xl bg-[#1A1A1A] p-5 flex flex-col justify-between min-h-[130px]">
                <p className="text-white/40 text-[10px] uppercase tracking-widest">Let&apos;s build</p>
                <Link href="#projects" className="group flex items-center justify-between text-white font-semibold text-sm">
                    View My Work
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div {...fadeUp(0.4)} className="rounded-3xl bg-white border border-gray-100 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-1.5 bg-[#F5F5F0] rounded-full px-2.5 py-1 hover:bg-[#E8E8E2] transition-colors">
                    <img src={tech.icon} alt={tech.name} className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.45)} className="rounded-3xl bg-[#EDE9E3] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">Connect</p>
                <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                    <Link key={label} href={href} target="_blank"
                    className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-[#1A1A1A] hover:text-white transition-all">
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                    </Link>
                ))}
                </div>
            </motion.div>

            </div>

            {/* Desktop Layout (md+) */}
            <div className="hidden md:grid grid-cols-12 gap-3">

            {/* Card 1: Photo */}
            <motion.div
                {...fadeUp(0.1)}
                className="col-span-4 row-span-2 rounded-3xl overflow-hidden bg-[#E8E8E2] relative min-h-[340px]"
            >
                <Image src="/images/logo.png" alt="Aldino Khalifah" fill className="object-cover object-top" />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-2xl px-3 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-700">Open to Work</span>
                </div>
            </motion.div>

            {/* Card 2: Name & Tagline */}
            <motion.div
                {...fadeUp(0.2)}
                className="col-span-8 rounded-3xl bg-[#1A1A1A] text-white p-8 flex flex-col justify-between min-h-[160px]"
            >
                <p className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">Software Engineer | Fullstack Developer</p>
                <div>
                <h1 className="text-5xl font-bold tracking-tight leading-none mb-2">Aldino Khalifah</h1>
                <p className="text-white/50 text-base max-w-md leading-relaxed">
                    Building scalable web solutions from architecture to experience.
                </p>
                </div>
            </motion.div>

            {/* Card 3: Quote */}
            <motion.div
                {...fadeUp(0.3)}
                className="col-span-5 rounded-3xl bg-[#D4E9C8] p-7 flex flex-col justify-between min-h-[160px]"
            >
                <span className="text-4xl leading-none text-[#3a6b2a]/30 font-serif">&quot;</span>
                <p className="text-[#2d5220] text-base font-medium leading-relaxed -mt-4">
                I seek opportunities where strong architectural engineering meets meaningful product impact.
                </p>
            </motion.div>

            {/* Card 4: CTA */}
            <motion.div
                {...fadeUp(0.35)}
                className="col-span-3 rounded-3xl bg-[#1A1A1A] p-6 flex flex-col justify-between min-h-[160px]"
            >
                <p className="text-white/40 text-xs uppercase tracking-widest">Let&apos;s build</p>
                <Link href="#projects" className="group flex items-center justify-between text-white font-semibold text-lg">
                View My Work
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </motion.div>

            {/* Card 5: Tech Stack */}
            <motion.div
                {...fadeUp(0.4)}
                className="col-span-8 rounded-3xl bg-white border border-gray-100 p-6"
            >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-2 bg-[#F5F5F0] rounded-full px-3 py-1.5 hover:bg-[#E8E8E2] transition-colors">
                    <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                    <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>

            {/* Card 6: Social Links */}
            <motion.div
                {...fadeUp(0.45)}
                className="col-span-4 rounded-3xl bg-[#EDE9E3] p-6 flex flex-col justify-between"
            >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Connect</p>
                <div className="flex flex-wrap gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                    <Link key={label} href={href} target="_blank"
                    className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-[#1A1A1A] hover:text-white transition-all">
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                    </Link>
                ))}
                </div>
            </motion.div>

            </div>
        </div>
        </section>
    )
}