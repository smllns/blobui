import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cardStyles } from './card.styles';

export interface CardProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof cardStyles> {
  children: ReactNode;
}
