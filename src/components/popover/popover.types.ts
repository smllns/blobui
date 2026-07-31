import type * as PopoverPrimitive from '@radix-ui/react-popover';
import type { VariantProps } from 'class-variance-authority';
import { popoverArrowStyles, popoverContentStyles } from './popover.styles.ts';

export interface PopoverContentProps
  extends
    PopoverPrimitive.PopoverContentProps,
    VariantProps<typeof popoverContentStyles> {}

export interface PopoverArrowProps
  extends
    PopoverPrimitive.PopoverArrowProps,
    VariantProps<typeof popoverArrowStyles> {}
