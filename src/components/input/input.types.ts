import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputVariant = 'default' | 'filled' | 'outline' | 'ghost';

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  variant?: InputVariant;
  size?: InputSize;

  fullWidth?: boolean;
  error?: boolean;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  label?: string;
  description?: string;
  errorMessage?: string;

  id?: string;
}
