"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter } from "lucide-react"
import Swal from "sweetalert2"
import emailjs from '@emailjs/browser'

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

interface FormErrors {
    [key: string]: string
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "khalifahaldino@gmail.com",
        href: "mailto:khalifahaldino@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+62 813 8203 9103",
        href: "tel:+6281382039103",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Available for remote work worldwide",
        href: null,
    },
]

const socials = [
    { icon: Github, href: "https://github.com/aldinokhalifah", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aldino-khalifah", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/aldinokhalifah", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/AldinoKhal34366", label: "Twitter" },
]

export default function Contact() {
    const NEXT_PUBLIC_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    const form = useRef<HTMLFormElement>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
        if (!formData.subject.trim()) newErrors.subject = "Subject is required"
        if (!formData.message.trim()) newErrors.message = "Message is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return
        setIsSubmitting(true)
        try {
            const result = await emailjs.sendForm(
                `${NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
                `${NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
                form.current!,
                `${NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
            )
            if (result.text === "OK") {
                setFormData({ name: "", email: "", subject: "", message: "" })
                Swal.fire({ title: "Success!", text: "Message sent successfully!", icon: "success", confirmButtonText: "Close" })
            } else {
                throw new Error("Failed to send message")
            }
        } catch (error) {
            console.error("Error sending message:", error)
            Swal.fire({ title: "Error!", text: "Failed to send message. Please try again.", icon: "error", confirmButtonText: "Close" })
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputClass = (field: string) =>
        `w-full bg-[#F5F5F0] rounded-2xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-gray-400 outline-none transition-all border-2 ${
            errors[field] ? "border-red-300" : "border-transparent focus:border-[#1A1A1A]/20"
        }`

    return (
        <section id="contact" className="py-20 bg-[#F5F5F0] px-4">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium mb-2">
                    Contact
                </motion.p>
                <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-8">
                    Get In Touch
                </motion.h2>

                {/* ── MOBILE LAYOUT ── */}
                <div className="flex flex-col gap-3 md:hidden">

                    {/* Contact Info Cards */}
                    {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                        <motion.div key={label} {...fadeUp(0.1 + i * 0.07)}
                            className="rounded-3xl bg-white border border-gray-100 p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-[#F5F5F0] flex items-center justify-center shrink-0">
                                <Icon className="w-5 h-5 text-gray-600" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                                {href ? (
                                    <a href={href} className="text-sm font-medium text-[#1A1A1A] hover:underline">{value}</a>
                                ) : (
                                    <p className="text-sm font-medium text-[#1A1A1A]">{value}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {/* Social Links */}
                    <motion.div {...fadeUp(0.35)} className="rounded-3xl bg-[#1A1A1A] p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-3">Connect</p>
                        <div className="flex flex-wrap gap-2">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium rounded-full px-3 py-1.5 hover:bg-white/20 transition-colors">
                                    <Icon className="w-3.5 h-3.5" />
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div {...fadeUp(0.45)} className="rounded-3xl bg-white border border-gray-100 p-6">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-5">Send a Message</p>
                        <form ref={form} onSubmit={handleSubmit} className="space-y-3">
                            <div>
                                <input name="name" value={formData.name} onChange={handleChange}
                                    placeholder="Your Name" className={inputClass("name")} />
                                {errors.name && <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>}
                            </div>
                            <div>
                                <input name="email" type="email" value={formData.email} onChange={handleChange}
                                    placeholder="Your Email" className={inputClass("email")} />
                                {errors.email && <p className="text-red-500 text-xs mt-1 pl-1">{errors.email}</p>}
                            </div>
                            <div>
                                <input name="subject" value={formData.subject} onChange={handleChange}
                                    placeholder="Subject" className={inputClass("subject")} />
                                {errors.subject && <p className="text-red-500 text-xs mt-1 pl-1">{errors.subject}</p>}
                            </div>
                            <div>
                                <textarea name="message" value={formData.message} onChange={handleChange}
                                    placeholder="Tell me about your project..." rows={5}
                                    className={inputClass("message") + " resize-none"} />
                                {errors.message && <p className="text-red-500 text-xs mt-1 pl-1">{errors.message}</p>}
                            </div>
                            <button type="submit" disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] text-white text-sm font-semibold rounded-2xl py-3 hover:bg-gray-800 transition-colors disabled:opacity-60">
                                <Send className="w-4 h-4" />
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* ── DESKTOP BENTO LAYOUT ── */}
                <div className="hidden md:grid grid-cols-12 gap-3">

                    {/* Left col: Contact info + Socials */}
                    <div className="col-span-4 flex flex-col gap-3">

                        {/* Contact info cards */}
                        {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                            <motion.div key={label} {...fadeUp(0.1 + i * 0.07)}
                                className="rounded-3xl bg-white border border-gray-100 p-5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-[#F5F5F0] flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                                    {href ? (
                                        <a href={href} className="text-sm font-medium text-[#1A1A1A] hover:underline">{value}</a>
                                    ) : (
                                        <p className="text-sm font-medium text-[#1A1A1A]">{value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Social links */}
                        <motion.div {...fadeUp(0.35)} className="rounded-3xl bg-[#1A1A1A] p-6 flex flex-col justify-between flex-1">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-4">Connect</p>
                            <div className="flex flex-wrap gap-2">
                                {socials.map(({ icon: Icon, href, label }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium rounded-full px-3 py-1.5 hover:bg-white/20 transition-colors">
                                        <Icon className="w-3.5 h-3.5" />
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right col: Form */}
                    <motion.div {...fadeUp(0.2)} className="col-span-8 rounded-3xl bg-white border border-gray-100 p-8">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">Send a Message</p>
                        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input name="name" value={formData.name} onChange={handleChange}
                                        placeholder="Your Name" className={inputClass("name")} />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <input name="email" type="email" value={formData.email} onChange={handleChange}
                                        placeholder="Your Email" className={inputClass("email")} />
                                    {errors.email && <p className="text-red-500 text-xs mt-1 pl-1">{errors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <input name="subject" value={formData.subject} onChange={handleChange}
                                    placeholder="Subject" className={inputClass("subject")} />
                                {errors.subject && <p className="text-red-500 text-xs mt-1 pl-1">{errors.subject}</p>}
                            </div>
                            <div>
                                <textarea name="message" value={formData.message} onChange={handleChange}
                                    placeholder="Tell me about your project..." rows={6}
                                    className={inputClass("message") + " resize-none"} />
                                {errors.message && <p className="text-red-500 text-xs mt-1 pl-1">{errors.message}</p>}
                            </div>
                            <button type="submit" disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] text-white text-sm font-semibold rounded-2xl py-3.5 hover:bg-gray-800 transition-colors disabled:opacity-60">
                                <Send className="w-4 h-4" />
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}