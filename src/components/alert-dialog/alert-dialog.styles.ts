import { cva } from 'class-variance-authority';

export const alertDialogContentStyles = [
  'group/alert-dialog relative pointer-events-auto',
  'w-[min(25rem,calc(100vw-var(--space-9)*2))]',
  'max-h-[calc(100vh-var(--space-12))] overflow-hidden',
  'rounded-2xl border border-border-subtle bg-overlay shadow-2xl',
  'p-6 text-fg',
].join(' ');

export const alertDialogHeaderStyles =
  'flex items-start justify-start gap-3 pb-2.5 text-start';

export const alertDialogIconStyles = cva(
  'grid place-items-center shrink-0 size-10 rounded-full [&>svg]:size-icon-lg',
  {
    variants: {
      tone: {
        danger: 'bg-danger-subtle text-danger-fg',
        warning: 'bg-warning-subtle text-warning-fg',
        info: 'bg-primary-muted text-primary-fg',
      },
    },

    defaultVariants: {
      tone: 'danger',
    },
  },
);

export const alertDialogFooterStyles = [
  'flex items-center justify-end gap-2 pt-2',
  'max-sm:flex-col-reverse max-sm:items-stretch max-sm:[&>*]:w-full',
  'group-data-[loading]/alert-dialog:pointer-events-none',
  'group-data-[loading]/alert-dialog:[&>*:not([data-loading])]:opacity-60',
].join(' ');
