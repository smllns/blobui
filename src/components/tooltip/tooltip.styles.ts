import { cva } from 'class-variance-authority';

export const tooltipStyles = cva(
  'max-w-64 rounded-md shadow-md leading-[var(--leading-body-sm)]',
  {
    variants: {
      variant: {
        default: 'bg-inverse text-fg-inverse',
        light: 'bg-overlay text-fg border border-border',
        success:
          'bg-success-subtle text-success-fg border border-success-border',
        destructive:
          'bg-danger-subtle text-danger-fg border border-danger-border',
      },

      size: {
        sm: 'px-2 py-1 text-caption',
        md: 'px-2.5 py-1.5 text-body-sm',
        lg: 'px-3 py-2 text-body-md',
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
      default: 'fill-inverse',
      light: 'fill-border ',
      success: 'fill-success-border',
      destructive: 'fill-danger-border',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const tooltipInnerStyles = 'flex items-center gap-2';
