"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPreview() {
  const posts = [
    { title: "5 Errores Comunes en la Mezcla", excerpt: "Descubre los errores más frecuentes que cometen productores emergentes.", category: "Tutoriales", date: "12 Dic 2024", readTime: "8 min", image: "from-blue-500 to-purple-500" },
    { title: "Mastering para Streaming 2024", excerpt: "Todo sobre loudness, LUFS y preparación para plataformas digitales.", category: "Guías", date: "10 Dic 2024", readTime: "12 min", image: "from-green-500 to-teal-500" },
    { title: "Mi Setup de Home Studio", excerpt: "Los equipos y plugins que uso para entregar mezclas profesionales.", category: "Gear", date: "8 Dic 2024", readTime: "6 min", image: "from-orange-500 to-red-500" },
  ];
  return (
    <section id="blog" className="py-24 bg-stone-50 dark:bg-stone-900/30">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">Blog & Recursos</h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 font-sans max-w-2xl mx-auto">Aprende técnicas de producción, mixing y mastering</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:shadow-2xl transition-all duration-300">
              <div className={`h-48 bg-gradient-to-br ${post.image}`} />
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-clay/10 text-clay rounded-full text-xs font-sans font-medium">{post.category}</span>
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                    <Clock className="w-3.5 h-3.5" />{post.readTime}
                  </div>
                </div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-clay transition-colors">{post.title}</h3>
                <p className="text-stone-600 dark:text-stone-400 font-sans text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                    <Calendar className="w-3.5 h-3.5" />{post.date}
                  </div>
                  <Link href="#" className="flex items-center gap-2 text-sm font-sans font-medium text-clay hover:gap-3 transition-all">
                    Leer más<ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <Link href="/blog" className="inline-block px-8 py-4 bg-foreground text-background rounded-full font-sans font-medium hover:bg-clay hover:text-white transition-colors shadow-lg">Ver Todos los Artículos</Link>
        </motion.div>
      </div>
    </section>
  );
}