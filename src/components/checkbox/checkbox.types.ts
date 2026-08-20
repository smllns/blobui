import type { InputHTMLAttributes, ReactNode } from 'react';
import type { ChoiceSize, ForceState } from '@/components/shared/types';

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  label?: ReactNode;
  size?: ChoiceSize;
  error?: boolean;
  disabled?: boolean;
  description?: ReactNode;
  errorMessage?: ReactNode;
  fullWidth?: boolean;
  indeterminate?: boolean;
  icon?: ReactNode;
  forceState?: ForceState;
}
