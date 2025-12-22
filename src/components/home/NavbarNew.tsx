"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogIn } from "lucide-react";
import Link from "next/link";

export default function NavbarNew() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#blog", label: "Blog" },
    { href: "#academia", label: "Academia" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800 shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }} className="w-10 h-10 bg-clay rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-semibold text-xl">B</span>
              </motion.div>
              <span className="hidden md:block font-display text-xl text-foreground group-hover:text-clay transition-colors">Betancourt Audio</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-stone-600 dark:text-stone-400 hover:text-clay transition-colors font-sans text-sm font-medium relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clay transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
                <LogIn className="w-4 h-4 text-stone-600 dark:text-stone-400" />
                <span className="text-sm font-sans text-stone-600 dark:text-stone-400">Login</span>
              </Link>
              <Link href="/signup" className="flex items-center space-x-2 px-6 py-2 bg-clay text-white rounded-lg hover:bg-wood transition-colors shadow-md">
                <User className="w-4 h-4" />
                <span className="text-sm font-sans font-medium">Sign Up</span>
              </Link>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800">
            <div className="container mx-auto px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg py-2 hover:text-clay transition-colors">{link.label}</Link>
              ))}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
                <Link href="/login" className="flex items-center justify-center gap-2 px-6 py-3 border border-stone-300 dark:border-stone-700 rounded-lg">
                  <LogIn className="w-4 h-4" />
                  <span className="text-sm font-medium">Login</span>
                </Link>
                <Link href="/signup" className="flex items-center justify-center gap-2 px-6 py-3 bg-clay text-white rounded-lg">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Sign Up</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}