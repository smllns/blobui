import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { BasicSize } from '@/components/shared/types';

export type KbdVariant = 'default' | 'ghost';

export interface KbdProps extends ComponentPropsWithoutRef<'kbd'> {
  children: ReactNode;
  size?: BasicSize;
  variant?: KbdVariant;
  pressed?: boolean;
}

export interface KbdGroupProps extends ComponentPropsWithoutRef<'span'> {
  keys?: ReactNode[];
  size?: BasicSize;
  variant?: KbdVariant;
  children?: ReactNode;
}
