'use client';

import { useTranslations } from 'next-intl';
import { Sliders, Disc, Mic2 } from 'lucide-react';

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      key: 'mixing',
      icon: Sliders,
    },
    {
      key: 'mastering',
      icon: Disc,
    },
    {
      key: 'production',
      icon: Mic2,
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-2xl p-8"
              >
                <Icon className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="text-zinc-400">
                  {t(`items.${service.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
