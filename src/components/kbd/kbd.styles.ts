import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const kbdStyles = cva(
  [
    '[--kbd-h:1.25rem]',
    '[--kbd-px:var(--space-3)]',
    '[--kbd-bevel:2px]',

    'inline-flex items-center justify-center',
    'min-w-[var(--kbd-h)] h-[var(--kbd-h)] px-[var(--kbd-px)]',
    'border border-b-2 rounded-xs',
    'font-mono font-medium tracking-normal leading-none whitespace-nowrap',
    'select-none',

    'transition-[background-color,border-color,transform]',
    motion.instant,

    'data-[pressed]:border-b',
    'data-[pressed]:translate-y-[calc(var(--kbd-bevel)-var(--border-width-thin))]',
  ].join(' '),
  {
    variants: {
      size: {
        sm: '[--kbd-h:1.125rem] [--kbd-px:var(--space-2)] text-micro',
        md: '[--kbd-h:1.25rem] [--kbd-px:var(--space-3)] text-micro',
        lg: '[--kbd-h:1.5rem] [--kbd-px:var(--space-4)] text-caption',
      },

      variant: {
        default: [
          'bg-subtle border-border text-fg-secondary',
          'data-[pressed]:bg-active data-[pressed]:border-border-strong',
        ].join(' '),
        ghost: 'bg-transparent border-current text-inherit opacity-55',
      },
    },

    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
);

export const kbdGroupStyles = 'inline-flex items-center gap-[var(--space-2)]';
