"use client";
import { motion } from "framer-motion";
import { Star, Music, Users, Award } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { icon: Music, value: "500+", label: "Tracks Producidos" },
    { icon: Users, value: "150+", label: "Artistas Satisfechos" },
    { icon: Award, value: "10+", label: "Años de Experiencia" },
    { icon: Star, value: "4.9", label: "Rating Promedio" },
  ];
  const testimonials = [
    { name: "Carlos Mendez", role: "Artista Indie", content: "La calidad de trabajo de Betancourt Audio superó todas mis expectativas.", rating: 5 },
    { name: "María González", role: "Productora Musical", content: "Trabajo impecable, atención al detalle y entregas a tiempo.", rating: 5 },
    { name: "DJ Pulse", role: "Productor EDM", content: "Transformaron mis demos en tracks listos para radio.", rating: 5 },
  ];
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-8 bg-stone-50 dark:bg-stone-900/50 rounded-2xl border border-stone-200 dark:border-stone-800">
                <Icon className="w-10 h-10 mx-auto mb-4 text-clay" />
                <div className="font-display text-5xl font-light text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-stone-600 dark:text-stone-400 font-sans">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">Lo Que Dicen Nuestros Clientes</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-8 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-clay text-clay" />)}</div>
              <p className="text-stone-700 dark:text-stone-300 font-sans mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-display text-lg text-foreground">{testimonial.name}</div>
                <div className="text-sm text-stone-600 dark:text-stone-400 font-sans">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}