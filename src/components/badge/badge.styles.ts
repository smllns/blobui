import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-full',
    'font-medium',
    'transition-colors',
    'gap-1',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-neutral-100 text-neutral-900 border border-neutral-200',

        secondary: 'bg-white/60 text-neutral-700 border border-neutral-200',

        outline: 'bg-transparent text-neutral-800 border border-neutral-300',

        ghost: 'bg-neutral-100/50 text-neutral-600 border-transparent',

        success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',

        destructive: 'bg-red-50 text-red-700 border border-red-200',

        warning: 'bg-amber-50 text-amber-700 border border-amber-200',
      },

      size: {
        sm: 'px-2 py-[2px] text-xs',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
