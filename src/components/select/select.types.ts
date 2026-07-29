import type * as SelectPrimitive from '@radix-ui/react-select';
import type { CommonStylingVariant, ExtendedSize } from '../types';

export type SelectWidth = 'auto' | 'sm' | 'md' | 'lg' | 'full';

export type SelectProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Root
> & {
  placeholder?: string;
  variant?: CommonStylingVariant;
  size?: ExtendedSize;
  width?: SelectWidth;
  error?: boolean;
};
