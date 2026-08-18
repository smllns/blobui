import type { InputHTMLAttributes, ReactNode } from 'react';
import type {
  CommonStylingVariant,
  ExtendedSize,
  LabelPlacement,
} from '@/components/shared/types';

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  variant?: CommonStylingVariant;
  size?: ExtendedSize;
  labelPlacement?: LabelPlacement;
  fullWidth?: boolean;
  error?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string;
  required?: boolean;
  id?: string;
  forceState?: 'hover' | 'active' | 'focus';
}
