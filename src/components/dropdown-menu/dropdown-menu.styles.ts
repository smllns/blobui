import { cva } from 'class-variance-authority';
import {
  disabledStyles,
  motion,
  transitionControl,
} from '@/components/shared/styles';
import { menuStyles, surfaceStyles } from '@/components/shared/surface.styles';

export const dropdownMenuContentStyles = [
  surfaceStyles(),
  menuStyles,
  'z-50',
].join(' ');

export const dropdownMenuTriggerStyles = cva(
  [
    'inline-flex items-center justify-center gap-2 cursor-pointer',
    'border rounded-lg',
    'text-body-md font-medium leading-none whitespace-nowrap',
    transitionControl,
    motion.fast,
    'focus-visible:focus-ring',
    'data-[state=open]:border-border-focus',
    disabledStyles.html,
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-surface border-border text-fg shadow-xs',
          'enabled:hover:bg-hover enabled:hover:border-border-strong',
        ].join(' '),

        filled: [
          'bg-primary-muted border-transparent text-primary-fg',
          'enabled:hover:bg-primary-muted-hover',
        ].join(' '),

        outline: [
          'bg-transparent border-border-strong text-fg',
          'enabled:hover:bg-subtle',
        ].join(' '),

        ghost: [
          'bg-transparent border-transparent text-fg-secondary',
          'enabled:hover:bg-subtle enabled:hover:text-fg',
        ].join(' '),
      },
      size: {
        xs: 'h-7 px-2.5 gap-1 rounded-sm text-caption',
        sm: 'h-control-sm px-3 gap-1.5 rounded-md text-body-sm',
        md: 'h-control-md px-4 gap-2 rounded-lg text-body-md',
        lg: 'h-control-lg px-5 gap-2 rounded-lg text-body-lg',
        xl: 'h-control-xl px-6 gap-2.5 rounded-xl text-body-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
