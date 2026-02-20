"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Zap, Shield, Wifi } from "lucide-react"

const features = [
    {
        title: "Adaptive ANC Gen 3",
        description: "Our new AI-driven chipset analyzes your environment 48,000 times per second to cancel noise before it reaches your ears.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop"
    },
    {
        title: "Lossless Wireless",
        description: "Experience studio-quality audio with our proprietary Westmire Link™ technology, delivering uncompressed sound at 0ms latency.",
        icon: Wifi,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "100-Hour Battery",
        description: "Forget charging anxiety. One charge lasts you weeks of commute, flights, and marathon gaming sessions.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop"
    }
]

export default function TechnologySection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    return (
        <section ref={containerRef} className="relative h-[300vh] lg:h-[400vh] bg-white text-black" id="technology">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="container px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center h-full">

                    {/* Visual Left Side */}
                    <div className="relative h-[35vh] sm:h-[45vh] lg:h-[60vh] w-full rounded-3xl overflow-hidden shadow-2xl">
                        {features.map((feature, index) => {
                            // Calculate range for each feature based on scroll progress
                            // 0-0.33, 0.33-0.66, 0.66-1
                            const start = index / features.length
                            const end = (index + 1) / features.length
                            const buffer = 0.05

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress,
                                [start, start + buffer, end - buffer, end],
                                [0, 1, 1, 0]
                            )

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const scale = useTransform(scrollYProgress,
                                [start, start + buffer, end - buffer, end],
                                [0.8, 1, 1, 1.1]
                            )

                            return (
                                <motion.div
                                    key={index}
                                    style={{ opacity, scale }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                        <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                                        <div className="text-lg sm:text-xl font-bold">{feature.title}</div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Content Right Side */}
                    <div className="relative h-[50vh] lg:h-[60vh] flex flex-col justify-center">
                        {features.map((feature, index) => {
                            const start = index / features.length
                            const end = (index + 1) / features.length

                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const isActive = useTransform(scrollYProgress, [start, end], [1, 0])
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(scrollYProgress, [start, end], [0, -50])
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const opacity = useTransform(scrollYProgress,
                                [start, start + 0.1, end - 0.1, end],
                                [0, 1, 1, 0]
                            )

                            return (
                                <motion.div
                                    key={index}
                                    style={{ opacity, y, display: index === 0 ? "block" : "absolute" }} // Simple hack to stack them appropriately in flow or absolute
                                    className={`transition-all duration-500 w-full ${index !== 0 ? "top-1/2 -translate-y-1/2" : ""}`}
                                >
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
                                        {feature.title}
                                    </h2>
                                    <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed mb-4 sm:mb-8">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-2 sm:space-y-4">
                                        {[1, 2, 3].map((_, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm sm:text-base font-medium text-neutral-800">
                                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                                Certified for Excellence
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}
