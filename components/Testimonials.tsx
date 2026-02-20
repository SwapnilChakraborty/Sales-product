"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "The spatial audio is genuinely mind-bending. I can't go back to normal headphones.",
        author: "Sarah J.",
        role: "Music Producer"
    },
    {
        quote: "Build quality is unmatched. Feels like a luxury car for your ears.",
        author: "Mike T.",
        role: "Tech Reviewer"
    },
    {
        quote: "Finally, ANC that actually silences the NYC subway. A commuter's dream.",
        author: "Jessica L.",
        role: "Digital Nomad"
    }
]

const brands = ["The Verge", "TechCrunch", "Wired", "Engadget", "Forbes", "GQ"]

export default function Testimonials() {
    return (
        <section className="py-32 bg-neutral-950 border-t border-white/5 overflow-hidden">
            <div className="container px-4 md:px-6 mb-20">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Trusted by Pros</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl relative"
                            >
                                <Quote className="w-8 h-8 text-primary/20 absolute top-6 left-6" />
                                <p className="text-neutral-300 relative z-10 mb-6 pt-8 text-lg font-medium">"{t.quote}"</p>
                                <div>
                                    <div className="text-white font-bold">{t.author}</div>
                                    <div className="text-primary text-sm">{t.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Brand Marquee */}
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <span key={i} className="text-4xl font-bold text-white/10 uppercase tracking-widest hover:text-white/30 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 items-center">
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <span key={i} className="text-4xl font-bold text-white/10 uppercase tracking-widest hover:text-white/30 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
