"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Upload } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-background">
      {/* Background Ambient Effect */}
      <div className="absolute inset-0 bg-sonic-mesh opacity-60 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            Sculpting Sound <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Beyond Limits.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 max-w-2xl text-muted-foreground text-lg md:text-xl font-sans"
        >
          Mezcla, Mastering y Diseño Sonoro con tecnología de vanguardia.
          Gestiona tus proyectos, pagos y entregables en un solo lugar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-colors bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group">
            Iniciar Proyecto
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-colors border border-muted-foreground/20 rounded-full hover:bg-muted/50 hover:text-white focus:outline-none">
            <Play className="mr-2 h-4 w-4" />
            Escuchar Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
