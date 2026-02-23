"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, MapPin, Trophy } from "lucide-react"

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const stats = [
    {
        icon: GraduationCap,
        label: "Education",
        value: "Computer Science",
        sub: "STT Nurul Fikri",
        bg: "bg-white",
        dark: false,
    },
    {
        icon: Briefcase,
        label: "Experience",
        value: "2+ Year",
        sub: "Fullstack Development",
        bg: "bg-[#1A1A1A]",
        dark: true,
    },
    {
        icon: Trophy,
        label: "Achievement",
        value: "KSN 2025",
        sub: "Silver Medalist — English",
        bg: "bg-[#D4E9C8]",
        dark: false,
    },
    {
        icon: MapPin,
        label: "Availability",
        value: "Remote",
        sub: "Open to Work Worldwide",
        bg: "bg-white",
        dark: false,
    },
]

const interests = ["Fullstack Development", "Backend Systems", "Software Engineering", "Blockchain", "AI Integration"]

export default function About() {
    return (
        <section id="about" className="py-20 bg-[#F5F5F0] px-4">
        <div className="max-w-5xl mx-auto">

            {/* Section Header */}
            <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium mb-2">
            About Me
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-8">
            Who I Am
            </motion.h2>

            {/* ── MOBILE LAYOUT ── */}
            <div className="flex flex-col gap-3 md:hidden">

            {/* Bio */}
            <motion.div {...fadeUp(0.1)} className="rounded-3xl bg-[#1A1A1A] text-white p-6 flex flex-col gap-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">Background</p>
                <p className="text-white/80 text-sm leading-relaxed">
                I&apos;m a results oriented Software Engineer with a deep focus on designing web architectures that are{" "}
                <span className="text-white font-medium">secure, scalable, and maintainable</span>. My core expertise lies
                in robust server side development crafting clean RESTful APIs, implementing JWT authentication, and
                building comprehensive input validation systems.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                Beyond backend work, I think in fullstack taking complete ownership of solutions from database modeling
                to deployment. I&apos;m passionate about integrating{" "}
                <span className="text-white/80 font-medium">Generative AI (Gemini API)</span> to deliver high value functionality.
                </p>
            </motion.div>

            {/* Stats 2x2 */}
            <div className="grid grid-cols-2 gap-3">
                {stats.map(({ icon: Icon, label, value, sub, bg, dark }, i) => (
                <motion.div key={label} {...fadeUp(0.15 + i * 0.07)}
                    className={`rounded-3xl p-5 flex flex-col justify-between min-h-[120px] ${bg}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-2 ${dark ? "bg-white/10" : "bg-black/5"}`}>
                    <Icon className={`w-3.5 h-3.5 ${dark ? "text-white" : "text-gray-600"}`} />
                    </div>
                    <div>
                    <p className={`text-[10px] uppercase tracking-widest mb-0.5 ${dark ? "text-white/40" : "text-gray-400"}`}>{label}</p>
                    <p className={`font-bold text-sm leading-tight ${dark ? "text-white" : "text-[#1A1A1A]"}`}>{value}</p>
                    <p className={`text-xs mt-0.5 ${dark ? "text-white/50" : "text-gray-500"}`}>{sub}</p>
                    </div>
                </motion.div>
                ))}
            </div>

            {/* Interests */}
            <motion.div {...fadeUp(0.45)} className="rounded-3xl bg-[#D4E9C8] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#3a6b2a]/50 font-medium mb-3">Interests</p>
                <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                    <span key={item} className="bg-white/60 text-[#2d5220] text-xs font-medium rounded-full px-3 py-1">
                    {item}
                    </span>
                ))}
                </div>
            </motion.div>

            {/* Mindset */}
            <motion.div {...fadeUp(0.5)} className="rounded-3xl bg-[#EDE9E3] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-3">Mindset</p>
                <p className="text-[#1A1A1A] text-sm font-medium leading-relaxed">
                I&apos;m actively seeking opportunities where{" "}
                <span className="italic">strong engineering meets meaningful product impact</span> always open to
                challenging projects and continuous learning.
                </p>
            </motion.div>

            </div>

            {/* ── DESKTOP LAYOUT ── */}
            <div className="hidden md:grid grid-cols-12 gap-3">

            {/* Bio — large */}
            <motion.div
                {...fadeUp(0.1)}
                className="col-span-7 rounded-3xl bg-[#1A1A1A] text-white p-8 flex flex-col justify-between min-h-[280px]"
            >
                <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium">Background</p>
                <div className="space-y-4 mt-4">
                <p className="text-white/80 text-base leading-relaxed">
                    I&apos;m a results oriented Software Engineer with a deep focus on designing web architectures that are{" "}
                    <span className="text-white font-medium">secure, scalable, and maintainable</span>.
                    My core expertise lies in robust server-side development crafting clean RESTful APIs,
                    implementing JWT authentication, and building comprehensive input validation systems.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                    Beyond backend work, I think in fullstack taking complete ownership of solutions from database
                    modeling and optimization to deployment. I&apos;m also passionate about integrating modern technologies
                    like <span className="text-white/80 font-medium">Generative AI (Gemini API)</span> to deliver
                    high value, real world functionality.
                </p>
                </div>
            </motion.div>

            {/* Stats 2x2 */}
            <div className="col-span-5 grid grid-cols-2 gap-3">
                {stats.map(({ icon: Icon, label, value, sub, bg, dark }, i) => (
                <motion.div key={label} {...fadeUp(0.15 + i * 0.07)}
                    className={`rounded-3xl p-5 flex flex-col justify-between min-h-[130px] ${bg}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${dark ? "bg-white/10" : "bg-black/5"}`}>
                    <Icon className={`w-4 h-4 ${dark ? "text-white" : "text-gray-600"}`} />
                    </div>
                    <div>
                    <p className={`text-[10px] uppercase tracking-widest mb-0.5 ${dark ? "text-white/40" : "text-gray-400"}`}>{label}</p>
                    <p className={`font-bold text-sm leading-tight ${dark ? "text-white" : "text-[#1A1A1A]"}`}>{value}</p>
                    <p className={`text-xs mt-0.5 ${dark ? "text-white/50" : "text-gray-500"}`}>{sub}</p>
                    </div>
                </motion.div>
                ))}
            </div>

            {/* Interests */}
            <motion.div
                {...fadeUp(0.45)}
                className="col-span-5 rounded-3xl bg-[#D4E9C8] p-7 flex flex-col justify-between min-h-[130px]"
            >
                <p className="text-xs uppercase tracking-[0.2em] text-[#3a6b2a]/50 font-medium">Interests</p>
                <div className="flex flex-wrap gap-2 mt-4">
                {interests.map((item) => (
                    <span key={item} className="bg-white/60 text-[#2d5220] text-xs font-medium rounded-full px-3 py-1">
                    {item}
                    </span>
                ))}
                </div>
            </motion.div>

            {/* Mindset */}
            <motion.div
                {...fadeUp(0.5)}
                className="col-span-7 rounded-3xl bg-[#EDE9E3] p-7 flex flex-col justify-between min-h-[130px]"
            >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">Mindset</p>
                <p className="text-[#1A1A1A] text-base font-medium leading-relaxed mt-4">
                I&apos;m actively seeking opportunities where{" "}
                <span className="italic">strong engineering meets meaningful product impact</span> always open to challenging projects and continuous learning.
                </p>
            </motion.div>

            </div>
        </div>
        </section>
    )
}