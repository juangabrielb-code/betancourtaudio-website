"use client";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center bg-stone-50 overflow-hidden">
      {/* Subtle decorative element - breathe animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linen rounded-full blur-3xl animate-breathe" />
      </div>

      <div className="container px-6 md:px-12 relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Title - Editorial Style with Crimson Pro */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-stone-900 leading-[1.1] mb-4"
        >
          Crafting Sound
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl font-display font-light text-clay mb-12"
        >
          Con técnica artesanal y tecnología de vanguardia
        </motion.p>

        {/* Command Palette Style Search Input */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 bg-white border-2 border-stone-300 rounded-lg px-6 py-4 shadow-lg hover:shadow-xl hover:border-clay transition-all">
            <Search className="w-5 h-5 text-stone-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="¿Qué servicio necesitas? Mezcla, mastering, producción..."
              className="flex-1 bg-transparent font-sans text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-sans text-stone-500 bg-stone-100 border border-stone-200 rounded">
              <Sparkles className="w-3 h-3" />
              Enter
            </kbd>
          </div>
        </motion.div>

        {/* Quick Links - Popular Searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-sans text-stone-600"
        >
          <span className="hidden sm:inline">Búsquedas populares:</span>
          <button className="px-4 py-2 bg-stone-100 hover:bg-clay hover:text-white rounded-full transition-colors duration-300">
            Mezcla Profesional
          </button>
          <button className="px-4 py-2 bg-stone-100 hover:bg-clay hover:text-white rounded-full transition-colors duration-300">
            Mastering
          </button>
          <button className="px-4 py-2 bg-stone-100 hover:bg-clay hover:text-white rounded-full transition-colors duration-300">
            Beat Making
          </button>
        </motion.div>
      </div>
    </section>
  );
}
