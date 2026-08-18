import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const segmentedStyles = cva(
  [
    '[--seg-pad:var(--space-1)] [--seg-radius:var(--radius-md)]',
    'items-stretch gap-[var(--seg-pad)] p-[var(--seg-pad)]',
    'rounded-[var(--seg-radius)] border border-border-subtle bg-sunken',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-control-sm',
        md: 'h-control-md',
        lg: 'h-row-touch [--seg-radius:var(--radius-lg)]',
      },

      block: {
        true: 'flex w-full [&>*]:flex-1',
        false: 'inline-flex',
      },

      disabled: {
        true: 'border-border-disabled bg-disabled cursor-not-allowed',
        false: '',
      },

      loading: {
        true: [
          'pointer-events-none',
          'border-border-disabled bg-disabled',
          '[&>*:not([aria-pressed=true])]:opacity-60',
        ].join(' '),
        false: '',
      },
    },

    defaultVariants: {
      size: 'md',
      block: false,
      disabled: false,
      loading: false,
    },
  },
);

export const segmentedItemStyles = cva(
  [
    'inline-flex items-center justify-center gap-[var(--space-3)]',
    'cursor-pointer border-0 bg-transparent px-[var(--space-6)]',
    'font-medium leading-none whitespace-nowrap',
    'rounded-[calc(var(--seg-radius)_-_var(--seg-pad))]',
    'transition-[background-color,color,box-shadow]',
    motion.fast,
    'focused:focus-ring',
    'disabled:cursor-not-allowed disabled:text-fg-disabled',
    'aria-disabled:cursor-not-allowed aria-disabled:text-fg-disabled',
    '[&>svg]:size-icon-md',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'text-body-sm',
        md: 'text-body-sm',
        lg: 'text-body-md',
      },
      selected: {
        true: [
          'bg-raised text-fg shadow-xs',
          'enabled:hovered:shadow-[var(--shadow-xs),inset_0_0_0_var(--border-width-thin)_var(--border-subtle)]',
          'disabled:bg-disabled disabled:shadow-none',
          'aria-disabled:bg-disabled aria-disabled:shadow-none',
        ].join(' '),

        false: [
          'text-fg-tertiary',
          'enabled:hovered:bg-hover enabled:hovered:text-fg',
          'enabled:pressed:bg-active',
        ].join(' '),
      },
    },

    defaultVariants: {
      size: 'md',
      selected: false,
    },
  },
);
