'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config';
import { PhoneIcon } from '@/components/ui';

const drippingFonts = [
  { name: 'Rubik Wet Paint', label: 'Wet Paint' },
  { name: 'Rubik Puddles', label: 'Puddles' },
  { name: 'Rubik Vinyl', label: 'Vinyl' },
];

export function Hero() {
  const [fontIndex, setFontIndex] = useState(0);
  const currentFont = drippingFonts[fontIndex];

  const cycleFont = () => {
    setFontIndex((prev) => (prev + 1) % drippingFonts.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-center">
      {/* Background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="text-[40vw] font-black uppercase leading-none whitespace-nowrap">
          {siteConfig.name}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-3d text-hero uppercase mb-8">
          <span>Zobaczysz swoją stronę</span>
          <br />
          <span
            onClick={cycleFont}
            style={{ fontFamily: `'${currentFont.name}', cursive`, fontWeight: 400, cursor: 'pointer' }}
            title={`Kliknij aby zmienić czcionkę (${currentFont.label})`}
          >
            zanim zapłacisz
          </span>
          <br />
          <span>złotówkę.</span>
        </h1>

        {/* Font indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {drippingFonts.map((font, index) => (
            <button
              key={font.name}
              onClick={() => setFontIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === fontIndex ? 'bg-black scale-125' : 'bg-black/30 hover:bg-black/50'
              }`}
              title={font.label}
            />
          ))}
        </div>

        <p className="text-body-lg font-bold uppercase tracking-tight text-secondary mb-12">
          {siteConfig.description} — od {siteConfig.pricing.website.toLocaleString('pl-PL')} zł
        </p>

        <div className="flex justify-center gap-6">
          <a
            href={`tel:${siteConfig.owner.phone}`}
            className="btn btn-primary"
          >
            <PhoneIcon size={20} />
            {siteConfig.owner.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
