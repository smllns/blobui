import { cva } from 'class-variance-authority';

export const cardStyles = cva(
  ['rounded-xl', 'transition-all duration-300', 'shadow-sm'].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-white border border-neutral-200',

        filled: 'bg-neutral-100 border border-neutral-100',

        outline: 'bg-transparent border border-neutral-400',

        ghost: 'bg-transparent border-transparent',

        elevated:
          'bg-white border border-neutral-200 shadow-md hover:shadow-lg',
      },

      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-7',
      },
    },

    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  },
);
