"use client";
import { motion } from "framer-motion";
import { Play, Pause, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function PortfolioShowcase() {
    const [currentTrack, setCurrentTrack] = useState<number | null>(null);

    const projects = [
        {
            id: 1, title: "Urban Dreams", artist: "MC Rythm", genre: "Hip Hop",
            service: "Mezcla & Mastering", color: "from-purple-500 to-pink-500"
        },
        {
            id: 2, title: "Acoustic Sessions", artist: "Luna Acoustic", genre: "Folk",
            service: "Grabación & Mezcla", color: "from-amber-500 to-orange-500"
        },
        {
            id: 3, title: "Electronic Waves", artist: "Synthwave Co.", genre:
                "Electronic", service: "Producción Completa", color: "from-cyan-500 to-blue-500"
        },
    ];

    return (
        <section id="portafolio" className="py-24 bg-stone-50 dark:bg-stone-900/30">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="font-display text-5xl md:text-6xl font-light 
  text-foreground mb-4">Trabajos Destacados</h2>
                    <p className="text-lg text-stone-600 dark:text-stone-400 font-sans 
  max-w-2xl mx-auto">Escucha la calidad profesional que entregamos</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div key={project.id} initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{
                                delay: index * 0.1
                            }} className="group bg-white dark:bg-stone-900 rounded-2xl 
  overflow-hidden border border-stone-200 dark:border-stone-800 hover:shadow-2xl 
  transition-all duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br 
  ${project.color} opacity-80`} />
                                <div className="absolute inset-0 flex items-center 
  justify-center">
                                    <button onClick={() => setCurrentTrack(currentTrack ===
                                        project.id ? null : project.id)} className="w-16 h-16 bg-white/20
  backdrop-blur-md rounded-full flex items-center justify-center border-2
  border-white/40 hover:scale-110 transition-transform">
                                        {currentTrack === project.id ? <Pause className="w-7 h-7 
  text-white fill-white" /> : <Play className="w-7 h-7 text-white fill-white ml-1"
                                        />}
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                <div>
                                    <h3 className="font-display text-2xl text-foreground 
  mb-1">{project.title}</h3>
                                    <p className="text-stone-600 dark:text-stone-400 font-sans 
  text-sm">{project.artist}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-clay/10 text-clay rounded-full 
  text-xs font-sans font-medium">{project.genre}</span>
                                    <span className="px-3 py-1 bg-stone-100 dark:bg-stone-800 
  text-stone-700 dark:text-stone-300 rounded-full text-xs 
  font-sans">{project.service}</span>
                                </div>
                                <button className="w-full flex items-center justify-center gap-2
   px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 
  rounded-lg hover:bg-clay hover:text-white transition-colors text-sm font-sans 
  font-medium">
                                    <ExternalLink className="w-4 h-4" />Ver Caso de Estudio
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} className="text-center mt-12">
                    <button className="px-8 py-4 bg-foreground text-background 
  rounded-full font-sans font-medium hover:bg-clay hover:text-white 
  transition-colors shadow-lg">Ver Portafolio Completo</button>
                </motion.div>
            </div>
        </section>
    );
}