import { cva } from 'class-variance-authority';
import { motion, transitionControl } from '@/components/shared/styles';

export const buttonStyles = cva(
  [
    '[--btn-h:var(--control-height-md)]',
    '[--btn-px:var(--space-7)]',
    '[--btn-gap:var(--space-4)]',
    '[--btn-icon:var(--icon-md)]',
    '[--btn-trim:var(--space-1)]',

    'inline-flex items-center justify-center whitespace-nowrap no-underline select-none',
    'h-[var(--btn-h)] px-[var(--btn-px)] gap-[var(--btn-gap)]',
    'border border-transparent rounded-lg',
    'text-body-md font-medium leading-none',

    '[&_svg]:size-[var(--btn-icon)] [&_svg]:shrink-0',

    'data-[lead]:ps-[calc(var(--btn-px)-var(--btn-trim))]',
    'data-[trail]:pe-[calc(var(--btn-px)-var(--btn-trim))]',

    'data-[icon-only]:w-[var(--btn-h)] data-[icon-only]:px-0',

    transitionControl,
    motion.fast,
    'focus-visible:focus-ring',
    'enabled:active:translate-y-[0.5px]',
  ].join(' '),
  {
    variants: {
      size: {
        xs: [
          '[--btn-h:1.75rem]',
          '[--btn-px:var(--space-5)]',
          '[--btn-gap:var(--space-2)]',
          '[--btn-icon:var(--icon-xs)]',
          'rounded-sm text-caption',
        ].join(' '),

        sm: [
          '[--btn-h:var(--control-height-sm)]',
          '[--btn-px:var(--space-6)]',
          '[--btn-gap:var(--space-3)]',
          '[--btn-icon:var(--icon-sm)]',
          'rounded-md text-body-sm',
        ].join(' '),

        md: [
          '[--btn-h:var(--control-height-md)]',
          '[--btn-px:var(--space-7)]',
          '[--btn-gap:var(--space-4)]',
          '[--btn-icon:var(--icon-md)]',
          'rounded-lg text-body-md',
        ].join(' '),

        lg: [
          '[--btn-h:var(--control-height-lg)]',
          '[--btn-px:var(--space-8)]',
          '[--btn-gap:var(--space-4)]',
          '[--btn-icon:var(--icon-lg)]',
          'rounded-lg text-body-lg',
        ].join(' '),

        xl: [
          '[--btn-h:var(--control-height-xl)]',
          '[--btn-px:var(--space-9)]',
          '[--btn-gap:var(--space-5)]',
          '[--btn-icon:var(--icon-xl)]',
          'rounded-xl text-body-lg',
        ].join(' '),
      },

      variant: {
        primary: [
          'bg-primary text-on-primary',
          'shadow-[var(--shadow-xs),inset_0_1px_0_0_var(--alpha-white-16)]',
          'enabled:hover:bg-primary-hover',
          'enabled:active:bg-primary-active enabled:active:shadow-none',
          'disabled:bg-disabled disabled:text-fg-disabled disabled:shadow-none',
        ].join(' '),

        secondary: [
          'bg-surface border-border text-fg shadow-xs',
          'enabled:hover:bg-hover enabled:hover:border-border-strong',
          'enabled:active:bg-active enabled:active:shadow-none',
          'disabled:bg-surface disabled:border-border-disabled disabled:text-fg-disabled disabled:shadow-none',
        ].join(' '),

        soft: [
          'bg-primary-muted text-primary-fg',
          'enabled:hover:bg-primary-muted-hover',
          'enabled:active:bg-primary-muted-active',
          'disabled:bg-disabled disabled:text-fg-disabled',
        ].join(' '),

        outline: [
          'bg-transparent border-border-strong text-fg',
          'enabled:hover:bg-subtle',
          'enabled:active:bg-hover',
          'disabled:border-border-disabled disabled:text-fg-disabled',
        ].join(' '),

        ghost: [
          'bg-transparent text-fg-secondary',
          'enabled:hover:bg-subtle enabled:hover:text-fg',
          'enabled:active:bg-hover',
          'disabled:text-fg-disabled',
        ].join(' '),

        destructive: [
          'bg-danger text-on-solid',
          'shadow-[var(--shadow-xs),inset_0_1px_0_0_var(--alpha-white-16)]',
          'enabled:hover:bg-danger-hover',
          'enabled:active:shadow-none',
          'focus-visible:focus-ring-danger',
          'disabled:bg-disabled disabled:text-fg-disabled disabled:shadow-none',
        ].join(' '),

        link: [
          '[--btn-px:0px] [--btn-trim:0px]',
          'h-auto rounded-xs bg-transparent text-primary-fg',
          'enabled:hover:underline underline-offset-[3px]',
          'disabled:text-fg-disabled',
        ].join(' '),
      },

      state: {
        idle: 'cursor-pointer',
        loading: 'cursor-wait',
        disabled: 'cursor-not-allowed',
      },

      fullWidth: {
        true: 'w-full',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
);

export const buttonLabelStyles =
  'inline-flex items-center gap-[var(--btn-gap)] data-[loading]:opacity-70';
