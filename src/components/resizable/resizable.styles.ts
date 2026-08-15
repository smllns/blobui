import { cva } from 'class-variance-authority';
import { motion, transitionControl } from '@/components/shared/styles';

export const RESIZABLE_OVERLAP_PX = 8;

export const resizableStyles = cva(
  [
    '[--resizable-gutter:var(--space-4)]', // 8px of layout
    '[--resizable-overlap:var(--space-4)]', // 8px borrowed from each panel
    '[--resizable-target:calc(var(--resizable-gutter)_+_2_*_var(--resizable-overlap))]', // 24px

    'group flex w-full min-w-0 min-h-0 items-stretch',
    'data-[dragging]:select-none',
  ].join(' '),
  {
    variants: {
      orientation: {
        horizontal: 'flex-row data-[dragging]:cursor-col-resize',
        vertical: 'flex-col data-[dragging]:cursor-row-resize',
      },
    },

    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

export const resizableStackStyles = 'flex w-full min-h-0 flex-col';

export const resizablePanelStyles = [
  'min-w-0 min-h-0 overflow-auto!',
  'data-[collapsed]:overflow-hidden!',
].join(' ');

export const resizableHandleStyles = cva(
  [
    'relative z-10 shrink-0 self-stretch rounded-xs outline-none',
    'focus-visible:focus-ring',
    transitionControl,
    motion.fast,

    "before:absolute before:content-['']",

    "after:absolute after:content-['']",
    'after:transition-[background-color,width,height]',
    'after:duration-[var(--duration-fast)] after:ease-out',
  ].join(' '),
  {
    variants: {
      orientation: {
        horizontal: [
          'w-[var(--resizable-gutter)] cursor-col-resize',
          'before:inset-y-0 before:left-1/2 before:-translate-x-1/2',
          'before:w-[var(--resizable-target)]',
          'after:inset-y-0 after:left-1/2 after:-translate-x-1/2',
          'after:w-[var(--border-width-thin)]',
        ].join(' '),

        vertical: [
          'h-[var(--resizable-gutter)] cursor-row-resize',
          'before:inset-x-0 before:top-1/2 before:-translate-y-1/2',
          'before:h-[var(--resizable-target)]',
          'after:inset-x-0 after:top-1/2 after:-translate-y-1/2',
          'after:h-[var(--border-width-thin)]',
        ].join(' '),
      },

      disabled: {
        false: [
          'after:bg-border-subtle',
          'hover:after:bg-primary',
          'focus-visible:after:bg-border-focus',
          'group-data-[dragging]:after:bg-primary',
        ].join(' '),

        true: 'cursor-default after:bg-border-disabled',
      },
    },

    compoundVariants: [
      {
        orientation: 'horizontal',
        disabled: false,
        class: [
          'hover:after:w-[var(--border-width-thick)]',
          'focus-visible:after:w-[var(--border-width-thick)]',
          'group-data-[dragging]:after:w-[var(--border-width-thick)]',
        ].join(' '),
      },
      {
        orientation: 'vertical',
        disabled: false,
        class: [
          'hover:after:h-[var(--border-width-thick)]',
          'focus-visible:after:h-[var(--border-width-thick)]',
          'group-data-[dragging]:after:h-[var(--border-width-thick)]',
        ].join(' '),
      },
    ],

    defaultVariants: {
      orientation: 'horizontal',
      disabled: false,
    },
  },
);
