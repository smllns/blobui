import type * as SelectPrimitive from '@radix-ui/react-select';

export type SelectVariant = 'default' | 'filled' | 'outline' | 'ghost';

export type SelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SelectWidth = 'auto' | 'sm' | 'md' | 'lg' | 'full';

export type SelectProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Root
> & {
  placeholder?: string;

  variant?: SelectVariant;

  size?: SelectSize;

  width?: SelectWidth;

  error?: boolean;
};
