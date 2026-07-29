import { cva } from 'class-variance-authority';

export const cardStyles = cva(
  'rounded-xl transition-all duration-300 shadow-sm border',
  {
    variants: {
      variant: {
        default: 'bg-white  border-neutral-200',

        filled: 'bg-neutral-100  border-neutral-100',

        outline: 'bg-transparent  border-neutral-500',

        ghost: 'bg-transparent border-transparent',

        elevated: 'bg-white  border-neutral-200 shadow-md hover:shadow-lg',
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
