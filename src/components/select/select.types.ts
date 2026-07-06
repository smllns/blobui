import type { ReactNode, SelectHTMLAttributes } from 'react';

export type SelectVariant = 'default' | 'filled' | 'outline' | 'ghost';

export type SelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> {
  variant?: SelectVariant;
  size?: SelectSize;

  fullWidth?: boolean;
  error?: boolean;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
