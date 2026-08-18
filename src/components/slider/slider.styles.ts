import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const sliderStyles = cva(
  [
    '[--slider-rail:var(--space-2)]', // 4px, the sm progress hairline
    '[--slider-thumb:1.25rem]', // 20px
    '[--slider-ring:var(--border-width-thick)]',
    '[--slider-track:var(--bg-active)]',
    '[--slider-fill:var(--primary-solid)]',
    '[--slider-hit:calc((var(--row-height-touch)_-_var(--slider-rail))/2)]',
    '[--slider-inset:calc(var(--slider-thumb)/2)]',

    'group relative flex w-full items-center',
    'py-[var(--slider-hit)] px-[var(--slider-inset)]',
    'touch-none', // the drag is ours, not the scroller's
  ].join(' '),
  {
    variants: {
      size: {
        sm: '[--slider-rail:var(--space-1)] [--slider-thumb:1rem]',
        md: '[--slider-rail:var(--space-2)] [--slider-thumb:1.25rem]',
        lg: '[--slider-rail:var(--space-3)] [--slider-thumb:1.5rem]',
      },

      invalid: {
        true: '[--slider-fill:var(--danger-solid)]',
      },

      disabled: {
        true: '[--slider-fill:var(--text-disabled)] [--slider-track:var(--bg-disabled)]',
      },

      readOnly: {
        true: '[--slider-fill:var(--text-disabled)] [--slider-track:var(--bg-disabled)]',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  },
);

export const sliderTrackStyles = [
  'relative w-full h-[var(--slider-rail)] rounded-full',
  'bg-[var(--slider-track)]',
].join(' ');

export const sliderRangeStyles = [
  'absolute inset-y-0 rounded-[inherit] bg-[var(--slider-fill)]',
  'start-[var(--slider-from,0%)]',
  'end-[calc(100%_-_var(--slider-to,var(--slider-value,0%)))]',
  'transition-[inset-inline-start,inset-inline-end,background-color]',
  motion.fast,
  'group-data-[dragging]:transition-none',
].join(' ');

export const sliderThumbStyles = cva(
  [
    'absolute top-1/2 start-[var(--slider-at,var(--slider-value,0%))]',
    'size-[var(--slider-thumb)] p-0 rounded-full',
    'ms-[calc(var(--slider-thumb)/-2)]',
    '[translate:0_-50%]',

    'bg-control-thumb',
    'shadow-[var(--shadow-sm),inset_0_0_0_var(--slider-ring)_var(--slider-fill)]',
    'cursor-grab touch-none outline-none',
    'transition-[box-shadow,scale]',
    motion.fast,

    'group-data-[interactive]:hovered:shadow-[var(--shadow-sm),inset_0_0_0_var(--slider-ring)_var(--slider-fill),0_0_0_var(--space-4)_var(--primary-muted)]',
    'group-data-[interactive]:pressed:shadow-[var(--shadow-sm),inset_0_0_0_var(--slider-ring)_var(--slider-fill),0_0_0_var(--space-4)_var(--primary-muted)]',
    'group-data-[dragging]:shadow-[var(--shadow-sm),inset_0_0_0_var(--slider-ring)_var(--slider-fill),0_0_0_var(--space-4)_var(--primary-muted)]',
    'group-data-[interactive]:pressed:cursor-grabbing',
    'group-data-[dragging]:cursor-grabbing',
    'group-data-[dragging]:transition-none',

    'focused:focus-ring',
    'focused:shadow-[inset_0_0_0_var(--slider-ring)_var(--slider-fill)]',
  ].join(' '),
  {
    variants: {
      invalid: {
        true: [
          'group-data-[interactive]:hovered:shadow-[var(--shadow-sm),inset_0_0_0_var(--slider-ring)_var(--slider-fill),0_0_0_var(--space-4)_var(--danger-subtle)]',
          'group-data-[interactive]:pressed:shadow-[var(--shadow-sm),inset_0_0_0_var(--slider-ring)_var(--slider-fill),0_0_0_var(--space-4)_var(--danger-subtle)]',
          'focused:focus-ring-danger',
        ].join(' '),
      },

      disabled: {
        true: 'bg-surface shadow-none border border-border-disabled cursor-not-allowed',
      },

      readOnly: {
        true: 'bg-surface shadow-none border border-border-disabled cursor-default',
      },
    },
  },
);

export const sliderOutputStyles =
  'min-w-12 text-body-sm tabular text-fg-secondary text-end';

export const sliderRowStyles = 'flex w-full items-center gap-3';
