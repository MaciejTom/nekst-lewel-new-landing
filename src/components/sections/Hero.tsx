import { siteConfig } from '@/lib/config';
import { PhoneIcon } from '@/components/ui';

export function Hero() {
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
          <span style={{ fontFamily: "'Rubik Wet Paint', cursive", fontWeight: 400 }}>
            zanim zapłacisz
          </span>
          <span> złotówkę.</span>
        </h1>

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
