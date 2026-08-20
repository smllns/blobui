import type * as SelectPrimitive from '@radix-ui/react-select';
import type { ReactNode } from 'react';
import type {
  CommonStylingVariant,
  ExtendedSize,
  ForceState,
  LabelPlacement,
} from '@/components/shared/types';

export type SelectWidth = 'auto' | 'sm' | 'md' | 'lg' | 'full';

export type SelectProps = Omit<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
  'defaultOpen'
> & {
  placeholder?: string;
  variant?: CommonStylingVariant;
  size?: ExtendedSize;
  width?: SelectWidth;
  labelPlacement?: LabelPlacement;
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  required?: boolean;
  error?: boolean;
  className?: string;
  forceState?: ForceState;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
};
