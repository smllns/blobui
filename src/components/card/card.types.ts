import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cardStyles, cardFooterStyles } from './card.styles';

export interface CardProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof cardStyles> {
  children: ReactNode;
  forceState?: 'hover' | 'active' | 'focus';
}

export type CardHeaderProps = ComponentPropsWithoutRef<'div'>;
export type CardTitleProps = ComponentPropsWithoutRef<'h3'>;
export type CardDescriptionProps = ComponentPropsWithoutRef<'p'>;
export type CardBodyProps = ComponentPropsWithoutRef<'div'>;

export interface CardFooterProps
  extends
    ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof cardFooterStyles> {}
