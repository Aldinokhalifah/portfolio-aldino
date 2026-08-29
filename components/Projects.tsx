"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { projects } from "@/app/utils/projects"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
})

function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    const [hasError, setHasError] = useState(false)

    if (!src || hasError) {
        return (
            <div className={`absolute inset-0 flex items-center justify-center bg-[#E8E8E2] text-[#999999] ${className ?? ""}`}>
                <span className="text-sm font-bold">{alt.charAt(0)}</span>
            </div>
        )
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className={className}
            loading="lazy"
            onError={() => setHasError(true)}
        />
    )
}

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section id="projects" className="py-20 bg-[#F5F5F0] px-4">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium mb-2">
                    Projects
                </motion.p>
                <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-8">
                    Recent Work
                </motion.h2>

                {/* ── MOBILE LAYOUT ── */}
                <div className="flex flex-col gap-3 md:hidden">
                    {projects.map((project, i) => (
                        <motion.div key={project.title} {...fadeUp(0.1 + i * 0.06)}
                            className="rounded-3xl bg-white border border-gray-100 overflow-hidden">
                            <div className="relative h-44 w-full bg-[#E8E8E2]">
                                <ProjectImage src={project.image} alt={project.title} className="object-cover" />
                                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold rounded-full px-2.5 py-1">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-base text-[#1A1A1A] mb-2">{project.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-[#F5F5F0] text-gray-600 text-[10px] font-medium rounded-full px-2.5 py-1">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Link href={project.demoLink} target="_blank"
                                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#1A1A1A] text-white text-xs font-medium rounded-2xl py-2 hover:bg-gray-800 transition-colors">
                                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                    </Link>
                                    <Link href={project.githubLink} target="_blank"
                                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#F5F5F0] text-gray-700 text-xs font-medium rounded-2xl py-2 hover:bg-[#E8E8E2] transition-colors">
                                        <Github className="w-3.5 h-3.5" /> Source Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── DESKTOP LIST LAYOUT ── */}
                <div className="hidden md:block">

                    {/* Header row */}
                    <motion.div {...fadeUp(0.1)} className="grid grid-cols-12 gap-4 pb-3 mb-1 border-b border-gray-200">
                        <div className="col-span-1">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">#</span>
                        </div>
                        <div className="col-span-4">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">Project</span>
                        </div>
                        <div className="col-span-4">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">Description</span>
                        </div>
                        <div className="col-span-2">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">Stack</span>
                        </div>
                        <div className="col-span-1 text-right">
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">Links</span>
                        </div>
                    </motion.div>

                    {/* Project rows */}
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            {...fadeUp(0.15 + i * 0.06)}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group grid grid-cols-12 gap-4 py-5 border-b border-gray-100 transition-all duration-300 rounded-2xl px-3 -mx-3 cursor-default ${
                                hoveredIndex === i ? "bg-[#1A1A1A]" : "hover:bg-[#1A1A1A]"
                            }`}
                        >
                            {/* Number */}
                            <div className="col-span-1 flex items-center">
                                <span className={`text-sm font-bold transition-colors duration-300 ${
                                    hoveredIndex === i ? "text-white/30" : "text-gray-300 group-hover:text-white/30"
                                }`}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Title + Image thumbnail */}
                            <div className="col-span-4 flex items-center gap-3">
                                <div className={`relative w-14 h-14 rounded-xl overflow-hidden shrink-0 transition-all duration-300 ${
                                    hoveredIndex === i ? "opacity-100 scale-100" : "opacity-60 scale-95 group-hover:opacity-100 group-hover:scale-100"
                                }`}>
                                    <ProjectImage src={project.image} alt={project.title} className="object-cover" />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-sm leading-snug transition-colors duration-300 ${
                                        hoveredIndex === i ? "text-white" : "text-[#1A1A1A] group-hover:text-white"
                                    }`}>
                                        {project.title}
                                    </h3>
                                    {project.featured && (
                                        <span className="text-[9px] font-semibold uppercase tracking-widest text-emerald-500">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="col-span-4 flex items-center">
                                <p className={`text-xs leading-relaxed transition-colors duration-300 ${
                                    hoveredIndex === i ? "text-white/50" : "text-gray-500 group-hover:text-white/50"
                                }`}>
                                    {project.description}
                                </p>
                            </div>

                            {/* Stack tags */}
                            <div className="col-span-2 flex items-center">
                                <div className="flex flex-wrap gap-1">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={`text-[9px] font-medium rounded-full px-2 py-0.5 transition-colors duration-300 ${
                                            hoveredIndex === i
                                                ? "bg-white/10 text-white/60"
                                                : "bg-gray-100 text-gray-500 group-hover:bg-white/10 group-hover:text-white/60"
                                        }`}>
                                            {tag}
                                        </span>
                                    ))}
                                    {/* {project.tags.length > 3 && (
                                        <span className={`text-[9px] font-medium rounded-full px-2 py-0.5 transition-colors duration-300 ${
                                            hoveredIndex === i ? "text-white/30" : "text-gray-400 group-hover:text-white/30"
                                        }`}>
                                            +{project.tags.length - 3}
                                        </span>
                                    )} */}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="col-span-1 flex items-center justify-end gap-2">
                                <Link href={project.demoLink} target="_blank"
                                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        hoveredIndex === i
                                            ? "bg-white/10 text-white hover:bg-white/20"
                                            : "bg-gray-100 text-gray-500 group-hover:bg-white/10 group-hover:text-white"
                                    }`}>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                                <Link href={project.githubLink} target="_blank"
                                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        hoveredIndex === i
                                            ? "bg-white/10 text-white hover:bg-white/20"
                                            : "bg-gray-100 text-gray-500 group-hover:bg-white/10 group-hover:text-white"
                                    }`}>
                                    <Github className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                    {/* Bottom count */}
                    <motion.div {...fadeUp(0.5)} className="mt-6 flex items-center justify-between">
                        <p className="text-xs text-gray-400">
                            Showing <span className="font-semibold text-[#1A1A1A]">{projects.length}</span> projects
                        </p>
                        <Link href="https://github.com/aldinokhalifah" target="_blank"
                            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#1A1A1A] transition-colors">
                            View all on GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}