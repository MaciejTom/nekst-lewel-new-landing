'use client';

import { siteConfig } from '@/lib/config';
import { trackPhoneClick } from '@/lib/analytics';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      aria-label="Strona główna - Nekst Lewel"
    >
      {/* NEKST - top left */}
      <motion.div
        className="absolute top-0 left-0 p-4 md:p-8 md:pl-10 leading-none opacity-20"
        aria-hidden="true"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-[18vw] tracking-tighter uppercase leading-[0.75] select-none text-3d cursor-default block font-heading font-bold">
          Nekst
        </span>
      </motion.div>

      {/* LEWEL - bottom right */}
      <motion.div
        className="absolute bottom-0 right-0 p-4 md:p-8 md:pr-10 leading-none text-right opacity-20"
        aria-hidden="true"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="text-[18vw] tracking-tighter uppercase leading-[0.75] select-none text-3d cursor-default block font-heading font-bold">
          Lewel
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-7xl">
        <motion.h1
          className="text-3d text-hero uppercase mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span>Zobaczysz swoją stronę</span>
          <br />
          <span className="text-drip hero-key-text">zanim zapłacisz</span>
          <span> złotówkę.</span>
        </motion.h1>

        <motion.p
          className="text-body-lg font-bold uppercase tracking-tight text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Gotowa nawet w 3 dni. Strony dla firm budowlanych. Od {siteConfig.pricing.website.toLocaleString('pl-PL')} zł.
        </motion.p>

        <motion.div
          className="mt-12 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={`tel:${siteConfig.owner.phone}`}
            className="btn btn-primary btn-shimmer"
            aria-label="Umów darmowe demo - zadzwoń teraz"
            onClick={() => trackPhoneClick('hero')}
          >
            Umów darmowe demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
