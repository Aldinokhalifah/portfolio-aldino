"use client"

import  Button  from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {

    const handleEmail = () => {
        const link = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNpzqqDLLCHZJpxzZTrWxpMkkTdgbmzgvHlsGdvFBDcQPPSmkkQGCflhtgTqGRCBTHnwL";
        window.location.href = link;
    }

    return (
        <>
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background/90">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40vh] w-[40vh] rounded-full bg-purple-500/20 blur-[100px]" />
                    <div className="absolute top-1/3 right-1/4 h-[30vh] w-[30vh] rounded-full bg-blue-500/20 blur-[100px]" />
                </div>

                <motion.div
                    className="container px-4 z-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                    className="mb-6 overflow-hidden rounded-full inline-block border-2 border-primary/20 p-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    >
                    <Image
                        src="/images/logo.png"
                        alt="Aldino Khalifah"
                        width={150}
                        height={150}
                        className="rounded-full object-cover border-2 border-white/15"
                    />
                    </motion.div>

                    <motion.h1
                    className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    >
                    Aldino Khalifah
                    </motion.h1>

                    <motion.h2
                    className="text-xl md:text-2xl text-muted-foreground mb-6 text-white/40 text-pretty"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    >
                    Fullstack Developer | Software Engineer | Backend Developer
                    </motion.h2>

                    <motion.p
                    className="max-w-2xl mx-auto text-muted-foreground mb-8 text-white/40 text-pretty"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    >
                    Crafting elegant web solutions modern technologies. Passionate about creating
                    seamless user experiences through clean code and innovative design.
                    </motion.p>

                    <motion.div
                    className="flex flex-wrap gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    >
                    <Button
                        size="md"
                        variant="primary"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold"
                    >
                        View Projects
                    </Button>
                    <Button size="md" variant="outline" onClick={handleEmail} className="hover:bg-white/10 font-semibold">
                        Contact Me
                    </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                    <Link href="#about">
                    <Button variant="outline" size="icon" className="border-0">
                        <ArrowDown className="h-6 w-6" />
                    </Button>
                    </Link>
                </motion.div>
            </section>
        </>
    );
}

