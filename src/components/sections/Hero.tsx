import { siteConfig } from '@/lib/config';
import { Button, PhoneIcon } from '@/components/ui';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 text-center">
      {/* Background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]"
        aria-hidden="true"
      >
        <span className="text-[40vw] font-black uppercase leading-none whitespace-nowrap">
          {siteConfig.name}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-3d text-hero uppercase mb-8">
          <span>Zobaczysz stronę</span>
          <br />
          <span className="hero-key-text">zanim zapłacisz</span>
          <br />
          <span>złotówkę</span>
        </h1>

        <p
          className="text-body-lg font-bold uppercase tracking-tight opacity-60 mb-12"
          style={{ fontFamily: 'var(--body-font), sans-serif' }}
        >
          {siteConfig.description} — od {siteConfig.pricing.website.toLocaleString('pl-PL')} zł
        </p>

        <div className="flex justify-center gap-6">
          <Button
            href={`tel:${siteConfig.owner.phone}`}
            variant="primary"
            size="lg"
          >
            <PhoneIcon size={20} />
            {siteConfig.owner.phoneFormatted}
          </Button>
        </div>
      </div>
    </section>
  );
}
