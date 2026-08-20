import { cva } from 'class-variance-authority';
import { motion, transitionControl } from '@/components/shared/styles';

export const sheetContentStyles = cva(
  [
    'group/sheet fixed z-50 flex flex-col outline-none',
    'bg-overlay text-fg shadow-2xl border-0',
    'overflow-visible',
    'data-[dragging]:transition-none',
  ].join(' '),
  {
    variants: {
      side: {
        right: [
          'inset-y-0 right-0 h-full rounded-l-2xl',
          'w-[min(var(--sheet-size),calc(100vw-var(--space-11)))]',
          'pr-[var(--inset-right)]',
        ].join(' '),

        left: [
          'inset-y-0 left-0 h-full rounded-r-2xl',
          'w-[min(var(--sheet-size),calc(100vw-var(--space-11)))]',
          'pl-[var(--inset-left)]',
        ].join(' '),

        bottom: [
          'inset-x-0 bottom-0 w-full max-h-[85svh] rounded-t-2xl',
          'pb-[var(--inset-bottom)]',
        ].join(' '),

        top: [
          'inset-x-0 top-0 w-full max-h-[85svh] rounded-b-2xl',
          'pt-[var(--inset-top)]',
        ].join(' '),
      },

      size: {
        sm: '[--sheet-size:20rem]',
        md: '[--sheet-size:24rem]',
        lg: '[--sheet-size:32rem]',
        full: '[--sheet-size:calc(100vw-var(--space-11))]',
      },
    },

    defaultVariants: {
      side: 'right',
      size: 'md',
    },
  },
);

export const sheetGrabberStyles = [
  'shrink-0 block w-9 h-1 mx-auto my-3 p-0 border-0 rounded-full',
  'bg-border cursor-grab touch-none',
  'transition-[background-color]',
  motion.fast,
  'hover:bg-border-strong',
  'active:bg-fg-tertiary active:cursor-grabbing',
  'group-data-[dragging]/sheet:bg-fg-tertiary group-data-[dragging]/sheet:cursor-grabbing',
  'focus-visible:focus-ring',
].join(' ');

export const sheetHeaderStyles = [
  'shrink-0 flex items-start justify-between gap-4 px-6 pt-6 pb-2.5',
  '[[data-sheet-grabber]+&]:pt-1',
].join(' ');

export const sheetBodyStyles = [
  'flex-1 min-h-0 overflow-y-auto px-6 pt-2.5 pb-6',
  'text-body-md text-fg-secondary',
  'group-data-[loading]/sheet:opacity-60 group-data-[loading]/sheet:pointer-events-none',
].join(' ');

export const sheetFooterStyles = [
  'shrink-0 flex items-center justify-end gap-2 px-6 py-3',
  'border-t border-border-subtle bg-sunken',
  'group-data-[loading]/sheet:pointer-events-none',
  'group-data-[loading]/sheet:[&>*:not([data-loading])]:opacity-60',
].join(' ');

export const sheetCloseStyles = [
  'absolute end-4 top-4 grid place-items-center size-6 cursor-pointer',
  'rounded-sm border-0 bg-transparent text-fg-tertiary',
  transitionControl,
  motion.fast,
  'hover:bg-subtle hover:text-fg',
  'focus-visible:focus-ring',
].join(' ');
