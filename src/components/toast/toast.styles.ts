import { cva } from 'class-variance-authority';

export const toastStyles = cva(
  [
    'flex items-start gap-3',
    'rounded-lg',
    'px-4 py-3',
    'shadow-lg',
    'border',
    'animate-in fade-in-0 slide-in-from-bottom-2',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-white text-neutral-900 border-neutral-200',
        success: 'bg-green-50 text-green-800 border-green-200',
        warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
        destructive: 'bg-red-50 text-red-800 border-red-200',
        info: 'bg-blue-50 text-blue-800 border-blue-200',
      },

      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export const toastIconStyles = cva('mt-0.5 shrink-0', {
  variants: {
    variant: {
      default: 'text-neutral-500',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      destructive: 'text-red-600',
      info: 'text-blue-600',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
