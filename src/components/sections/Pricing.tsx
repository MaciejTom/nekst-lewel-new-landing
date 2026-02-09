'use client';

import { siteConfig } from '@/lib/config';
import { FadeUp } from '@/components/ui/Animate';

export function Pricing() {
  return (
    <section
      className="md:min-h-screen flex flex-col justify-center px-4 md:px-12 py-16 md:py-32 w-full max-w-[1600px] mx-auto"
      id="oferta"
      aria-labelledby="oferta-heading"
    >
      <FadeUp className="mb-16">
        <span
          className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 text-muted"
          aria-hidden="true"
        >
          03 — Ile to kosztuje
        </span>
        <h2 id="oferta-heading" className="text-3d text-headline uppercase">
          Przejrzysta
          <br />
          Inwestycja
        </h2>
      </FadeUp>

      <div className="flex justify-center">
        <div className="space-y-12 text-left max-w-2xl w-full">
          <FadeUp delay={0.1}>
            <span className="text-3d text-display uppercase">
              od {siteConfig.pricing.website.toLocaleString('pl-PL')} zł
            </span>
          </FadeUp>

          <FadeUp delay={0.2} className="space-y-6">
            <p className="text-title uppercase tracking-tight">Płatność 50/50</p>
            <p className="text-body-lg font-bold uppercase text-secondary">
              Połowa po akceptacji demo, połowa po uruchomieniu
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="pt-4">
            <span className="inline-block px-6 py-3 border-2 border-current text-sm font-bold uppercase tracking-widest">
              Żadnych ukrytych kosztów
            </span>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
