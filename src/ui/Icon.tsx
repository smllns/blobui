import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';
import type { IconSize } from '@/components/shared/types';

const sizeStyles: Record<IconSize, string> = {
  xs: 'size-icon-xs',
  sm: 'size-icon-sm',
  md: 'size-icon-md',
  lg: 'size-icon-lg',
  xl: 'size-icon-xl',
  '2xl': 'size-icon-2xl',
};

const strokeWidths: Record<IconSize, number> = {
  xs: 2.4,
  sm: 2.2,
  md: 2,
  lg: 1.9,
  xl: 1.75,
  '2xl': 1.5,
};

export interface IconProps extends Omit<
  ComponentPropsWithoutRef<'svg'>,
  'ref'
> {
  size?: IconSize;
  filled?: boolean;
}

export function Icon({
  size = 'md',
  filled,
  className,
  strokeWidth,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth ?? (filled ? undefined : strokeWidths[size])}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('block shrink-0', sizeStyles[size], className)}
      {...props}
    >
      {children}
    </svg>
  );
}
