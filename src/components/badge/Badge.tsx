import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { badgeStyles } from './badge.styles';
import type { BadgeProps } from './badge.types';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant, size, className, children, leftIcon, rightIcon, ...props },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(badgeStyles({ variant, size }), className)}
        {...props}
      >
        {leftIcon && <span className='flex items-center'>{leftIcon}</span>}

        <span className='flex items-center'>{children}</span>

        {rightIcon && <span className='flex items-center'>{rightIcon}</span>}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
