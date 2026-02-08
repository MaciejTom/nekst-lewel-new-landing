import { siteConfig } from '@/lib/config';

export function Pricing() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-12 py-16 md:py-32 w-full max-w-[1600px] mx-auto"
      id="oferta"
    >
      <div className="mb-16">
        <span
          className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 text-muted"
          aria-hidden="true"
        >
          03 — Ile to kosztuje
        </span>
        <h2 className="text-3d text-headline uppercase">
          Przejrzysta
          <br />
          Inwestycja
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="space-y-12 text-left max-w-2xl w-full">
          <div>
            <span className="text-3d text-display uppercase">
              od {siteConfig.pricing.website.toLocaleString('pl-PL')} zł
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-title uppercase tracking-tight">Płatność 50/50</p>
            <p className="text-body-lg font-bold uppercase text-secondary">
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
    </section>
  );
}
