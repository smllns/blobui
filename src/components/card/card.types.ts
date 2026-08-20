import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cardStyles, cardFooterStyles } from './card.styles';
import type { ForceState } from '@/components/shared/types';

export interface CardProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof cardStyles> {
  children: ReactNode;
  forceState?: ForceState;
}

export type CardHeaderProps = ComponentPropsWithoutRef<'div'>;

export interface CardFooterProps
  extends
    ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof cardFooterStyles> {}
