'use client';

import { siteConfig } from '@/lib/config';
import { trackPhoneClick } from '@/lib/analytics';

export function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Strona główna - Nekst Lewel"
    >
      {/* NEKST - top left (decorative, CSS animation) */}
      <div
        className="absolute top-0 left-0 p-4 md:p-8 md:pl-10 leading-none opacity-20 animate-slide-in-left"
        aria-hidden="true"
      >
        <span className="text-[18vw] tracking-tighter uppercase leading-[0.75] select-none text-3d cursor-default block font-heading font-bold">
          Nekst
        </span>
      </div>

      {/* LEWEL - bottom right (decorative, CSS animation) */}
      <div
        className="absolute bottom-0 right-0 p-4 md:p-8 md:pr-10 leading-none text-right opacity-20 animate-slide-in-right"
        aria-hidden="true"
      >
        <span className="text-[18vw] tracking-tighter uppercase leading-[0.75] select-none text-3d cursor-default block font-heading font-bold">
          Lewel
        </span>
      </div>

      {/* Main content - CSS animations for fast LCP */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-7xl">
        <h1 className="text-3d text-hero uppercase mb-12 animate-fade-in">
          <span>Zobaczysz swoją stronę</span>
          <br />
          <span className="text-drip hero-key-text">zanim zapłacisz</span>
          <span> złotówkę.</span>
        </h1>

        <p className="text-body-lg font-bold uppercase tracking-tight text-secondary animate-fade-in-delay-1">
          Gotowa nawet w 3 dni. Strony dla firm budowlanych. Od {siteConfig.pricing.website.toLocaleString('pl-PL')} zł.
        </p>

        <div className="mt-12 flex gap-6 animate-fade-in-delay-2">
          <a
            href={`tel:${siteConfig.owner.phone}`}
            className="btn btn-primary btn-shimmer"
            aria-label="Umów darmowe demo - zadzwoń teraz"
            onClick={() => trackPhoneClick('hero')}
          >
            Umów darmowe demo
          </a>
        </div>
      </div>
    </section>
  );
}
