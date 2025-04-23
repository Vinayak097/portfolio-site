import React from 'react';
import { cn } from '@/app/utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function Section({
  children,
  className,
  id,
  title,
  subtitle,
  centered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        className
      )}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className={cn(
            'mb-12',
            centered ? 'text-center' : ''
          )}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
