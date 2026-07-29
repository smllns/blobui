import { cva } from 'class-variance-authority';
import { disabledStyles } from '../styles';

export const dropdownMenuTriggerStyles = cva(
  [
    'flex items-center justify-center gap-2 cursor-pointer',
    'rounded-lg shadow-sm transition-all duration-300 border',
    'focus:outline-none focus:ring-1 focus:ring-neutral-300',
  ],
  {
    variants: {
      variant: {
        default: 'bg-neutral-50  border-white/70 hover:bg-white',

        filled: 'bg-white  border-transparent hover:bg-neutral-50',

        outline: 'bg-transparent  border-neutral-300 hover:bg-neutral-50',

        ghost: 'bg-transparent border-transparent hover:bg-neutral-100',
      },

      size: {
        xs: 'h-6 px-2 text-xs',

        sm: 'h-8 px-3 text-sm',

        md: 'h-10 px-4 text-base',

        lg: 'h-12 px-5 text-lg',

        xl: 'h-14 px-6 text-xl',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export const dropdownMenuContentStyles =
  'z-50 min-w-40 rounded-lg bg-white p-1 shadow-lg outline-none border border-neutral-200 animate-in fade-in-0 data-[state=closed]:animate-out';

export const dropdownMenuItemStyles = cva(
  [
    'relative flex items-center justify-between gap-2',
    'w-full rounded-md cursor-pointer select-none',
    'outline-none transition-colors',
    'focus:bg-neutral-100',
    'focus:text-neutral-900',
    disabledStyles.data,
  ],
  {
    variants: {
      variant: {
        default: 'text-neutral-700',

        destructive: 'text-red-600 focus:bg-red-50 focus:text-red-700',
      },

      size: {
        sm: 'px-2 py-1 text-xs',

        md: 'px-3 py-2 text-sm',

        lg: 'px-4 py-2.5 text-base',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
