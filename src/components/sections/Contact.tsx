'use client';

import { siteConfig } from '@/lib/config';
import { FadeUp } from '@/components/ui/Animate';

export function Contact() {
  return (
    <section
      className="md:min-h-screen flex flex-col justify-center px-4 md:px-12 py-16 md:py-32 w-full max-w-[1600px] mx-auto"
      id="kontakt"
      aria-labelledby="kontakt-heading"
    >
      <FadeUp className="mb-16">
        <span
          className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 text-muted"
          aria-hidden="true"
        >
          05 — Kontakt
        </span>
        <h2 id="kontakt-heading" className="text-3d text-headline uppercase">Porozmawiajmy</h2>
      </FadeUp>

      <div className="flex justify-center">
        <div className="space-y-8 text-left max-w-2xl w-full">
          <FadeUp delay={0.1}>
            <span className="text-3d text-title uppercase block">
              {siteConfig.owner.name}
            </span>
            <p className="text-body-lg font-bold uppercase text-secondary mt-[52px]">
              {siteConfig.owner.location}
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <a
              href={`tel:${siteConfig.owner.phone}`}
              className="text-3d text-display uppercase block hover:translate-x-4 transition-transform"
              aria-label={`Zadzwoń pod numer ${siteConfig.owner.phoneFormatted}`}
            >
              {siteConfig.owner.phoneFormatted}
            </a>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-body-lg font-bold uppercase text-secondary mt-8">
              Odpowiadam osobiście. Jeden telefon wystarczy.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
