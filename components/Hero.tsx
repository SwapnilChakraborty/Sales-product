"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { toast } from "sonner"

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

    return (
        <section ref={containerRef} className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-neutral-950 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 h-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">

                    {/* Text Content */}
                    <motion.div
                        style={{ y, opacity }}
                        className="flex flex-col gap-6 md:gap-8 text-center lg:text-left pt-4 lg:pt-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs font-medium text-white mb-4 sm:mb-6 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                New Release 2026
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] mb-4 sm:mb-6">
                                Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-purple-400">Audio</span> Bliss.
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-[500px] mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
                        >
                            Experience sound in its purest form. The Westmire A56 redefines acoustic precision with AI-driven spatial audio.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto rounded-full h-12 sm:h-14 px-8 text-base bg-white text-black hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95"
                                onClick={() => toast.info("Demo Mode: Pre-orders are currently closed.")}
                            >
                                Pre-order Now
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>

                            <div className="flex items-center gap-3 text-sm font-medium text-white/80 cursor-pointer group hover:text-white transition-colors py-2">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Play className="w-4 h-4 fill-current" />
                                </div>
                                Watch the Film
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Interactive Image */}
                    <motion.div
                        className="relative h-[35vh] sm:h-[45vh] lg:h-[80vh] w-full flex items-center justify-center perspective-[1000px] mt-8 lg:mt-0"
                        style={{ scale }}
                    >
                        <ProductDisplay />
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase"
            >
                Scroll
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    )
}

function ProductDisplay() {
    const ref = useRef<HTMLDivElement>(null)

    const x = useSpring(0, { stiffness: 100, damping: 30 })
    const y = useSpring(0, { stiffness: 100, damping: 30 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        // Calculate rotation based on cursor position relative to center
        // Max rotation: 15 degrees
        const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10

        x.set(rotateX)
        y.set(rotateY)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX: x, rotateY: y }}
            className="relative w-full h-full max-w-[600px] aspect-square cursor-grab active:cursor-grabbing preserve-3d"
        >
            {/* Glow layers behind the headphone */}
            <div className="absolute inset-[5%] bg-gradient-to-tr from-primary/30 via-purple-500/20 to-transparent rounded-full blur-[90px]" />
            <div className="absolute inset-[15%] bg-primary/15 rounded-full blur-[60px]" />

            {/* mix-blend-mode: multiply removes white bg on dark surface */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/Wireless-Headphone-Transparent-Free-PNG.webp"
                alt="Westmire A56 Headset"
                className="absolute inset-0 w-full h-full object-contain z-10"
                style={{ mixBlendMode: "multiply" }}
            />

            {/* Floating badge */}
            <motion.div
                className="absolute top-[15%] right-[2%] sm:right-[5%] p-3 sm:p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl z-20"
                style={{ translateZ: "40px" }}
            >
                <div className="text-[10px] sm:text-xs text-white/60 mb-0.5 sm:mb-1">Battery Life</div>
                <div className="text-base sm:text-xl font-bold text-white">40 Hrs</div>
            </motion.div>
        </motion.div>
    )
}
