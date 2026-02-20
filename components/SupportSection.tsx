"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SupportSection() {
    const locations = [
        { name: "New York", address: "123 Broadway St, NY 10001" },
        { name: "London", address: "45 Oxford St, W1D 1BS" },
        { name: "Tokyo", address: "1-1 Shibuya, Tokyo 150-0002" },
        { name: "Berlin", address: "Alexanderplatz 1, 10178" }
    ]

    return (
        <section className="py-16 lg:py-24 bg-secondary/20" id="support">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Support Info */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 lg:mb-6">Expert Support</h2>
                            <p className="text-base lg:text-lg text-muted-foreground mb-8">
                                Our dedicated support team is here to help you get the most out of your Westmire experience.
                                Whether you need technical assistance or product recommendations, we've got you covered.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 lg:mb-12">
                                <Button className="gap-2">
                                    <MessageSquare className="w-4 h-4" />
                                    Live Chat
                                </Button>
                                <Button variant="outline" className="gap-2">
                                    <Mail className="w-4 h-4" />
                                    Email Support
                                </Button>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Locations</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {locations.map((loc, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-foreground">{loc.name}</h4>
                                                <p className="text-sm text-muted-foreground">{loc.address}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map/Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl"
                    >
                        {/* Abstract Map UI */}
                        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />

                        {/* Decorative "Map" Points */}
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-3 h-3 bg-primary rounded-full animate-ping"
                                style={{
                                    top: `${Math.random() * 80 + 10}%`,
                                    left: `${Math.random() * 80 + 10}%`,
                                    animationDelay: `${i * 0.5}s`
                                }}
                            />
                        ))}

                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <h4 className="text-white font-bold mb-2">Global Network</h4>
                                <p className="text-white/70 text-sm">24/7 Support available in 30+ countries worldwide.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
