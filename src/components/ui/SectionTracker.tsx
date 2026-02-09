'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { trackSectionView } from '@/lib/analytics';

interface SectionTrackerProps {
  children: ReactNode;
  sectionName: string;
  className?: string;
}

export function SectionTracker({ children, sectionName, className }: SectionTrackerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tracked.current) {
            tracked.current = true;
            trackSectionView(sectionName);
          }
        });
      },
      { threshold: 0.3 } // Track when 30% of section is visible
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [sectionName]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
