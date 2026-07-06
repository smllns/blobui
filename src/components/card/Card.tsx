import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { cardStyles } from './card.styles';
import type { CardProps } from './card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, padding, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardStyles({ variant, padding }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
