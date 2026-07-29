import { cva } from 'class-variance-authority';

export const popoverContentStyles = cva(
  'z-50 w-72 border p-4 shadow-lg outline-none',
  {
    variants: {
      variant: {
        default: 'bg-neutral-100 border-neutral-300',

        filled: 'bg-white border-white',

        outline: 'bg-transparent  border-neutral-300 backdrop-blur-md',

        ghost: 'bg-transparent border-transparent backdrop-blur-md',
      },

      size: {
        sm: 'w-56 p-3',
        md: 'w-72 p-4',
        lg: 'w-96 p-5',
      },

      rounded: {
        sm: 'rounded-md',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'md',
    },
  },
);

export const popoverArrowStyles = cva('', {
  variants: {
    variant: {
      default: 'fill-neutral-100',

      filled: 'fill-white',

      outline: 'fill-neutral-100/20 ',

      ghost: 'fill-neutral-100/20 ',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});
