import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Nav } from '@/components/layout';
import { Footer } from '@/components/layout';
import { bebasNeue, barlow, rubikWetPaint } from '@/lib/fonts';
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateWebPageSchema,
} from '@/lib/schema';

const baseUrl = 'https://nekstlewel.pl';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Strony internetowe dla firm budowlanych Kraków | Nekst Lewel',
  description:
    'Profesjonalne strony internetowe dla firm budowlanych i remontowych. Zobaczysz demo zanim zapłacisz. Gotowe w 3 dni. Od 2500 zł.',
  keywords: [
    'strony internetowe',
    'firmy budowlane',
    'firmy remontowe',
    'strona dla budowlanki',
    'strona www Kraków',
    'web design Kraków',
    'strony www dla firm',
  ],
  authors: [{ name: 'Maciej Tomaszewicz', url: baseUrl }],
  creator: 'Maciej Tomaszewicz',
  publisher: 'Nekst Lewel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Strony internetowe dla firm budowlanych | Nekst Lewel',
    description:
      'Profesjonalne strony www dla firm budowlanych. Zobaczysz demo zanim zapłacisz. Od 2500 zł.',
    url: baseUrl,
    siteName: 'Nekst Lewel',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strony internetowe dla firm budowlanych | Nekst Lewel',
    description: 'Zobaczysz demo zanim zapłacisz. Gotowe w 3 dni. Od 2500 zł.',
  },
  category: 'Web Design',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f20d0d' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema();
  const webPageSchema = generateWebPageSchema();

  return (
    <html
      lang="pl"
      className={`${bebasNeue.variable} ${barlow.variable} ${rubikWetPaint.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />
      </head>
      <body className={`${barlow.className} antialiased overflow-x-hidden`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
