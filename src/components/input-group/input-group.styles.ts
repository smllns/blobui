import { cva } from 'class-variance-authority';

export const inputGroupStyles = [
  'items-stretch gap-0 px-0',
  '[&>input]:px-[var(--field-px)]',
  'overflow-hidden',
  'focused-within:border-border-focus',
  'focused-within:focus-ring',
  'data-[invalid]:focused-within:border-danger-border',
  'data-[invalid]:focused-within:focus-ring-danger',
  'data-[disabled]:pointer-events-none',
  'data-[loading]:pointer-events-none data-[loading]:cursor-wait',
  'data-[loading]:bg-disabled data-[loading]:border-border-disabled data-[loading]:shadow-none',
  'data-[loading]:[&>input]:text-fg-secondary',
  '[&>button]:h-full [&>button]:w-auto [&>button]:shrink-0',
  '[&>button]:rounded-none [&>button]:border-y-0 [&>button]:shadow-none',
  '[&>button:not(:last-child)]:border-e [&>button:not(:last-child)]:border-e-border-subtle',
  '[&>button:not(:first-child)]:border-s [&>button:not(:first-child)]:border-s-border-subtle',
  '[&>button:is(:focus-visible,[data-force=focus])]:outline-none',
  '[&>button:is(:focus-visible,[data-force=focus])]:shadow-[inset_0_0_0_var(--focus-ring-width)_var(--border-focus)]',
].join(' ');

export const inputGroupAddonStyles = cva(
  [
    'inline-flex shrink-0 items-center gap-[var(--space-4)]',
    'px-[var(--field-px)]',
    'bg-sunken text-body-sm leading-none text-fg-tertiary',
    'whitespace-nowrap select-none',
    '[&>svg]:size-icon-md [&>svg]:shrink-0',
    'not-last:border-e not-last:border-e-border-subtle',
    'not-first:border-s not-first:border-s-border-subtle',
    'group-data-[invalid]:border-danger-border group-data-[invalid]:text-danger-fg',
    'group-data-[readonly]:border-border',
    'group-data-[disabled]:bg-disabled group-data-[disabled]:border-border-disabled group-data-[disabled]:text-fg-disabled',
    'group-data-[loading]:bg-disabled group-data-[loading]:border-border-disabled',
  ].join(' '),
  {
    variants: {
      variant: {
        fill: '',
        bare: 'border-none bg-transparent not-last:pe-0 not-first:ps-0',
      },

      iconOnly: {
        true: 'aspect-square justify-center px-0',
      },
    },

    defaultVariants: {
      variant: 'fill',
    },
  },
);
