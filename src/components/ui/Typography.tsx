import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  variant?: 'display' | 'headline' | 'title' | 'body-lg' | 'body' | 'label';
  effect3d?: boolean;
  children: React.ReactNode;
}

const variantStyles = {
  display: 'text-display leading-[0.85] tracking-tight',
  headline: 'text-headline leading-[0.9] tracking-tight',
  title: 'text-title leading-tight',
  'body-lg': 'text-body-lg leading-relaxed',
  body: 'text-body leading-relaxed',
  label: 'text-xs font-bold uppercase tracking-[0.2em]',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as: Component = 'p', variant = 'body', effect3d = false, className, children, ...props }, ref) => {
    const styles = cn(
      variantStyles[variant],
      effect3d && 'text-3d',
      className
    );

    return (
      <Component
        ref={ref as React.Ref<never>}
        className={styles}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

// Convenience components
export const Heading1 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="h1" variant="display" {...props} />
);
Heading1.displayName = 'Heading1';

export const Heading2 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="h2" variant="headline" {...props} />
);
Heading2.displayName = 'Heading2';

export const Heading3 = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'as'>>(
  (props, ref) => <Typography ref={ref} as="h3" variant="title" {...props} />
);
Heading3.displayName = 'Heading3';
