"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Lock, User, Github, Loader2 } from "lucide-react"
import { toast } from "sonner"

export default function SignupPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500))

        toast.success("Account created successfully! Welcome to Westmire Wired.")
        setIsLoading(false)
        router.push("/")
    }

    return (
        <div className="min-h-screen w-full flex bg-neutral-950 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Left Side - Visual */}
            <div className="hidden lg:flex w-1/2 bg-neutral-900 relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2576&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 max-w-md text-center"
                >
                    <h2 className="text-5xl font-bold mb-6 tracking-tight">Join the Revolution</h2>
                    <p className="text-xl text-neutral-300 leading-relaxed">
                        Experience audio like never before. Create an account to access exclusive drops, support, and community features.
                    </p>
                </motion.div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-12 group lg:hidden">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="mb-10">
                        <h1 className="text-4xl font-bold mb-2 tracking-tight">Create an account</h1>
                        <p className="text-neutral-400">Start your journey with Westmire Wired.</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-6 max-w-sm">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-300">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-300">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                <input
                                    required
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-neutral-300">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                <input
                                    required
                                    type="password"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                    placeholder="Create a password"
                                />
                            </div>
                        </div>

                        <Button disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 rounded-xl">
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-neutral-950 px-2 text-neutral-500">Or sign up with</span>
                            </div>
                        </div>

                        <Button variant="outline" type="button" onClick={() => toast.info("GitHub Signup is currently in demo mode.")} className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white py-6 rounded-xl">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                        </Button>

                        <p className="text-center text-sm text-neutral-400">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
