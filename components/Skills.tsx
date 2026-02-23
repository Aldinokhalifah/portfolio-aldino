"use client"

import { motion } from "framer-motion"
import { Layers, FileCode, Cpu, Coffee } from "lucide-react"
import { skills, certifications } from "@/app/utils/skills"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const highlights = [
    { icon: Layers, title: "Full Stack", desc: "End-to-end development expertise" },
    { icon: FileCode, title: "Clean Code", desc: "Maintainable & efficient solutions" },
    { icon: Cpu, title: "Optimization", desc: "Performance-focused development" },
    { icon: Coffee, title: "Problem Solving", desc: "Creative & analytical thinking" },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-[#F5F5F0] px-4">
        <div className="max-w-5xl mx-auto">

            {/* Section Header */}
            <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium mb-2">
            Skills
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-8">
            Tech Stack
            </motion.h2>

            {/* ── SKILL CARDS BENTO ── */}
            {/* Mobile: single column stack */}
            {/* Desktop: custom bento grid */}

            {/* Mobile Layout */}
            <div className="flex flex-col gap-3 md:hidden">
            {skills.map((group, i) => (
                <motion.div
                key={group.category}
                {...fadeUp(0.1 + i * 0.07)}
                className={`rounded-3xl p-5 ${group.bg}`}
                >
                <div className="flex items-center gap-2 mb-4">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${group.dark ? "bg-white/10" : "bg-black/5"}`}>
                    <span className={group.dark ? "text-white" : "text-gray-600"}>
                        {group.icon}
                    </span>
                    </div>
                    <p className={`text-xs uppercase tracking-[0.2em] font-medium ${group.dark ? "text-white/50" : "text-gray-400"}`}>
                    {group.category}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                    <div
                        key={skill.name}
                        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 ${
                        group.dark ? "bg-white/10" : "bg-black/5"
                        }`}
                    >
                        {skill.icon && <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5" />}
                        <span className={`text-xs font-medium ${group.dark ? "text-white/80" : "text-gray-700"}`}>
                        {skill.name}
                        </span>
                    </div>
                    ))}
                </div>
                </motion.div>
            ))}
            </div>

            {/* Desktop Bento Grid */}
            <div className="hidden md:grid grid-cols-12 gap-3">

            {/* Frontend — wide */}
            <motion.div {...fadeUp(0.1)} className={`col-span-7 rounded-3xl p-7 ${skills[0].bg}`}>
                <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-gray-600">
                    {skills[0].icon}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">{skills[0].category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                {skills[0].items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 bg-[#F5F5F0] rounded-full px-3 py-1.5 hover:bg-[#E8E8E2] transition-colors">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4" />}
                    <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>

            {/* Database & Cloud — narrow */}
            <motion.div {...fadeUp(0.15)} className={`col-span-5 rounded-3xl p-7 ${skills[2].bg}`}>
                <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-[#3a6b2a]/10 flex items-center justify-center text-[#3a6b2a]">
                    {skills[2].icon}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#3a6b2a]/50 font-medium">{skills[2].category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                {skills[2].items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 bg-white/60 rounded-full px-3 py-1.5">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4" />}
                    <span className="text-xs font-medium text-[#2d5220]">{skill.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>

            {/* Backend — dark, wide */}
            <motion.div {...fadeUp(0.2)} className={`col-span-8 rounded-3xl p-7 ${skills[1].bg}`}>
                <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    {skills[1].icon}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">{skills[1].category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                {skills[1].items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 hover:bg-white/20 transition-colors">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4" />}
                    <span className="text-xs font-medium text-white/80">{skill.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>

            {/* Blockchain — narrow */}
            <motion.div {...fadeUp(0.25)} className={`col-span-4 rounded-3xl p-7 ${skills[3].bg}`}>
                <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-gray-600">
                    {skills[3].icon}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">{skills[3].category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                {skills[3].items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 bg-black/5 rounded-full px-3 py-1.5">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4" />}
                    <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>

            {/* Tools — full width */}
            <motion.div {...fadeUp(0.3)} className={`col-span-12 rounded-3xl p-7 ${skills[4].bg} border border-gray-100`}>
                <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-gray-600">
                    {skills[4].icon}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">{skills[4].category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                {skills[4].items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 bg-[#F5F5F0] rounded-full px-3 py-1.5 hover:bg-[#E8E8E2] transition-colors">
                    {skill.icon && <img src={skill.icon} alt={skill.name} className="w-4 h-4" />}
                    <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                    </div>
                ))}
                </div>
            </motion.div>

            </div>

            {/* ── CERTIFICATIONS ── */}
            <motion.div {...fadeUp(0.4)} className="mt-3">
            <div className="rounded-3xl bg-[#1A1A1A] p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-5">Certifications</p>
                <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                    <div
                    key={cert.name}
                    className={`group relative flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium cursor-default transition-all hover:scale-105 ${cert.color}`}
                    >
                    <span className="font-semibold">{cert.issuer}</span>
                    <span className="text-current/70">·</span>
                    <span>{cert.name}</span>
                    {/* Tooltip on hover */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {cert.year}
                    </span>
                    </div>
                ))}
                </div>
            </div>
            </motion.div>

            {/* ── HIGHLIGHTS ── */}
            <motion.div
            {...fadeUp(0.5)}
            className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3"
            >
            {highlights.map(({ icon: Icon, title, desc }) => (
                <motion.div
                key={title}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-white border border-gray-100 p-5 flex flex-col items-center text-center gap-2"
                >
                <div className="w-10 h-10 rounded-2xl bg-[#F5F5F0] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <p className="font-semibold text-sm text-[#1A1A1A]">{title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    )
}