import { cva } from 'class-variance-authority';

export const tooltipContentStyles = cva(
  [
    'z-50 rounded-md shadow-lg animate-in fade-in-0 zoom-in-95 border',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=closed]:zoom-out-95',
    'data-[side=top]:slide-in-from-bottom-2',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-neutral-900 text-white',
        light: 'bg-white text-neutral-900 border-neutral-200',
        success: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
        destructive: 'bg-red-50 text-red-700 border-red-200/60',
      },

      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export const tooltipArrowStyles = cva('', {
  variants: {
    variant: {
      default: 'fill-neutral-900',
      light: 'fill-white',
      destructive: 'fill-red-600',
      success: 'fill-emerald-600',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const tooltipInnerStyles = 'flex items-center gap-2';
