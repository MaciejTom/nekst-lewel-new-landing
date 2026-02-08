import { Bebas_Neue, Barlow, Rubik_Wet_Paint } from 'next/font/google';

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-bebas',
});

export const barlow = Barlow({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-barlow',
});

export const rubikWetPaint = Rubik_Wet_Paint({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik-wet-paint',
});
