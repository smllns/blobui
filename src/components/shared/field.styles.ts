import { cva } from 'class-variance-authority';
import { motion, transitionControl } from './styles';
//  FIELD — the shell shared by Input and Select

export const fieldShellStyles = cva(
  [
    '[--field-px:var(--space-6)]', // 12px
    '[--field-icon:1rem]',
    '[--field-lead:0rem]',
    'data-[leading]:[--field-lead:calc(var(--field-icon)+var(--space-4))]',
    '[--field-label-lift:12px]',
    '[--field-label-duration:150ms]',
    '[--field-label-ease:cubic-bezier(0.2,0,0,1)]',

    'group relative flex items-center gap-2 w-full',
    'px-[var(--field-px)]',
    'border rounded-lg',
    transitionControl,
    motion.fast,

    '[&>svg]:size-[var(--field-icon)] [&>svg]:shrink-0 [&>svg]:text-fg-tertiary',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'h-7 [--field-px:var(--space-4)] rounded-sm',
        sm: 'h-control-sm [--field-px:var(--space-5)] rounded-md',
        md: 'h-control-md [--field-px:var(--space-6)] rounded-lg',
        lg: 'h-control-lg [--field-px:var(--space-7)] rounded-lg',
        xl: 'h-control-xl [--field-px:var(--space-7)] rounded-lg',
      },
      variant: {
        default: [
          'bg-input border-border-strong shadow-xs text-fg-tertiary',
          'data-[interactive]:hovered:border-primary-border',
        ].join(' '),

        filled: [
          'bg-subtle border-transparent text-fg-tertiary',
          'data-[interactive]:hovered:bg-hover',
        ].join(' '),

        outline: [
          'bg-transparent border-border-strong text-fg-tertiary',
          'data-[interactive]:hovered:border-primary-border',
        ].join(' '),

        ghost: [
          'bg-transparent border-transparent text-fg-tertiary',
          'data-[interactive]:hovered:bg-subtle',
        ].join(' '),
      },

      focused: {
        true: 'border-border-focus focus-ring',
      },

      invalid: {
        true: 'border-danger-border data-[interactive]:hovered:border-danger',
      },

      disabled: {
        true: 'bg-disabled border-border-disabled shadow-none cursor-not-allowed',
      },

      readOnly: {
        true: 'bg-subtle border-border shadow-none',
      },
    },

    compoundVariants: [
      { focused: true, invalid: true, class: 'focus-ring-danger' },
    ],

    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  },
);

export const fieldControlStyles = [
  'flex-1 min-w-0 h-full p-0 bg-transparent border-0 outline-none',
  'text-fg text-field tracking-[var(--tracking-body-md)]',
  'placeholder:text-fg-placeholder',
  'disabled:text-fg-disabled disabled:cursor-not-allowed',

  '[&:-webkit-autofill]:[-webkit-text-fill-color:var(--text-primary)]',
  '[&:-webkit-autofill]:[-webkit-box-shadow:inset_0_0_0_100px_var(--bg-input)]',
  '[&:-webkit-autofill]:[caret-color:var(--text-primary)]',
].join(' ');

export const fieldInsideLabelStyles = [
  'pointer-events-none absolute select-none font-normal',
  'start-[calc(var(--field-px)+var(--field-lead))]',
  'max-w-[calc(100%-var(--field-px)*2-var(--field-lead))]',
  'overflow-hidden text-ellipsis whitespace-nowrap',

  'top-1/2 -translate-y-1/2 origin-left',
  'text-field leading-[var(--leading-body-lg)] text-fg-placeholder',

  'motion-safe:transition-[transform,color]',
  'motion-safe:duration-[var(--field-label-duration)]',
  'motion-safe:ease-[var(--field-label-ease)]',

  'group-data-[filled]:translate-y-[calc(-50%-var(--field-label-lift))]',
  'group-data-[filled]:scale-75 group-data-[filled]:text-fg-tertiary',
  'group-data-[focused]:translate-y-[calc(-50%-var(--field-label-lift))]',
  'group-data-[focused]:scale-75 group-data-[focused]:text-primary-fg',
  'group-data-[invalid]:text-danger-fg',
  'group-data-[disabled]:text-fg-disabled',
].join(' ');

export const fieldInfieldControlStyles =
  'h-full pt-5 pb-1 leading-[var(--leading-body-lg)]';

export const fieldStackStyles = 'flex flex-col gap-1.5';
