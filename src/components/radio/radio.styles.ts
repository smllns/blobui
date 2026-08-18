import { cva } from 'class-variance-authority';
import { motion, transitionControl } from '@/components/shared/styles';

export const radioStyles = cva(
  [
    '[--radio-size:1.125rem]', // 18px

    'relative inline-grid place-items-center shrink-0 m-0 appearance-none cursor-pointer',
    'size-[var(--radio-size)]',
    'mt-[calc((var(--leading-body-md)-var(--radio-size))/2)]',

    'bg-input border border-border-strong rounded-full',
    transitionControl,
    motion.fast,

    'enabled:hovered:border-primary enabled:hovered:bg-primary-muted',
    'focused:focus-ring',

    'checked:bg-primary checked:border-primary',
    'enabled:checked:hovered:bg-primary-hover enabled:checked:hovered:border-primary-hover',

    "checked:after:content-['']",
    'checked:after:size-[calc(var(--radio-size)*0.34)]',
    'checked:after:rounded-full checked:after:bg-on-primary',

    'disabled:bg-disabled disabled:border-border-disabled disabled:cursor-not-allowed',
    'disabled:checked:after:bg-fg-disabled',
  ].join(' '),
  {
    variants: {
      size: {
        md: '[--radio-size:1.125rem]', // 18px
        lg: '[--radio-size:1.375rem]', // 22px
      },

      error: {
        true: [
          'border-danger-border',
          'enabled:hovered:border-danger enabled:hovered:bg-danger-subtle',
          'checked:bg-danger checked:border-danger',
          'enabled:checked:hovered:bg-danger-hover enabled:checked:hovered:border-danger-hover',
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

export const radioRowStyles = 'flex items-start gap-2.5';

export const radioLabelStyles = cva(
  'text-body-md font-medium text-fg cursor-pointer',
  {
    variants: {
      disabled: {
        true: 'text-fg-disabled cursor-not-allowed',
      },
    },
  },
);

export const radioHelperStyles = cva('', {
  variants: {
    size: {
      md: 'ps-7', // 18 + 10
      lg: 'ps-8', // 22 + 10
    },
  },
  defaultVariants: { size: 'md' },
});
