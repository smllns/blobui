import { cva } from 'class-variance-authority';

export const toastViewportStyles = [
  'fixed end-4 bottom-4 z-[var(--z-toast)]',
  'flex flex-col-reverse gap-2',
  'w-[min(22rem,calc(100vw-var(--space-7)*2))]',
].join(' ');

export const toastStyles = cva(
  [
    'flex items-start gap-2.5 p-3',
    'bg-surface border border-border-subtle rounded-xl shadow-xl',
    'text-fg',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'w-70',
        md: 'w-90',
        lg: 'w-120',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  },
);

export const toastIconStyles = cva(
  ['grid place-items-center shrink-0', ' rounded-full', 'text-xs'].join(' '),
  {
    variants: {
      tone: {
        neutral: 'bg-info-subtle text-info-fg',
        success: 'bg-success-subtle text-success-fg',
        warning: 'bg-warning-subtle text-warning-fg',
        danger: 'bg-danger-subtle text-danger-fg',
        info: 'bg-info-subtle text-info-fg',
      },
      size: {
        sm: 'size-6',
        md: 'size-8',
        lg: 'size-10',
      },
    },

    defaultVariants: {
      tone: 'neutral',
      size: 'md',
    },
  },
);

export const toastTitleStyles = cva('m-0  font-medium leading-tight', {
  variants: {
    size: {
      sm: 'text-body-sm',
      md: 'text-body-md',
      lg: 'text-body-lg',
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
export const toastDescriptionStyles = cva('m-0 mt-0.5  text-fg-tertiary', {
  variants: {
    size: {
      sm: 'text-caption leading-[var(--leading-caption)]',
      md: 'text-body-sm leading-[var(--leading-body-sm)]',
      lg: 'text-body-md leading-[var(--leading-body-md)]',
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const toastContentStyles = 'flex-1 min-w-0';
