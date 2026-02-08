import { siteConfig } from '@/lib/config';

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mt-20 px-4 md:px-12 pb-20 max-w-[1600px] mx-auto">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold uppercase tracking-widest">
          {siteConfig.owner.name}
        </span>
        <span className="text-sm font-bold uppercase tracking-widest opacity-60">
          {siteConfig.owner.location}
        </span>
      </div>
      <div className="text-sm font-bold uppercase tracking-widest opacity-40">
        Nekst Lewel · 2026
      </div>
    </footer>
  );
}
