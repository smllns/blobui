import { cva } from 'class-variance-authority';

export const avatarStyles = cva(
  [
    'relative inline-flex items-center justify-center',
    'overflow-hidden',
    'rounded-full',
    'bg-neutral-100',
    'text-neutral-700',
    'font-medium',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
      },

      variant: {
        default: 'border border-neutral-200',
        outline: 'border-2 border-neutral-300',
        soft: 'bg-neutral-200 text-neutral-800',
        ghost: 'bg-transparent border border-neutral-200',
      },
    },

    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
);
