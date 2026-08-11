import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const cardStyles = cva(
  [
    '[--card-p:var(--space-9)]', // 24px
    '[--card-footer-p:var(--space-6)]', // 12px
    'flex flex-col',
    'w-full h-full',
    'rounded-xl overflow-hidden border',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-surface border-border-subtle shadow-sm',
        filled: 'bg-sunken border-border-subtle',
        outline: 'bg-transparent border-border',
        ghost: 'bg-transparent border-transparent',
        elevated: 'bg-raised border-border-subtle shadow-lg',
      },
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-6',
      },
      interactive: {
        true: [
          'cursor-pointer text-left',
          'transition-[border-color,box-shadow,transform]',
          motion.base,
          'hover:border-border hover:shadow-md hover:-translate-y-0.5',
          'focus-visible:focus-ring',
        ].join(' '),
      },
    },

    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  },
);

export const cardHeaderStyles = [
  'grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4',
  'p-[var(--card-p)] pb-2.5',
].join(' ');

export const cardTitleStyles =
  'col-start-1 m-0 text-heading-md font-semibold text-balance';

export const cardDescriptionStyles =
  'col-start-1 mt-1 text-body-sm text-fg-tertiary';

export const cardHeaderActionStyles = 'col-start-2 row-start-1';

export const cardBodyStyles = 'flex-auto min-h-0 p-[var(--card-p)] pt-2.5';

export const cardFooterStyles = cva(
  [
    'flex flex-wrap items-center justify-end gap-2 mt-auto',
    'px-[var(--card-p)] py-[var(--card-footer-p)]',
  ].join(' '),
  {
    variants: {
      layout: {
        split: '[&>*:first-child]:me-auto',
        stretch: '[&>*]:flex-[1_1_8rem] [&>*]:min-w-0',
        meta: '[&>*:first-child]:me-auto',
        end: '',
      },
      surface: {
        filled: 'border-t border-border-subtle bg-sunken',
        plain: 'border-t-0 bg-transparent pt-4 pb-[var(--card-p)]',
      },
    },

    defaultVariants: {
      layout: 'end',
      surface: 'filled',
    },
  },
);
