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
    'enabled:not-aria-busy:active:focus-ring',
    'enabled:not-aria-busy:active:translate-y-[0.5px]',
    'data-[force=focus]:focus-ring',
    'data-[force=active]:focus-ring data-[force=active]:translate-y-[0.5px]',
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
          'enabled:hover:bg-primary-hover data-[force=hover]:bg-primary-hover',
          'enabled:not-aria-busy:active:bg-primary-active enabled:not-aria-busy:active:shadow-none',
          'data-[force=active]:bg-primary-active data-[force=active]:shadow-none',
          'disabled:bg-disabled disabled:text-fg-disabled disabled:shadow-none',
        ].join(' '),

        secondary: [
          'bg-surface border-border text-fg shadow-xs',
          'enabled:hover:bg-hover enabled:hover:border-border-strong',
          'data-[force=hover]:bg-hover data-[force=hover]:border-border-strong',
          'enabled:not-aria-busy:active:bg-active enabled:not-aria-busy:active:shadow-none',
          'data-[force=active]:bg-active data-[force=active]:shadow-none',
          'disabled:bg-surface disabled:border-border-disabled disabled:text-fg-disabled disabled:shadow-none',
        ].join(' '),

        soft: [
          'bg-primary-muted text-primary-fg',
          'enabled:hover:bg-primary-muted-hover data-[force=hover]:bg-primary-muted-hover',
          'enabled:not-aria-busy:active:bg-primary-muted-active data-[force=active]:bg-primary-muted-active',
          'disabled:bg-disabled disabled:text-fg-disabled',
        ].join(' '),

        outline: [
          'bg-transparent border-border-strong text-fg',
          'enabled:hover:bg-subtle data-[force=hover]:bg-subtle',
          'enabled:not-aria-busy:active:bg-hover data-[force=active]:bg-hover',
          'disabled:border-border-disabled disabled:text-fg-disabled',
        ].join(' '),

        ghost: [
          'bg-transparent text-fg-secondary',
          'enabled:hover:bg-subtle enabled:hover:text-fg',
          'data-[force=hover]:bg-subtle data-[force=hover]:text-fg',
          'enabled:not-aria-busy:active:bg-hover data-[force=active]:bg-hover',
          'disabled:text-fg-disabled',
        ].join(' '),

        destructive: [
          'bg-danger text-on-solid',
          'shadow-[var(--shadow-xs),inset_0_1px_0_0_var(--alpha-white-16)]',
          'enabled:hover:bg-danger-hover data-[force=hover]:bg-danger-hover',
          'enabled:not-aria-busy:active:bg-danger-active enabled:not-aria-busy:active:shadow-none',
          'data-[force=active]:bg-danger-active data-[force=active]:shadow-none',
          'focus-visible:focus-ring-danger data-[force=focus]:focus-ring-danger',
          'enabled:not-aria-busy:active:focus-ring-danger data-[force=active]:focus-ring-danger',
          'disabled:bg-disabled disabled:text-fg-disabled disabled:shadow-none',
        ].join(' '),
        underline: [
          '[--btn-px:0px] [--btn-trim:0px]',
          'h-auto rounded-xs bg-transparent text-inherit',
          'cursor-help',
          'underline decoration-dotted decoration-border-strong underline-offset-[3px]',
          'hover:decoration-primary',
          'focus-visible:focus-ring',
          'aria-expanded:decoration-primary',
        ].join(' '),
        unstyled: 'rounded-none bg-transparent p-0 m-0 text-inherit',
        link: [
          '[--btn-px:0px] [--btn-trim:0px]',
          'h-auto rounded-xs bg-transparent text-primary-fg',
          'enabled:hover:underline data-[force=hover]:underline underline-offset-[3px]',
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
