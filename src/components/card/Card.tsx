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
import type { CardFooterProps, CardHeaderProps, CardProps } from './card.types';
import { createStyledElement } from '@/lib/createStyledElement';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant,
      padding,
      interactive,
      forceState,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cardStyles({ variant, padding, interactive }), className)}
        {...props}
        data-force={forceState}
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
/* eslint-disable react-refresh/only-export-components */
export const CardTitle = createStyledElement('h3', cardTitleStyles);
export const CardDescription = createStyledElement('p', cardDescriptionStyles);
export const CardBody = createStyledElement('div', cardBodyStyles);

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
