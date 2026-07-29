import type { InputHTMLAttributes, ReactNode } from 'react';
import type { CommonStylingVariant, ExtendedSize } from '../types';

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  variant?: CommonStylingVariant;
  size?: ExtendedSize;
  fullWidth?: boolean;
  error?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string;
  id?: string;
}
