"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/app/utils/projects"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

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
            <motion.div
              key={project.title}
              {...fadeUp(0.1 + i * 0.06)}
              className="rounded-3xl bg-white border border-gray-100 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-44 w-full bg-[#E8E8E2]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x300/E8E8E2/999999?text=" + encodeURIComponent(project.title) }}
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-base text-[#1A1A1A] mb-2">{project.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-[#F5F5F0] text-gray-600 text-[10px] font-medium rounded-full px-2.5 py-1">
                      {tag}
                    </span>
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

        {/* ── DESKTOP BENTO LAYOUT ── */}
        <div className="hidden md:flex flex-col gap-3">

          {/* Row 1: 2 Featured cards (large, image prominent) */}
          <div className="grid grid-cols-2 gap-3">
            {featured.map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp(0.1 + i * 0.08)}
                className="group rounded-3xl bg-white border border-gray-100 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 w-full bg-[#E8E8E2] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/600x300/E8E8E2/999999?text=" + encodeURIComponent(project.title) }}
                  />
                  <div className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-[#1A1A1A] mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-[#F5F5F0] text-gray-600 text-[10px] font-medium rounded-full px-2.5 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-5">
                    <Link href={project.demoLink} target="_blank"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#1A1A1A] text-white text-xs font-medium rounded-2xl py-2.5 hover:bg-gray-800 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </Link>
                    <Link href={project.githubLink} target="_blank"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#F5F5F0] text-gray-700 text-xs font-medium rounded-2xl py-2.5 hover:bg-[#E8E8E2] transition-colors">
                      <Github className="w-3.5 h-3.5" /> Source Code
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 3 cards (compact, no image) */}
          <div className="grid grid-cols-3 gap-3">
            {rest.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp(0.25 + i * 0.07)}
                className="group rounded-3xl bg-white border border-gray-100 p-6 flex flex-col justify-between hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div>
                  {/* Tags as colored dots */}
                  <div className="flex gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-[#F5F5F0] text-gray-500 text-[10px] font-medium rounded-full px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-base text-[#1A1A1A] mb-2 leading-snug">{project.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{project.description}</p>
                </div>
                <div className="flex gap-2 mt-5">
                  <Link href={project.demoLink} target="_blank"
                    className="flex-1 flex items-center justify-center gap-1 bg-[#1A1A1A] text-white text-[10px] font-medium rounded-2xl py-2 hover:bg-gray-800 transition-colors">
                    <ExternalLink className="w-3 h-3" /> Demo
                  </Link>
                  <Link href={project.githubLink} target="_blank"
                    className="flex-1 flex items-center justify-center gap-1 bg-[#F5F5F0] text-gray-700 text-[10px] font-medium rounded-2xl py-2 hover:bg-[#E8E8E2] transition-colors">
                    <Github className="w-3 h-3" /> Code
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: 2 remaining cards — wider */}
          <div className="grid grid-cols-2 gap-3">
            {rest.slice(3).map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp(0.45 + i * 0.07)}
                className="group rounded-3xl bg-[#1A1A1A] p-7 flex flex-col justify-between hover:bg-[#222] transition-colors"
              >
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-white/10 text-white/60 text-[10px] font-medium rounded-full px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-base text-white mb-2 leading-snug">{project.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed line-clamp-3">{project.description}</p>
                </div>
                <div className="flex gap-2 mt-5">
                  <Link href={project.demoLink} target="_blank"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white text-[#1A1A1A] text-[10px] font-medium rounded-2xl py-2 hover:bg-gray-100 transition-colors">
                    <ExternalLink className="w-3 h-3" /> Demo
                  </Link>
                  <Link href={project.githubLink} target="_blank"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-white/10 text-white text-[10px] font-medium rounded-2xl py-2 hover:bg-white/20 transition-colors">
                    <Github className="w-3 h-3" /> Code
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}