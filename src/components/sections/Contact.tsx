import { siteConfig } from '@/lib/config';

export function Contact() {
  return (
    <section
      className="md:min-h-screen flex flex-col justify-center px-4 md:px-12 py-16 md:py-32 w-full max-w-[1600px] mx-auto"
      id="kontakt"
    >
      <div className="mb-16">
        <span
          className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 text-muted"
          aria-hidden="true"
        >
          05 — Kontakt
        </span>
        <h2 className="text-3d text-headline uppercase">Porozmawiajmy</h2>
      </div>

      <div className="flex justify-center">
        <div className="space-y-8 text-left max-w-2xl w-full">
          <div>
            <span className="text-3d text-title uppercase block">
              {siteConfig.owner.name}
            </span>
            <p className="text-body-lg font-bold uppercase text-secondary mt-[52px]">
              {siteConfig.owner.location}
            </p>
          </div>

          <a
            href={`tel:${siteConfig.owner.phone}`}
            className="text-3d text-display uppercase block hover:translate-x-4 transition-transform"
          >
            {siteConfig.owner.phoneFormatted}
          </a>

          <p className="text-body-lg font-bold uppercase text-secondary mt-8">
            Odpowiadam osobiście. Bez sekretarki, bez formularzy.
          </p>
        </div>
      </div>
    </section>
  );
}
