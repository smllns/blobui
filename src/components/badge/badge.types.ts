import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { badgeStyles } from './badge.styles';

export interface BadgeProps
  extends ComponentPropsWithoutRef<'span'>, VariantProps<typeof badgeStyles> {
  children: ReactNode;
  dot?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
