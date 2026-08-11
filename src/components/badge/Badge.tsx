import { forwardRef } from 'react';
import { cn } from '@/lib/cn';
import { badgeDotStyles, badgeStyles } from './badge.styles';
import type { BadgeProps } from './badge.types';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      tone,
      emphasis,
      shape,
      size,
      dot,
      className,
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(badgeStyles({ tone, emphasis, shape, size }), className)}
        {...props}
      >
        {dot && <span aria-hidden='true' className={badgeDotStyles} />}

        {leftIcon}

        <span className='flex items-center'>{children}</span>

        {rightIcon}
      </span>
    );
  },
);
