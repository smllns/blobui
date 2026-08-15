import { cva } from 'class-variance-authority';
import { disabledStyles } from '@/components/shared/styles';

export const buttonGroupStyles = cva(
  [
    '[--group-seam:calc(var(--border-width-thin)_*_-1)]',
    'items-stretch',
    disabledStyles.data,
    '[&[data-disabled]>*]:pointer-events-none',
    '[&[data-loading]>*]:pointer-events-none',
    'data-[loading]:cursor-wait',
    '[&[data-loading]>*:not([data-loading])]:opacity-60',
  ].join(' '),
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
      gap: {
        joined: [
          '[&>*]:relative',
          '[&>*:hover:not(:focus-visible)]:z-[1]',
          '[&>*:focus-visible]:z-[2]',
          '[&>*:focus-visible]:outline-offset-0',
          '[&>*:active]:z-[2]! [&>*:active]:outline-offset-0!',
          '[&>[data-force=focus]]:z-[2] [&>[data-force=focus]]:outline-offset-0',
          '[&>[data-force=active]]:z-[2] [&>[data-force=active]]:outline-offset-0',
          '[&>[data-force=hover]]:z-[1]',

          '[&>*:not(:first-child):not(:last-child)]:rounded-none',
          '[&>[data-variant=secondary]:hover:not(:disabled)]:border-border',
          '[&>[data-variant=secondary]:active:not(:disabled)]:border-border',
          '[&>[data-variant=secondary][data-force=hover]]:border-border',
          '[&>[data-variant=secondary][data-force=active]]:border-border',
        ].join(' '),

        spaced: 'gap-[var(--space-4)]',
      },
      block: {
        true: 'flex w-full [&>*]:flex-1',
        false: 'inline-flex',
      },
    },

    compoundVariants: [
      {
        gap: 'joined',
        orientation: 'horizontal',
        class: [
          '[&>*:first-child:not(:only-child)]:rounded-se-none',
          '[&>*:first-child:not(:only-child)]:rounded-ee-none',
          '[&>*:last-child:not(:only-child)]:rounded-ss-none',
          '[&>*:last-child:not(:only-child)]:rounded-es-none',

          '[&>*+*]:ms-[var(--group-seam)]',
          '[&>[data-variant=ghost]+[data-variant=ghost]]:border-s-border-subtle',

          '[&>[data-variant=primary]+[data-variant=primary]]:border-s-primary-active',
          '[&>[data-variant=destructive]+[data-variant=destructive]]:border-s-danger-hover',
          '[&>[data-variant=soft]+[data-variant=soft]]:border-s-primary-muted-active',
        ].join(' '),
      },

      {
        gap: 'joined',
        orientation: 'vertical',
        class: [
          '[&>*:first-child:not(:only-child)]:rounded-es-none',
          '[&>*:first-child:not(:only-child)]:rounded-ee-none',
          '[&>*:last-child:not(:only-child)]:rounded-ss-none',
          '[&>*:last-child:not(:only-child)]:rounded-se-none',

          '[&>*+*]:mt-[var(--group-seam)]',

          '[&>[data-variant=ghost]+[data-variant=ghost]]:border-t-border-subtle',
          '[&>[data-variant=primary]+[data-variant=primary]]:border-t-primary-active',
          '[&>[data-variant=destructive]+[data-variant=destructive]]:border-t-danger-hover',
          '[&>[data-variant=soft]+[data-variant=soft]]:border-t-primary-muted-active',
        ].join(' '),
      },
    ],

    defaultVariants: {
      orientation: 'horizontal',
      gap: 'joined',
      block: false,
    },
  },
);
