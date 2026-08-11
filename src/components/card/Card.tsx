import { forwardRef } from 'react';
import { cn } from '@/lib/cn';
import {
  cardBodyStyles,
  cardDescriptionStyles,
  cardFooterStyles,
  cardHeaderStyles,
  cardStyles,
  cardTitleStyles,
} from './card.styles';
import type {
  CardBodyProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from './card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, padding, interactive, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardStyles({ variant, padding, interactive }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-card-header
      className={cn(cardHeaderStyles, className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 className={cn(cardTitleStyles, className)} {...props} />;
}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn(cardDescriptionStyles, className)} {...props} />;
}

export function CardBody({ className, ...props }: CardBodyProps) {
  return <div className={cn(cardBodyStyles, className)} {...props} />;
}

export function CardFooter({
  className,
  layout,
  surface,
  ...props
}: CardFooterProps) {
  return (
    <div
      data-card-footer
      className={cn(cardFooterStyles({ layout, surface }), className)}
      {...props}
    />
  );
}
