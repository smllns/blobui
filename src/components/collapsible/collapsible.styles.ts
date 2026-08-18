import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const collapsibleStyles = [
  '[--collapsible-peek:calc(var(--leading-body-md)_*_3)]', // three lines of body text
  'flex w-full flex-col gap-[var(--space-4)]',
].join(' ');

export const collapsibleTriggerStyles = cva('', {
  variants: {
    align: {
      start: 'self-start',
      end: 'self-end',
      stretch: 'self-stretch',
    },
  },
  defaultVariants: {
    align: 'start',
  },
});

export const collapsibleIconStyles = cva(
  ['shrink-0 ', 'transition-transform', motion.base].join(' '),
  {
    variants: {
      open: {
        true: 'rotate-180',
      },
    },
  },
);

export const collapsiblePanelStyles = 'overflow-hidden';

export const collapsiblePanelInnerStyles = cva('overflow-hidden', {
  variants: {
    peek: {
      true: 'min-h-[var(--collapsible-peek)]',
    },
    faded: {
      true: '[mask-image:linear-gradient(to_bottom,currentColor_55%,transparent)]',
    },
  },
});

export const collapsibleContentStyles =
  'text-body-md leading-[var(--leading-body-lg)] text-fg-secondary';
