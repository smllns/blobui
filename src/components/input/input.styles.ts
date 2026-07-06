import { cva } from 'class-variance-authority';

export const inputWrapperStyles = cva(
  [
    'flex items-center gap-2 rounded-lg',
    'transition-all duration-300',
    'focus-within:ring-1 focus-within:ring-neutral-300',
    'shadow-sm',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-neutral-50 border border-white/70 hover:bg-white',

        filled: 'bg-white border border-transparent hover:bg-neutral-50',

        outline: 'bg-white/20  border border-white hover:bg-white/40',

        ghost: 'bg-transparent  hover:bg-neutral-50/30',
      },

      size: {
        xs: 'h-6 px-2 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
        xl: 'h-14 px-6 text-xl',
      },

      fullWidth: {
        true: 'w-full',
      },

      error: {
        true: ' focus-within:border-red-500 focus-within:ring-red-200 bg-red-50 text-red-700 border border-red-200 hover:bg-red-100',
        false: '',
      },

      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: false,
      error: false,
      disabled: false,
    },
  },
);
