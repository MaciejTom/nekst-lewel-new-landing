'use client';

import { siteConfig } from '@/lib/config';
import { FadeUp } from '@/components/ui/Animate';

export function Support() {
  return (
    <section
      className="md:min-h-screen flex flex-col justify-center px-4 md:px-12 py-16 md:py-32 w-full max-w-[1600px] mx-auto"
      id="opieka"
      aria-labelledby="opieka-heading"
    >
      <FadeUp className="mb-16">
        <span
          className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 text-muted"
          aria-hidden="true"
        >
          04 — Opieka
        </span>
        <h2 id="opieka-heading" className="text-3d text-headline uppercase">
          Spokój
          <br />i Wsparcie
        </h2>
      </FadeUp>

      <div className="flex justify-center">
        <div className="space-y-12 text-left max-w-2xl w-full">
          <FadeUp delay={0.1}>
            <h3 className="text-3d text-title uppercase text-secondary">
              Nie chcesz się tym zajmować?
            </h3>
          </FadeUp>

          <FadeUp delay={0.2}>
            <span className="text-3d text-display uppercase">
              {siteConfig.pricing.support} zł / msc
            </span>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-body-lg font-bold uppercase text-secondary">
              Zmiany kiedy chcesz, hosting na szybkim serwerze, jeden telefon
              zamiast szukania &quot;informatyka&quot;
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
