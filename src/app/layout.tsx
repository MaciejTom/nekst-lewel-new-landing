import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/layout';
import { Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Nekst Lewel - Strony internetowe dla firm budowlanych',
  description:
    'Strony internetowe dla firm budowlanych i remontowych. Zobaczysz swoją stronę zanim zapłacisz złotówkę. Od 2500 zł.',
  keywords: [
    'strony internetowe',
    'firmy budowlane',
    'firmy remontowe',
    'strona dla budowlanki',
    'strona www',
    'Kraków',
  ],
  authors: [{ name: 'Maciej Tomaszewicz' }],
  openGraph: {
    title: 'Nekst Lewel - Strony internetowe dla firm budowlanych',
    description:
      'Zobaczysz swoją stronę zanim zapłacisz złotówkę. Strony dla budowlanki od 2500 zł.',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased overflow-x-hidden">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
