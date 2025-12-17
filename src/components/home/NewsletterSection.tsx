"use client";
import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, Twitter, Music2 } from "lucide-react";

export default function NewsletterSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{
                        opacity:
                            1, x: 0
                    }} viewport={{ once: true }}>
                        <h2 className="font-display text-4xl md:text-5xl font-light 
  text-foreground mb-4">Suscríbete al Newsletter</h2>
                        <p className="text-lg text-stone-600 dark:text-stone-400 font-sans 
  mb-8">Recibe tips de producción y recursos gratuitos cada semana</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 
  h-5 text-stone-400" />
                                <input type="email" placeholder="tu@email.com" className="w-full
   pl-12 pr-4 py-4 bg-white dark:bg-stone-900 border-2 border-stone-300 
  dark:border-stone-700 rounded-lg font-sans text-foreground 
  placeholder:text-stone-400 focus:outline-none focus:border-clay 
  transition-colors" />
                            </div>
                            <button className="px-8 py-4 bg-clay text-white rounded-lg 
  font-sans font-medium hover:bg-wood transition-colors shadow-lg 
  whitespace-nowrap">Suscribirme</button>
                        </div>
                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-3 
  font-sans">No spam. Cancela cuando quieras.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{
                        opacity: 1,
                        x: 0
                    }} viewport={{ once: true }}>
                        <h3 className="font-display text-3xl font-light text-foreground 
  mb-6">Síguenos</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Instagram, label: "Instagram", link: "#", color:
                                        "from-pink-500 to-purple-500"
                                },
                                {
                                    icon: Youtube, label: "YouTube", link: "#", color:
                                        "from-red-500 to-red-600"
                                },
                                {
                                    icon: Twitter, label: "Twitter", link: "#", color:
                                        "from-blue-400 to-blue-500"
                                },
                                {
                                    icon: Music2, label: "SoundCloud", link: "#", color:
                                        "from-orange-500 to-orange-600"
                                },
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a key={index} href={social.link} whileHover={{
                                        scale:
                                            1.05
                                    }} whileTap={{ scale: 0.95 }} className={`flex items-center gap-4 p-4 
  bg-gradient-to-br ${social.color} rounded-xl text-white hover:shadow-lg 
  transition-shadow`}>
                                        <Icon className="w-6 h-6" />
                                        <span className="font-sans 
  font-medium">{social.label}</span>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}