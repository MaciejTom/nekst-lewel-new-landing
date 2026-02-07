import { siteConfig } from '@/lib/config';
import { Section, SectionHeader } from '@/components/ui';

export function Contact() {
  return (
    <Section id="kontakt">
      <SectionHeader
        label="05 — Kontakt"
        title="Porozmawiajmy"
      />

      <div className="flex justify-center">
        <div className="space-y-8 text-left max-w-2xl w-full">
          <div>
            <span className="text-3d text-title uppercase block">
              {siteConfig.owner.name}
            </span>
            <p className="text-body-lg font-bold uppercase opacity-60 mt-[52px]">
              {siteConfig.owner.location}
            </p>
          </div>

          <a
            href={`tel:${siteConfig.owner.phone}`}
            className="text-3d text-display uppercase block hover:translate-x-4 transition-transform"
          >
            {siteConfig.owner.phoneFormatted}
          </a>
        </div>
      </div>
    </Section>
  );
}
