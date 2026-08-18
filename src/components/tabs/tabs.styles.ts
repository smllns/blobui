import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const tabsRootStyles = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-col',
      vertical: 'flex-row items-stretch',
    },
    block: {
      true: 'w-full',
      false: '',
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
    block: false,
  },
});

export const tabsListStyles = cva(
  [
    'flex items-stretch border-border-subtle',
    'overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'gap-[var(--space-7)]',
        md: 'gap-[var(--space-8)]',
        lg: 'gap-[var(--space-9)]',
      },

      orientation: {
        horizontal: 'flex-row border-b',
        vertical: [
          'shrink-0 flex-col gap-[var(--space-1)]',
          'border-s overflow-x-visible',
        ].join(' '),
      },

      block: {
        true: 'w-full overflow-x-visible',
        false: '',
      },
    },

    compoundVariants: [
      {
        orientation: 'horizontal',
        block: true,
        class: '[&>*]:grow [&>*]:basis-0 [&>*]:justify-center',
      },
    ],

    defaultVariants: {
      size: 'md',
      orientation: 'horizontal',
      block: false,
    },
  },
);

export const tabStyles = cva(
  [
    'relative inline-flex shrink-0 items-center justify-center gap-[var(--space-4)]',
    'cursor-pointer border-0 bg-transparent',
    'font-medium leading-none whitespace-nowrap text-fg-tertiary',
    'transition-colors',
    motion.fast,
    'focused:focus-ring',
    'enabled:hovered:text-fg',
    'enabled:pressed:text-fg-secondary',
    'enabled:aria-selected:text-fg',
    'disabled:cursor-not-allowed disabled:text-fg-disabled',
    '[&>svg]:size-icon-md',
    "after:absolute after:content-[''] after:bg-primary after:opacity-0",
    'after:transition-[opacity,transform]',
    'after:duration-[var(--duration-fast)] after:ease-out',
    'enabled:aria-selected:after:opacity-100',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'h-control-sm text-body-sm',
        md: 'h-control-md text-body-md',
        lg: 'h-control-lg text-body-md',
      },

      orientation: {
        horizontal: [
          'rounded-xs px-[var(--space-1)]',
          'after:inset-x-0 after:-bottom-px after:h-0.5 after:rounded-t-[2px]',
          'after:[transform:scaleX(0.4)]',
          'enabled:aria-selected:after:[transform:scaleX(1)]',
        ].join(' '),

        vertical: [
          'justify-start rounded-sm px-[var(--space-6)]',
          'after:-start-px after:top-[var(--space-3)] after:bottom-[var(--space-3)]',
          'after:w-0.5 after:rounded-e-[2px]',
          'after:[transform:scaleY(0.4)]',
          'enabled:aria-selected:after:[transform:scaleY(1)]',
        ].join(' '),
      },
    },

    defaultVariants: {
      size: 'md',
      orientation: 'horizontal',
    },
  },
);

export const tabBadgeStyles = 'pointer-events-none flex items-center';

export const tabPanelStyles = cva(
  'rounded-sm outline-none focus-visible:focus-ring [&[hidden]]:hidden',
  {
    variants: {
      orientation: {
        horizontal: 'pt-[var(--space-7)]',
        vertical: 'flex-1 ps-[var(--space-7)]',
      },
    },

    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);
