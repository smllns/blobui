import type { InputHTMLAttributes, ReactNode } from 'react';
import type { ExtendedSize } from '../types';

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  label?: string;
  size?: ExtendedSize;
  error?: boolean;
  disabled?: boolean;
  description?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
}
