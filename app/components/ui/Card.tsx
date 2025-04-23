'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/app/utils/cn';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  href,
  onClick,
}: CardProps) {
  const CardComponent = href ? 'a' : onClick ? 'button' : 'div';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <CardComponent
        className={cn(
          'rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden',
          'hover:shadow-md transition-all duration-300',
          className
        )}
        href={href}
        onClick={onClick}
      >
        {children}
      </CardComponent>
    </motion.div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)}>
      {children}
    </div>
  );
}

export function CardImage({
  src,
  alt,
  className,
  width = 400,
  height = 225,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={cn('relative w-full h-48 overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
