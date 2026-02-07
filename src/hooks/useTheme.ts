'use client';

import { useState, useEffect, useCallback } from 'react';
import { defaultTheme } from '@/lib/config';
import type { ThemeConfig } from '@/types';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateCSSVariables = useCallback((newTheme: Partial<ThemeConfig>) => {
    const root = document.documentElement;

    if (newTheme.headingFont) {
      root.style.setProperty('--heading-font', newTheme.headingFont);
    }
    if (newTheme.bodyFont) {
      root.style.setProperty('--body-font', newTheme.bodyFont);
    }
    if (newTheme.headingWeight) {
      root.style.setProperty('--heading-weight', String(newTheme.headingWeight));
    }
    if (newTheme.heroWeight) {
      root.style.setProperty('--hero-weight', String(newTheme.heroWeight));
    }
    if (newTheme.primaryColor) {
      root.style.setProperty('--primary-color', newTheme.primaryColor);
    }
    if (newTheme.secondaryColor) {
      root.style.setProperty('--secondary-color', newTheme.secondaryColor);
    }
  }, []);

  const setHeadingFont = useCallback((font: string) => {
    setTheme(prev => ({ ...prev, headingFont: font }));
    updateCSSVariables({ headingFont: font });
  }, [updateCSSVariables]);

  const setBodyFont = useCallback((font: string) => {
    setTheme(prev => ({ ...prev, bodyFont: font }));
    updateCSSVariables({ bodyFont: font });
  }, [updateCSSVariables]);

  const setHeadingWeight = useCallback((weight: number) => {
    setTheme(prev => ({ ...prev, headingWeight: weight }));
    updateCSSVariables({ headingWeight: weight });
  }, [updateCSSVariables]);

  const setHeroWeight = useCallback((weight: number) => {
    setTheme(prev => ({ ...prev, heroWeight: weight }));
    updateCSSVariables({ heroWeight: weight });
  }, [updateCSSVariables]);

  return {
    theme,
    mounted,
    setHeadingFont,
    setBodyFont,
    setHeadingWeight,
    setHeroWeight,
  };
}
