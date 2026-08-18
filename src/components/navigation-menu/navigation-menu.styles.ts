import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';
import { surfaceStyles } from '@/components/shared/surface.styles';

export const navigationMenuRootStyles = 'relative';

export const navigationMenuListStyles = [
  'm-0 flex list-none items-center gap-1 p-0',
  'max-md:flex-col max-md:items-stretch',
].join(' ');

export const navigationMenuRowStyles = cva(
  [
    'group inline-flex items-center gap-1.5',
    'h-control-sm rounded-md border-0 bg-transparent px-3',
    'font-medium text-body-md leading-none whitespace-nowrap no-underline',
    'text-fg-secondary outline-none',
    'transition-[background-color,color]',
    motion.fast,
    'focused:focus-ring',
    'max-md:h-control-lg max-md:w-full max-md:justify-between max-md:px-2.5',
  ].join(' '),
  {
    variants: {
      disabled: {
        false: [
          'cursor-pointer',
          'hovered:bg-subtle hovered:text-fg',
          'pressed:bg-hover',
          'data-[state=open]:bg-subtle data-[state=open]:text-fg',
          'aria-expanded:bg-subtle aria-expanded:text-fg',
          'aria-[current=page]:bg-primary-muted aria-[current=page]:text-primary-fg',
        ].join(' '),
        true: 'cursor-not-allowed text-fg-disabled',
      },
    },

    defaultVariants: {
      disabled: false,
    },
  },
);

export const navigationMenuCaretStyles = [
  'shrink-0 text-fg-tertiary',
  'transition-transform',
  motion.fast,
  'group-aria-expanded:rotate-180',
  'group-data-[state=open]:rotate-180',
].join(' ');

export const navigationMenuPanelStyles = cva(
  [
    'absolute top-[calc(100%+var(--space-3))] z-50',
    'w-max max-w-[min(46rem,calc(100vw-var(--space-11)))] p-3',
    'max-md:static max-md:w-full max-md:max-w-none',
    'max-md:border-0 max-md:bg-transparent max-md:shadow-none',
    'max-md:px-2.5 max-md:pt-1 max-md:pb-3',
  ].join(' '),
  {
    variants: {
      align: {
        start: 'start-0 origin-top-left',
        end: 'end-0 origin-top-right',
      },
    },

    defaultVariants: {
      align: 'start',
    },
  },
);

export const navigationMenuPanel = (
  args: Parameters<typeof navigationMenuPanelStyles>[0],
) => [surfaceStyles(), navigationMenuPanelStyles(args)].join(' ');

export const navigationMenuGridStyles = cva(
  'grid gap-1 max-md:grid-cols-1 max-md:grid-rows-none',
  {
    variants: {
      columns: {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
      },
      rows: {
        auto: '',
        2: 'grid-rows-[repeat(2,minmax(0,auto))]',
        3: 'grid-rows-[repeat(3,minmax(0,auto))]',
      },
    },

    defaultVariants: {
      columns: 2,
      rows: 'auto',
    },
  },
);

const cardIconStyles = [
  '[&>svg]:size-icon-lg [&>svg]:text-fg-tertiary',
  '[&>svg]:transition-colors [&>svg]:duration-[var(--duration-instant)] [&>svg]:ease-out',
  'hovered:[&>svg]:text-primary focused:[&>svg]:text-primary',
].join(' ');

export const navigationMenuCardStyles = cva(
  [
    'grid cursor-pointer items-start gap-x-2.5 gap-y-1',
    'rounded-md p-2.5',
    'text-fg no-underline outline-none',
    'transition-[background-color,color]',
    motion.instant,
    'hovered:bg-subtle',
    'focused:focus-ring',
    '[&>svg]:row-span-2',
    cardIconStyles,
  ].join(' '),
  {
    variants: {
      withIcon: {
        true: 'grid-cols-[auto_1fr]',
        false: 'grid-cols-1',
      },
    },

    defaultVariants: {
      withIcon: false,
    },
  },
);

export const navigationMenuFeatureStyles = cva(
  [
    'flex cursor-pointer flex-col gap-1.5',
    'rounded-lg bg-sunken p-4',
    'text-fg no-underline outline-none',
    'transition-[background-color,color]',
    motion.instant,
    'hovered:bg-hover',
    'focused:focus-ring',
    cardIconStyles,
  ].join(' '),
  {
    variants: {
      span: {
        column: 'row-span-full max-md:row-auto',
        cell: 'row-auto',
      },
    },

    defaultVariants: {
      span: 'column',
    },
  },
);

export const navigationMenuCardTitleStyles = 'text-body-md font-medium text-fg';

export const navigationMenuCardDescriptionStyles =
  'text-body-sm text-fg-tertiary';
