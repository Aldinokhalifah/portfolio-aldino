"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { experiences, typeColor } from "@/app/utils/experiences"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Experience() {
    const featured = experiences.filter((e) => e.featured)
    const rest = experiences.filter((e) => !e.featured)

    return (
        <section id="experience" className="py-20 bg-[#F5F5F0] px-4">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium mb-2">
                    Experience
                </motion.p>
                <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-8">
                    Work History
                </motion.h2>

                {/* ── MOBILE LAYOUT ── */}
                <div className="flex flex-col gap-3 md:hidden">
                    {experiences.map((exp, i) => (
                        <motion.div key={exp.role + exp.company} {...fadeUp(0.1 + i * 0.07)}
                            className={`rounded-3xl p-6 flex flex-col gap-4 ${exp.featured ? "bg-[#1A1A1A]" : "bg-white border border-gray-100"}`}>

                            {/* Header */}
                            <div className="flex items-start justify-between gap-3">
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${exp.featured ? "bg-white/10" : "bg-[#F5F5F0]"}`}>
                                    <Briefcase className={`w-5 h-5 ${exp.featured ? "text-white" : "text-gray-600"}`} />
                                </div>
                                <span className={`text-[10px] font-semibold uppercase tracking-widest rounded-full px-2.5 py-1 ${typeColor[exp.type]}`}>
                                    {exp.type}
                                </span>
                            </div>

                            {/* Role & Company */}
                            <div>
                                <h3 className={`font-bold text-base leading-snug mb-0.5 ${exp.featured ? "text-white" : "text-[#1A1A1A]"}`}>
                                    {exp.role}
                                </h3>
                                <p className={`text-sm font-medium ${exp.featured ? "text-white/60" : "text-gray-500"}`}>
                                    {exp.company}
                                </p>
                            </div>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-3">
                                <div className={`flex items-center gap-1.5 text-xs ${exp.featured ? "text-white/40" : "text-gray-400"}`}>
                                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                                </div>
                                <div className={`flex items-center gap-1.5 text-xs ${exp.featured ? "text-white/40" : "text-gray-400"}`}>
                                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                                </div>
                            </div>

                            {/* Description */}
                            <p className={`text-xs leading-relaxed ${exp.featured ? "text-white/60" : "text-gray-500"}`}>
                                {exp.description}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-1.5">
                                {exp.bullets.map((bullet, j) => (
                                    <li key={j} className={`flex items-start gap-2 text-xs leading-relaxed ${exp.featured ? "text-white/50" : "text-gray-400"}`}>
                                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${exp.featured ? "bg-white/30" : "bg-gray-300"}`} />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className={`text-[10px] font-medium rounded-full px-2.5 py-1 ${exp.featured ? "bg-white/10 text-white/70" : "bg-[#F5F5F0] text-gray-600"}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── DESKTOP BENTO LAYOUT ── */}
                <div className="hidden md:flex flex-col gap-3">

                    {/* Row 1: 2 featured cards */}
                    <div className="grid grid-cols-2 gap-3">
                        {featured.map((exp, i) => (
                            <motion.div key={exp.role + exp.company} {...fadeUp(0.1 + i * 0.08)}
                                className="rounded-3xl bg-[#1A1A1A] p-8 flex flex-col gap-4">

                                {/* Top */}
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 text-white" />
                                    </div>
                                    <span className={`text-[10px] font-semibold uppercase tracking-widest rounded-full px-2.5 py-1 ${typeColor[exp.type]}`}>
                                        {exp.type}
                                    </span>
                                </div>

                                {/* Role & Company */}
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-snug">{exp.role}</h3>
                                    <p className="text-white/50 text-sm font-medium">{exp.company}</p>
                                </div>

                                {/* Meta */}
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white/60 text-sm leading-relaxed">{exp.description}</p>

                                {/* Bullets */}
                                <ul className="space-y-1.5 flex-1">
                                    {exp.bullets.map((bullet, j) => (
                                        <li key={j} className="flex items-start gap-2 text-xs text-white/50 leading-relaxed">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="bg-white/10 text-white/70 text-[10px] font-medium rounded-full px-2.5 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Row 2: compact cards + summary */}
                    <div className="grid grid-cols-12 gap-3">

                        {/* Compact cards */}
                        <div className="col-span-8 grid grid-cols-2 gap-3">
                            {rest.map((exp, i) => (
                                <motion.div key={exp.role + exp.company} {...fadeUp(0.3 + i * 0.08)}
                                    className="rounded-3xl bg-white border border-gray-100 p-6 flex flex-col gap-3">

                                    {/* Top */}
                                    <div className="flex items-start justify-between">
                                        <div className="w-9 h-9 rounded-2xl bg-[#F5F5F0] flex items-center justify-center">
                                            <Briefcase className="w-4 h-4 text-gray-600" />
                                        </div>
                                        <span className={`text-[10px] font-semibold uppercase tracking-widest rounded-full px-2.5 py-1 ${typeColor[exp.type]}`}>
                                            {exp.type}
                                        </span>
                                    </div>

                                    {/* Role & Company */}
                                    <div>
                                        <h3 className="text-[#1A1A1A] font-bold text-sm leading-snug">{exp.role}</h3>
                                        <p className="text-gray-500 text-xs font-medium">{exp.company}</p>
                                    </div>

                                    {/* Meta */}
                                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                                        <Calendar className="w-3 h-3" /> {exp.period}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-400 text-xs leading-relaxed">{exp.description}</p>

                                    {/* Bullets — show max 2 for compact */}
                                    <ul className="space-y-1 flex-1">
                                        {exp.bullets.slice(0, 2).map((bullet, j) => (
                                            <li key={j} className="flex items-start gap-1.5 text-[11px] text-gray-400 leading-relaxed">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="bg-[#F5F5F0] text-gray-600 text-[10px] font-medium rounded-full px-2.5 py-1">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Summary card */}
                        <motion.div {...fadeUp(0.35)} className="col-span-4 rounded-3xl bg-[#D4E9C8] p-7 flex flex-col justify-between">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#3a6b2a]/50 font-medium">Summary</p>
                            <div className="flex flex-col gap-5 mt-4">
                                <div>
                                    <p className="text-3xl font-bold text-[#1A1A1A]">{experiences.length}+</p>
                                    <p className="text-[#2d5220] text-sm font-medium">Roles & Experiences</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#1A1A1A]">1+</p>
                                    <p className="text-[#2d5220] text-sm font-medium">Years in Web Dev</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#1A1A1A]">3+</p>
                                    <p className="text-[#2d5220] text-sm font-medium">Clients Served</p>
                                </div>
                            </div>
                            <p className="text-[#2d5220]/60 text-xs leading-relaxed mt-5">
                                Always open to new opportunities and challenging projects.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}