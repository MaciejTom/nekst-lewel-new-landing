import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/layout';
import { Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Strony internetowe dla firm budowlanych Kraków | Nekst Lewel',
  description:
    'Strony internetowe dla firm budowlanych i remontowych. Zobaczysz demo zanim zapłacisz. Od 2500 zł.',
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
    title: 'Strony internetowe dla firm budowlanych Kraków | Nekst Lewel',
    description:
      'Strony internetowe dla firm budowlanych i remontowych. Zobaczysz demo zanim zapłacisz. Od 2500 zł.',
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
