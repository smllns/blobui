import { cva } from 'class-variance-authority';

export const paginationStyles = [
  'group/pagination',
  'flex flex-wrap items-center gap-[var(--space-4)]',
  'data-[loading]:pointer-events-none',
].join(' ');

export const paginationLeadStyles = [
  'flex items-center gap-[var(--space-5)] me-auto min-w-0',
  'max-[640px]:w-full max-[640px]:me-0',
].join(' ');

export const paginationRangeStyles = [
  'text-body-sm text-fg-tertiary tabular whitespace-nowrap',
  '[&_b]:text-fg [&_b]:font-medium',
  'group-data-[loading]/pagination:text-fg-disabled',
].join(' ');

export const paginationSizeStyles = 'flex items-center gap-[var(--space-5)]';

export const paginationSizeLabelStyles =
  'text-body-sm text-fg-tertiary whitespace-nowrap';

export const paginationControlsStyles =
  'flex items-center gap-[var(--space-4)]';

export const paginationPagesStyles = [
  'flex items-center gap-[var(--space-1)]',
  'max-[640px]:hidden',
].join(' ');

export const paginationPageStyles = [
  'min-w-[var(--btn-h)] px-[var(--space-4)] tabular',
  'aria-[current=page]:bg-primary-muted aria-[current=page]:text-primary-fg',
  'aria-[current=page]:font-semibold aria-[current=page]:cursor-default',
  'aria-[current=page]:hovered:bg-primary-muted!',
  'aria-[current=page]:pressed:bg-primary-muted!',
  'aria-[current=page]:pressed:translate-y-0!',
].join(' ');

export const paginationEllipsisStyles = cva(
  'inline-grid place-items-center min-w-[var(--space-8)] text-fg-disabled select-none',
  {
    variants: {
      size: {
        sm: 'h-control-sm',
        md: 'h-control-md',
      },
    },

    defaultVariants: {
      size: 'sm',
    },
  },
);
