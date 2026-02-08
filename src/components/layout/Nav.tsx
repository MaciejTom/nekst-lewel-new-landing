import Link from 'next/link';
import { siteConfig } from '@/lib/config';

const navLinks = [
  { href: '#korzysci', label: 'Korzyści' },
  { href: '#proces', label: 'Proces' },
  { href: '#oferta', label: 'Cennik' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9998] px-4 md:px-12 py-6 flex justify-between items-center"
      role="navigation"
      aria-label="Główna nawigacja"
    >
      <Link
        href="/"
        className="text-base md:text-lg font-extrabold uppercase tracking-widest hover:opacity-60 transition-opacity"
        aria-label={`${siteConfig.name} - Strona główna`}
      >
        {siteConfig.name}
      </Link>

      <div className="flex items-center gap-6 md:gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm md:text-base font-bold uppercase tracking-widest hover:opacity-60 transition-opacity hidden md:block"
          >
            {link.label}
          </Link>
        ))}

        <a
          href={`tel:${siteConfig.owner.phone}`}
          className="btn btn-primary text-sm md:text-base"
          aria-label={`Zadzwoń: ${siteConfig.owner.phoneFormatted}`}
        >
          {siteConfig.owner.phoneFormatted}
        </a>
      </div>
    </nav>
  );
}
