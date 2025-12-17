"use client";
import { motion } from "framer-motion";
import { Music, UploadCloud, CreditCard, Users, ArrowRight } from "lucide-react";

export default function BentoServices() {
    const services = [
        {
            key: "mixing-mastering",
            icon: Music,
            href: "#mixing",
            variant: "dark" as const,
            gridClass: "md:col-span-2 md:row-span-2",
            title: "Mezcla & Mastering",
            description: "Balance profesional, claridad espacial y estandar de la industria para tu musica.",
      },
        {
            key: "client-zone",
            icon: UploadCloud,
            href: "/client-zone",
            variant: "clay" as const,
            gridClass: "md:col-span-1",
            title: "Zona de Clientes",
            description: "Gestiona tus proyectos, revisiones y entregas en un solo lugar.",
        },
        {
            key: "payments",
            icon: CreditCard,
            href: "/payments",
            variant: "light" as const,
            gridClass: "md:col-span-1",
            title: "Pagos",
            description: "Sistema seguro de pagos y cotizaciones instantaneas para tus proyectos.",
        },
        {
            key: "academy",
            icon: Users,
            href: "/blog",
            variant: "light" as const,
            gridClass: "md:col-span-1 md:col-start-3 md:row-start-2",
            title: "Academia & Blog",
            description: "Aprende tecnicas de produccion y mantente al dia con tutoriales y articulos.",
      },
    ];

    const variantStyles = {
        dark: "bg-stone-900 text-white border-stone-800 hover:border-stone-700",
        clay: "bg-clay text-white border-wood hover:border-stone-900",
        light: "bg-white text-stone-900 border-stone-200 hover:border-clay",
    };

    const iconStyles = {
        dark: "text-clay",
        clay: "text-white",
        light: "text-clay",
    };

    return (
        <section className="py-24 bg-stone-100">
            <div className="container px-6 md:px-12 mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-display font-light text-stone-900 mb-16 
  text-center"
                >
                    Nuestros Servicios
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isLarge = service.gridClass.includes("col-span-2");

                        return (
                            <motion.a
                                key={service.key}
                                href={service.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`
                    group relative flex flex-col justify-between
                    p-8 rounded-2xl border-2
                    transition-all duration-300
                    hover:scale-[1.02] hover:shadow-2xl
                    ${variantStyles[service.variant]}
                    ${service.gridClass}
                  `}
                            >
                                <Icon className={`w-12 h-12 ${iconStyles[service.variant]}`} />

                                <div>
                                    <h3 className={`font-display font-light mb-2 ${isLarge ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                                        }`}>
                                        {service.title}
                                    </h3>
                                    <p className={`font-sans text-sm md:text-base leading-relaxed ${service.variant === "dark" ? "text-stone-400" :
                                        service.variant === "clay" ? "text-white/90" :
                                            "text-stone-600"
                                        }`}>
                                        {service.description}
                                    </p>
                                </div>

                                <ArrowRight className={`
                    absolute bottom-6 right-6 w-6 h-6
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300
                    group-hover:translate-x-1
                    ${iconStyles[service.variant]}
                  `} />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}