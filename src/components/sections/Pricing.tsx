import { siteConfig } from '@/lib/config';
import { Section, SectionHeader } from '@/components/ui';

export function Pricing() {
  return (
    <Section id="oferta">
      <SectionHeader
        label="03 — Ile to kosztuje"
        title="Przejrzysta\nInwestycja"
      />

      <div className="flex justify-center">
        <div className="space-y-12 text-left max-w-2xl w-full">
          <div>
            <span className="text-3d text-display uppercase">
              od {siteConfig.pricing.website.toLocaleString('pl-PL')} zł
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-title uppercase tracking-tight">
              Płatność 50/50
            </p>
            <p className="text-body-lg font-bold uppercase opacity-60">
              Połowa po akceptacji demo, połowa po uruchomieniu
            </p>
          </div>

          <div className="pt-4">
            <span className="inline-block px-6 py-3 border-2 border-current text-sm font-bold uppercase tracking-widest">
              Żadnych ukrytych kosztów
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
