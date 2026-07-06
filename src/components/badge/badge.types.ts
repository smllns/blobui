import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { badgeStyles } from './badge.styles';

export type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'success'
  | 'destructive'
  | 'warning';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps
  extends ComponentPropsWithoutRef<'span'>, VariantProps<typeof badgeStyles> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
