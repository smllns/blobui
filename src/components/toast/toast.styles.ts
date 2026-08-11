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
        sm: 'text-body-sm',
        md: 'text-body-md',
        lg: 'text-body-lg',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  },
);

export const toastIconStyles = cva(
  ['grid place-items-center shrink-0', 'size-8 rounded-full', 'text-xs'].join(
    ' ',
  ),
  {
    variants: {
      tone: {
        neutral: 'bg-info-subtle text-info-fg',
        success: 'bg-success-subtle text-success-fg',
        warning: 'bg-warning-subtle text-warning-fg',
        danger: 'bg-danger-subtle text-danger-fg',
        info: 'bg-info-subtle text-info-fg',
      },
    },

    defaultVariants: {
      tone: 'neutral',
    },
  },
);

export const toastTitleStyles = 'm-0 text-body-md font-medium leading-tight';

export const toastDescriptionStyles =
  'm-0 mt-0.5 text-body-sm leading-[var(--leading-body-sm)] text-fg-tertiary';

export const toastContentStyles = 'flex-1 min-w-0';
