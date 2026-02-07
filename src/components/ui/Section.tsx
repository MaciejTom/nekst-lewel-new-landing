import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  fullHeight?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ fullHeight = true, className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          fullHeight && 'min-h-screen',
          'flex flex-col justify-center',
          'px-4 md:px-12 py-32',
          'w-full max-w-[1600px] mx-auto',
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', className)}>
      <span className="block text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">
        {label}
      </span>
      <h2
        className="text-3d text-headline uppercase"
        dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }}
      />
    </div>
  );
}
