import { cva } from 'class-variance-authority';

export const radioStyles = cva(
  [
    'appearance-none rounded-full border',
    'transition-all duration-200 cursor-pointer',
    'focus:outline-none focus:ring-2 focus:ring-olive-400/40',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },

      variant: {
        default:
          'border-neutral-400 bg-white checked:bg-neutral-700 checked:border-neutral-500',

        filled:
          'border-neutral-300 bg-neutral-100 checked:bg-neutral-500 checked:border-neutral-500',

        outline:
          'border-neutral-500 bg-neutral-200 checked:bg-neutral-300 checked:border-neutral-500',

        ghost: 'border-transparent bg-neutral-200 checked:bg-neutral-300',
      },

      error: {
        true: 'border-red-500 checked:bg-red-500 focus:ring-red-300',
      },
    },

    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
);
