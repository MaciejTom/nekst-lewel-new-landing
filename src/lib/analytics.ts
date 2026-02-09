// Google Analytics event tracking

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

type EventParams = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: EventParams) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Phone click tracking
export function trackPhoneClick(location: 'hero' | 'nav' | 'contact') {
  trackEvent({
    action: 'click',
    category: 'Phone',
    label: location,
  });
}

// Section view tracking
export function trackSectionView(section: string) {
  trackEvent({
    action: 'view',
    category: 'Section',
    label: section,
  });
}

// CTA click tracking
export function trackCTAClick(ctaName: string) {
  trackEvent({
    action: 'click',
    category: 'CTA',
    label: ctaName,
  });
}
