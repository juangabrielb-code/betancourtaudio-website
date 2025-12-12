import Hero from '@/components/home/Hero';
import BentoServices from '@/components/home/BentoServices';

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen selection:bg-clay selection:text-white">
      {/* 1. Área de Impacto Visual */}
      <Hero />

      {/* 2. Servicios y Navegación Principal */}
      <BentoServices />

      {/* 3. Footer CTA Simple */}
      <section className="py-24 px-4 text-center border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/30">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            ¿Listo para sonar increíble?
          </h2>
          <p className="text-stone-500 font-body text-lg">
            Hablemos de tu próximo proyecto. La primera consulta es gratuita.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors shadow-lg">
              Contactar Ahora
            </button>
            <button className="px-8 py-4 border border-stone-300 dark:border-stone-700 rounded-full font-medium hover:border-clay hover:text-clay transition-colors bg-background">
              Suscribir al Newsletter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}