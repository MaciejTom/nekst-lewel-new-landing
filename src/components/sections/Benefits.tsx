'use client';

import { benefits } from '@/lib/config';
import { FadeUp, Stagger, StaggerItem } from '@/components/ui/Animate';
import { SectionTracker } from '@/components/ui/SectionTracker';

export function Benefits() {
  return (
    <SectionTracker sectionName="korzysci">
      <section
        className="md:min-h-screen flex flex-col justify-center px-4 md:px-12 py-16 md:py-32 w-full max-w-[1600px] mx-auto"
        id="korzysci"
        aria-labelledby="korzysci-heading"
      >
      <FadeUp className="mb-16">
        <span
          className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 text-muted"
          aria-hidden="true"
        >
          01 — Dlaczego my
        </span>
        <h2 id="korzysci-heading" className="text-3d text-headline uppercase">
          Dlaczego
          <br />
          warto
        </h2>
      </FadeUp>

      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {benefits.map((benefit, index) => (
          <StaggerItem key={index} className="group">
            <h3 className="text-3d text-title uppercase mb-6 group-hover:text-white transition-colors">
              {benefit.title}
            </h3>
            <p className="text-body-lg font-bold uppercase text-secondary max-w-xl">
              {benefit.description}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
      </section>
    </SectionTracker>
  );
}
