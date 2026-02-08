import { SiteConfig, FontConfig, Benefit, ProcessStep } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Nekst Lewel',
  description: 'Strony internetowe dla firm budowlanych i remontowych',
  owner: {
    name: 'Maciej Tomaszewicz',
    location: 'Kraków',
    phone: '+48515787375',
    phoneFormatted: '515 787 375',
  },
  pricing: {
    website: 2500,
    support: 299,
  },
};

export const benefits: Benefit[] = [
  {
    title: 'Więcej telefonów z Google',
    description: 'Strona zbudowana tak, żeby Google pokazywał Cię wyżej niż konkurencję.',
  },
  {
    title: 'Gotowa nawet w 3 dni',
    description: 'Nie czekasz miesiącami. Dostajesz działającą stronę, nie obietnice.',
  },
  {
    title: 'Działa bez Twojej uwagi',
    description: 'Żadnych aktualizacji, żadnych problemów. Chcesz coś zmienić? Jeden telefon.',
  },
  {
    title: 'Płacisz dopiero gdy się podoba',
    description: 'Najpierw widzisz gotowe demo. Potem decydujesz. Zero ryzyka.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Dzwonisz lub piszesz',
    description: 'Opowiadasz o firmie. Co robisz, dla kogo, czym się wyróżniasz.',
  },
  {
    number: '02',
    title: 'Dostajesz demo',
    description: 'W ciągu kilku dni widzisz działającą stronę ze swoim logo i tekstami. Bez płacenia.',
  },
  {
    number: '03',
    title: 'Akceptujesz lub poprawiamy',
    description: 'Pasuje? Płacisz połowę. Chcesz zmiany? Wprowadzam. Nie podoba się? Dziękujesz i idziesz.',
  },
  {
    number: '04',
    title: 'Strona działa',
    description: 'Publikuję, konfiguruję, pilnuję. Ty zbierasz telefony.',
  },
];

export const headingFonts: FontConfig[] = [
  { name: 'Bebas Neue', label: 'Bebas Neue', category: 'display' },
  { name: 'Archivo Black', label: 'Archivo Black', category: 'display' },
  { name: 'Oswald', label: 'Oswald', category: 'display' },
  { name: 'Barlow Condensed', label: 'Barlow Condensed', category: 'display' },
  { name: 'Montserrat', label: 'Montserrat', category: 'modern' },
  { name: 'Urbanist', label: 'Urbanist', category: 'modern' },
  { name: 'DM Sans', label: 'DM Sans', category: 'modern' },
  { name: 'Syne', label: 'Syne', category: 'modern' },
  { name: 'Rubik Wet Paint', label: 'Wet Paint', category: 'dripping' },
  { name: 'Rubik Puddles', label: 'Puddles', category: 'dripping' },
];

export const bodyFonts: FontConfig[] = [
  { name: 'Barlow', label: 'Barlow', category: 'modern' },
  { name: 'Inter', label: 'Inter', category: 'modern' },
  { name: 'Montserrat', label: 'Montserrat', category: 'modern' },
  { name: 'DM Sans', label: 'DM Sans', category: 'modern' },
  { name: 'Manrope', label: 'Manrope', category: 'modern' },
  { name: 'Outfit', label: 'Outfit', category: 'modern' },
];

export const defaultTheme = {
  headingFont: 'Bebas Neue',
  bodyFont: 'Barlow',
  headingWeight: 900,
  heroWeight: 900,
  primaryColor: '#f20d0d',
  secondaryColor: '#000000',
};
