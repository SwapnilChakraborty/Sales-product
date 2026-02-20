"use client"

import { motion } from "framer-motion"
import { Smartphone, Laptop, Headphones, Watch, Gamepad2, Camera } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CategorySection() {
    return (
        <section className="py-32 bg-neutral-950" id="categories">
            <div className="container px-4 md:px-6">
                <div className="mb-16 md:flex justify-between items-end">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            Curated for <span className="text-primary">Creator-Pros</span>.
                        </h2>
                        <p className="text-neutral-400 text-lg">
                            Browse our collection of premium tools designed to elevate your workflow and lifestyle.
                        </p>
                    </div>
                    <Link href="#all" className="hidden md:block text-white border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors">
                        View All Categories
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 h-auto lg:h-[600px]">
                    {/* Large Item - Audio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                        <Image
                            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop"
                            alt="Audio Equipment"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <Headphones className="w-8 h-8 text-primary mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">High-Fidelity Audio</h3>
                            <p className="text-neutral-300 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                Studio-grade headphones and speakers for the discerning ear.
                            </p>
                            <span className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/50 pb-1">Shop Collection</span>
                        </div>
                    </motion.div>

                    {/* Medium Item - Laptops */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 lg:col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 p-6 flex flex-col justify-between"
                    >
                        <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors" />
                        <Laptop className="w-8 h-8 text-blue-400 mb-4 relative z-10" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white">Computing</h3>
                            <p className="text-neutral-400 text-sm mt-2">Power stations for heavy rendering.</p>
                        </div>
                    </motion.div>

                    {/* Medium Item - Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 lg:col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 p-6 flex flex-col justify-between"
                    >
                        <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors" />
                        <Smartphone className="w-8 h-8 text-purple-400 mb-4 relative z-10" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white">Mobile</h3>
                            <p className="text-neutral-400 text-sm mt-2">Flagship devices and ecosystems.</p>
                        </div>
                    </motion.div>

                    {/* Medium Item - Wearables */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 lg:col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 p-6 flex flex-col justify-between"
                    >
                        <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-colors" />
                        <Watch className="w-8 h-8 text-orange-400 mb-4 relative z-10" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white">Wearables</h3>
                            <p className="text-neutral-400 text-sm mt-2">Next-gen health tracking.</p>
                        </div>
                    </motion.div>

                    {/* Medium Item - Gaming */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1 lg:col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 p-6 flex flex-col justify-between"
                    >
                        <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-colors" />
                        <Gamepad2 className="w-8 h-8 text-green-400 mb-4 relative z-10" />
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white">Gaming</h3>
                            <p className="text-neutral-400 text-sm mt-2">Peripherals for e-sports.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
