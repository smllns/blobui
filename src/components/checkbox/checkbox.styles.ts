import { cva } from 'class-variance-authority';
import { motion, transitionControl } from '@/components/shared/styles';

export const checkboxStyles = cva(
  [
    '[--cb-stroke:calc(var(--cb-size)*0.1)]',

    'relative inline-grid place-items-center shrink-0 m-0 appearance-none cursor-pointer',
    'size-[var(--cb-size)]',
    'mt-[calc((var(--leading-body-md)-var(--cb-size))/2)]',

    'bg-input border border-border-strong rounded-xs',
    transitionControl,
    motion.fast,

    'enabled:hovered:border-primary enabled:hovered:bg-primary-muted',
    'focused:focus-ring',

    'checked:bg-primary checked:border-primary',
    'indeterminate:bg-primary indeterminate:border-primary',
    'enabled:checked:hovered:bg-primary-hover enabled:checked:hovered:border-primary-hover',

    "indeterminate:after:content-['']",
    'indeterminate:after:w-[calc(var(--cb-size)*0.44)]',
    'indeterminate:after:h-[var(--cb-stroke)]',
    'indeterminate:after:rounded-full indeterminate:after:bg-on-primary',
    'disabled:indeterminate:after:bg-fg-disabled',

    'disabled:bg-disabled disabled:border-border-disabled disabled:cursor-not-allowed',
  ].join(' '),
  {
    variants: {
      size: {
        md: '[--cb-size:1.125rem]',
        lg: '[--cb-size:1.375rem]',
      },

      error: {
        true: [
          'border-danger-border',
          'enabled:hovered:border-danger enabled:hovered:bg-danger-subtle',
          'checked:bg-danger checked:border-danger',
          'indeterminate:bg-danger indeterminate:border-danger',
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

export const checkboxRowStyles = 'flex items-start gap-2.5';

export const checkboxLabelStyles = cva(
  'text-body-md font-medium text-fg cursor-pointer',
  {
    variants: {
      disabled: {
        true: 'text-fg-disabled cursor-not-allowed',
      },
    },
  },
);

export const checkboxHelperStyles = cva('', {
  variants: {
    size: {
      md: 'ps-7', // 18 + 10
      lg: 'ps-8', // 22 + 10
    },
  },
  defaultVariants: { size: 'md' },
});

export const checkboxCheckStyles = [
  '[--cb-size:1.125rem]',
  '[--cb-stroke:calc(var(--cb-size)*0.1)]',

  'pointer-events-none absolute',
  'top-1/2 left-1/2',
  '-translate-x-1/2 -translate-y-[90%]',
  'w-[calc(var(--cb-size)*0.28)]',
  'h-[calc(var(--cb-size)*0.5)]',
  'rotate-45',
  'border-r-[length:var(--cb-stroke)]',
  'border-b-[length:var(--cb-stroke)]',
  'border-on-primary',
  'opacity-0',
  'peer-checked:opacity-100',
  'peer-indeterminate:opacity-0',
].join(' ');
