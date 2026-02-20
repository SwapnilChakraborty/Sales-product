"use client"

import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-16" id="contact">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">Westmire Wired</h2>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Redefining the way you experience sound. Premium audio equipment for the modern creator.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Office</h3>
                        <address className="not-italic text-gray-400 space-y-2">
                            <p>123 Innovation Dr.</p>
                            <p>Tech City, TC 90210</p>
                            <p className="pt-2 text-white">+1 (555) 123-4567</p>
                        </address>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6">Contact</h3>
                        <div className="space-y-4">
                            <a href="mailto:hello@westmire.com" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors">
                                <Mail className="w-4 h-4" />
                                hello@westmire.com
                            </a>
                            <p className="text-gray-500 text-sm">
                                Mon-Fri: 9am - 6pm EST
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; 2026 Westmire Wired. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
