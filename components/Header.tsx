"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingBag } from "lucide-react"
import { toast } from "sonner"

export default function Header() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#technology", label: "Technology" },
    { href: "#categories", label: "Categories" },
    { href: "#support", label: "Support" },
  ]

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className={cn(
            "relative flex items-center justify-between px-6 py-3 transition-all duration-300 ease-in-out",
            "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full",
            isScrolled ? "w-full max-w-4xl" : "w-full max-w-6xl"
          )}
          style={{
            boxShadow: isScrolled
              ? "0 10px 30px -10px rgba(0,0,0,0.5)"
              : "0 4px 6px -1px rgba(0,0,0,0.1)"
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-10">
            <span className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">🎧</span>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors">
              Westmire
              <span className="text-primary">.Wired</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group rounded-full hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 z-10">
            <Button
              size="sm"
              className="rounded-full h-9 px-5 bg-white text-black hover:bg-white/90 font-semibold shadow-lg shadow-white/10 transition-transform hover:scale-105 active:scale-95"
              onClick={() => toast.info("Demo Mode: Checkout is disabled.")}
            >
              <span>Buy Now</span>
              <ShoppingBag className="w-4 h-4 ml-2" />
            </Button>

            <button
              className="md:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-32 px-6 flex flex-col items-center gap-8 md:hidden"
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-3xl font-bold text-white/90 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 w-full max-w-xs pt-8 border-t border-white/10"
          >
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10">
                Log in
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Sign up
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
