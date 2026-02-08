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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* NEKST - top left */}
      <div
        className="absolute top-0 left-0 p-4 md:p-8 md:pl-10 leading-none opacity-20"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] tracking-tighter uppercase leading-[0.75] select-none text-3d cursor-default block"
          style={{ fontWeight: 900 }}
        >
          Nekst
        </span>
      </div>

      {/* LEWEL - bottom right */}
      <div
        className="absolute bottom-0 right-0 p-4 md:p-8 md:pr-10 leading-none text-right opacity-20"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] tracking-tighter uppercase leading-[0.75] select-none text-3d cursor-default block"
          style={{ fontWeight: 900 }}
        >
          Lewel
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-7xl">
        <h1 className="text-3d text-hero uppercase mb-12 hero-key-text">
          <span>Zobaczysz swoją stronę</span>
          <br />
          <span
            onClick={cycleFont}
            style={{ fontFamily: `'${currentFont.name}', cursive`, fontWeight: 400, cursor: 'pointer' }}
            title={`Kliknij aby zmienić czcionkę (${currentFont.label})`}
          >
            zanim zapłacisz
          </span>
          <span> złotówkę.</span>
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

        <p className="text-body-lg font-bold uppercase tracking-tight text-secondary">
          {siteConfig.description} — od {siteConfig.pricing.website.toLocaleString('pl-PL')} zł
        </p>

        <div className="mt-12 flex gap-6">
          <a href={`tel:${siteConfig.owner.phone}`} className="btn btn-primary">
            <PhoneIcon size={20} />
            {siteConfig.owner.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
