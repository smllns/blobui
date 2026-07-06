import { cva } from 'class-variance-authority';

export const switchStyles = cva(
  [
    'relative inline-flex items-center flex-shrink-0',
    'rounded-full',
    'transition-colors duration-300',
    'cursor-pointer',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-neutral-300',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-4 w-8',
        md: 'h-5 w-10',
        lg: 'h-6 w-12',
      },

      variant: {
        default: 'bg-neutral-200 data-[state=checked]:bg-neutral-900',

        filled: 'bg-neutral-100 data-[state=checked]:bg-neutral-700',

        outline:
          'bg-transparent border border-neutral-300 data-[state=checked]:bg-neutral-300 data-[state=checked]:border-neutral-400',

        ghost: 'bg-neutral-100 data-[state=checked]:bg-neutral-300',
      },

      error: {
        true: 'data-[state=checked]:bg-red-500 bg-red-300 border-red-400 focus-visible:ring-red-200',
      },
    },

    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
);

export const switchThumbStyles = cva(
  [
    'inline-block bg-white rounded-full shadow-sm transform transition-transform duration-300',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-3 w-3 translate-x-1 data-[state=checked]:translate-x-4',
        md: 'h-4 w-4 translate-x-1 data-[state=checked]:translate-x-5',
        lg: 'h-5 w-5 translate-x-1 data-[state=checked]:translate-x-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);
