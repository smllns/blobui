import type { InputHTMLAttributes } from 'react';
import type {
  CommonStylingVariant,
  ExtendedSize,
  ForceState,
} from '@/components/shared/types';

export type InputOtpCharset = 'numeric' | 'alnum';

export type InputOtpSize = Exclude<ExtendedSize, 'xs'>;

export interface InputOtpProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'value' | 'defaultValue'
> {
  variant?: CommonStylingVariant;
  size?: InputOtpSize;
  charset?: InputOtpCharset;
  length?: number;
  groupSize?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  error?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  label?: string;
  description?: string;
  errorMessage?: string;
  required?: boolean;
  id?: string;
  forceState?: ForceState;
}
