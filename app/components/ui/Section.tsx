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
            'mb-16',
            centered ? 'text-center mx-auto' : ''
          )}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                {title}
              </h2>
            )}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full mb-4 mx-auto"></div>
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
