import { benefits } from '@/lib/config';
import { Section, SectionHeader } from '@/components/ui';

export function Benefits() {
  return (
    <Section id="korzysci">
      <SectionHeader
        label="01 — Dlaczego my"
        title="Twoja Przewaga"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="group">
            <h3 className="text-3d text-title uppercase mb-6 group-hover:text-white transition-colors">
              {benefit.title}
            </h3>
            <p className="text-body-lg font-bold uppercase opacity-60 max-w-xl">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
