// Site configuration types
export interface SiteConfig {
  name: string;
  description: string;
  owner: {
    name: string;
    location: string;
    phone: string;
    phoneFormatted: string;
  };
  pricing: {
    website: number;
    support: number;
  };
}

// Font configuration
export interface FontConfig {
  name: string;
  label: string;
  category: 'display' | 'modern' | 'dripping';
}

// Theme configuration
export interface ThemeConfig {
  headingFont: string;
  bodyFont: string;
  headingWeight: number;
  heroWeight: number;
  primaryColor: string;
  secondaryColor: string;
}

// Section props
export interface SectionProps {
  id?: string;
  className?: string;
}

// Benefit item
export interface Benefit {
  title: string;
  description: string;
}

// Process step
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
