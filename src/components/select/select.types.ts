import type * as SelectPrimitive from '@radix-ui/react-select';
import type { ReactNode } from 'react';
import type {
  CommonStylingVariant,
  ExtendedSize,
  LabelPlacement,
} from '../shared/types';

export type SelectWidth = 'auto' | 'sm' | 'md' | 'lg' | 'full';

export type SelectProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Root
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
};
