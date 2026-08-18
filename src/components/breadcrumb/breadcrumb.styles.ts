import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const breadcrumbStyles = [
  '[--crumb-gap:var(--space-4)]',
  'flex flex-wrap items-center gap-[var(--crumb-gap)] min-w-0',
  'text-body-sm',
].join(' ');

export const breadcrumbListStyles = 'contents list-none m-0 p-0';

export const breadcrumbEntryStyles =
  'flex items-center gap-[var(--crumb-gap)] min-w-0';

export const breadcrumbItemStyles = cva(
  [
    'inline-flex items-center gap-[var(--space-3)] min-w-0',
    'max-w-56 truncate',
    'py-[var(--space-1)] px-[var(--space-2)] -mx-[var(--space-2)]',
    'rounded-xs border-0 bg-transparent text-start text-fg-tertiary no-underline',
    'transition-colors',
    motion.fast,
    'underline-offset-[3px]',
    'focused:focus-ring focused:text-fg',
    'pressed:focus-ring pressed:text-fg',
    '[&>svg]:size-icon-sm [&>svg]:shrink-0',
  ].join(' '),
  {
    variants: {
      interactive: {
        true: 'cursor-pointer hovered:text-fg hovered:underline pressed:text-fg-secondary',
      },
      current: {
        true: 'max-w-none text-fg font-medium cursor-default',
      },
      disabled: {
        true: 'text-fg-disabled cursor-not-allowed',
      },
    },
  },
);

export const breadcrumbSeparatorStyles =
  'flex shrink-0 items-center text-fg-disabled [&>svg]:size-icon-xs';

export const breadcrumbEllipsisStyles = [
  'inline-flex size-6 shrink-0 items-center justify-center',
  'p-0 border-0 rounded-sm bg-transparent text-fg-tertiary cursor-pointer',
  'transition-[background-color,color]',
  motion.fast,
  'hovered:bg-subtle hovered:text-fg',
  'pressed:bg-active',
  'aria-expanded:bg-active aria-expanded:text-fg',
  'disabled:bg-transparent disabled:text-fg-disabled disabled:cursor-not-allowed',
  '[&>svg]:size-icon-sm',
].join(' ');
