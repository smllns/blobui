import { cva } from 'class-variance-authority';
import { disabledStyles } from '../styles';

export const buttonStyles = cva(
  `inline-flex items-center justify-center gap-2
  rounded-lg font-medium shadow-sm hover:shadow-md border
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-transparent 
  ${disabledStyles.html} active:scale-[0.99] active:translate-y-[1px] transition-all duration-300`,
  {
    variants: {
      variant: {
        primary:
          'bg-neutral-50 text-neutral-900  border-white/70 hover:bg-white',

        secondary:
          'bg-white/50 text-neutral-700  border-neutral-200 hover:bg-neutral-50',

        outline:
          'bg-white/20 text-neutral-800  border-neutral-400 hover:bg-white/40',

        ghost:
          'bg-transparent text-neutral-600 border-transparent hover:bg-neutral-50/30',

        destructive: 'bg-red-50 text-red-700  border-red-200 hover:bg-red-100',
      },

      state: {
        idle: 'cursor-pointer',
        loading: 'cursor-wait',
        disabled: 'cursor-not-allowed',
      },
      size: {
        xs: 'h-6 px-2 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        xl: 'h-14 px-8 text-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
);
