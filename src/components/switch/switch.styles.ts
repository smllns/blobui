import { cva } from 'class-variance-authority';
import { disabledStyles, motion } from '@/components/shared/styles';

export const switchStyles = cva(
  [
    '[--sw-w:2.25rem] [--sw-h:1.25rem] [--sw-thumb:1rem]', // 36 x 20, md
    '[--sw-pad:0.125rem]',

    'group relative inline-flex shrink-0 items-center cursor-pointer',
    'w-[var(--sw-w)] h-[var(--sw-h)] rounded-full',
    'mt-[calc((var(--leading-body-md)-var(--sw-h))/2)]',

    'bg-control-off',
    'transition-[background-color,box-shadow]',
    motion.base,

    'enabled:hovered:bg-control-off-hover',
    'focused:focus-ring',

    'not-aria-invalid:data-[state=checked]:bg-primary',
    'enabled:hovered:not-aria-invalid:data-[state=checked]:bg-primary-hover',

    'disabled:bg-active',
    'disabled:opacity-60',
    disabledStyles.html,
  ].join(' '),
  {
    variants: {
      size: {
        sm: '[--sw-w:1.875rem] [--sw-h:1.0625rem] [--sw-thumb:0.8125rem]', // 30 x 17
        md: '[--sw-w:2.25rem] [--sw-h:1.25rem] [--sw-thumb:1rem]', //         36 x 20
        lg: '[--sw-w:2.75rem] [--sw-h:1.5rem] [--sw-thumb:1.25rem]', //       44 x 24
        xl: '[--sw-w:3.25rem] [--sw-h:1.75rem] [--sw-thumb:1.5rem]', //       52 x 28
      },

      error: {
        true: [
          'bg-danger-border',
          'enabled:hovered:bg-danger',
          'data-[state=checked]:bg-danger',
          'enabled:hovered:data-[state=checked]:bg-danger-hover',
          'focused:focus-ring-danger',
        ].join(' '),
      },
    },

    defaultVariants: {
      size: 'md',
      error: false,
    },
  },
);

export const switchThumbStyles = [
  'absolute top-[var(--sw-pad)] start-[var(--sw-pad)]',
  'size-[var(--sw-thumb)] rounded-full bg-control-thumb shadow-sm',
  'transition-transform',
  motion.spring,
  'data-[state=checked]:translate-x-[calc(var(--sw-w)-var(--sw-thumb)-var(--sw-pad)*2)]',
  'group-disabled:shadow-none',
].join(' ');

export const switchRowStyles = 'flex items-start gap-2.5';

export const switchLabelStyles = cva(
  'text-body-md font-medium text-fg cursor-pointer',
  {
    variants: {
      disabled: {
        true: 'text-fg-disabled cursor-not-allowed',
      },
    },
  },
);
