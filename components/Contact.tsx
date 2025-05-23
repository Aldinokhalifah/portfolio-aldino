"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import  Button  from "@/components/ui/Button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Swal from "sweetalert2"

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

interface FormErrors {
    [key: string]: string
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format'
        }
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required'
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.subject, // Using subject field as phone for API compatibility
                    message: `Subject: \n\n${formData.message}`
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'An error occurred')
            }

            // Reset form
            setFormData({ name: "", email: "", subject: "", message: "" })
            Swal.fire({
                title: 'Success!',
                text: 'Message sent successfully!',
                icon: 'success',
                confirmButtonText: 'Close'
            })
            
        } catch (error) {
            console.error('Error sending message:', error)
            alert('Failed to send message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-background/50 relative">
        <div className="absolute inset-0 z-0">
            <div className="absolute bottom-1/4 left-1/3 h-[30vh] w-[30vh] rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute top-1/4 right-1/3 h-[30vh] w-[30vh] rounded-full bg-purple-500/10 blur-[100px]" />
        </div>

        <div className="container px-4 relative z-10">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
            >
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-white/40">
                Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
            </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
            <motion.div
                className="md:col-span-1 space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card className="border border-white/15 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/10 text-primary">
                    <Mail className="h-6 w-6" />
                    </div>
                    <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground text-white/40">khalifahaldino@gmail.com</p>
                    </div>
                </CardContent>
                </Card>

                <Card className="border border-white/15 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/10 text-primary">
                    <Phone className="h-6 w-6" />
                    </div>
                    <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground text-white/40">+62 813 8203 9103</p>
                    </div>
                </CardContent>
                </Card>

                <Card className="border border-white/15 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-white/10 text-primary">
                    <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground text-white/40">Available for remote work worldwide</p>
                    </div>
                </CardContent>
                </Card>
            </motion.div>

            <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Card className="border border-white/15 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium">
                            Your Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className={`bg-background/50 border rounded-md p-2 border-white/10 ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium">
                            Your Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className={`bg-background/50 border rounded-md p-2 border-white/10 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                        </label>
                        <input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className={`bg-background/50 border rounded-md p-2 border-white/10 ${errors.subject ? 'border-red-500' : ''}`}
                        />
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>

                    <div className="space-y-2 flex flex-col">
                        <label htmlFor="message" className="text-sm font-medium">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        className={`bg-background/50 border rounded-md p-2 border-white/10 ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        disabled={isSubmitting}
                    >
                        <Send className="h-4 w-4 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    </form>
                </CardContent>
                </Card>
            </motion.div>
            </div>
        </div>
        </section>
    )
}