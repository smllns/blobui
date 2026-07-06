import type { InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  label?: string;

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  error?: boolean;
  disabled?: boolean;

  description?: string;
  errorMessage?: string;

  fullWidth?: boolean;

  leftIcon?: ReactNode;
}
