import { siteConfig } from '@/lib/config';
import { Section, SectionHeader } from '@/components/ui';

export function Support() {
  return (
    <Section id="opieka">
      <SectionHeader
        label="04 — Opieka"
        title="Spokój\ni Wsparcie"
      />

      <div className="flex justify-center">
        <div className="space-y-12 text-left max-w-2xl w-full">
          <h3 className="text-3d text-title uppercase opacity-60">
            Nie chcesz się tym zajmować?
          </h3>

          <div>
            <span className="text-3d text-display uppercase">
              {siteConfig.pricing.support} zł / msc
            </span>
          </div>

          <p className="text-body-lg font-bold uppercase opacity-60">
            Zmiany kiedy chcesz, hosting na szybkim serwerze, jeden telefon zamiast szukania &quot;informatyka&quot;
          </p>
        </div>
      </div>
    </Section>
  );
}
