import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ExtendedSize } from '@/components/shared/types';

export type ToggleVariant = 'default' | 'outline';

export type ToggleSize = Exclude<ExtendedSize, 'xs'>;

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ToggleVariant;
  size?: ToggleSize;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconOnly?: boolean;
  forceState?: 'hover' | 'active' | 'focus';
}
