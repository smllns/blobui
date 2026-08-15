import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ExtendedSize } from '@/components/shared/types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'soft'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'underline'
  | 'unstyled'
  | 'link';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ExtendedSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: boolean;
  forceState?: 'hover' | 'active' | 'focus';
}
