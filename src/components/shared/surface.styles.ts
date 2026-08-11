import { cva } from 'class-variance-authority';
import { disabledStyles, motion } from './styles';

export const surfaceStyles = cva(
  'bg-overlay border border-border shadow-xl outline-none',
  {
    variants: {
      variant: {
        default: 'bg-overlay border-border',
        filled: 'bg-surface border-border-subtle',
        outline: 'bg-transparent border-border backdrop-blur-md',
        ghost: 'bg-transparent border-transparent backdrop-blur-md',
      },

      rounded: {
        sm: 'rounded-md',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
      },
    },

    defaultVariants: {
      variant: 'default',
      rounded: 'md',
    },
  },
);

export const menuStyles = 'min-w-52 p-1.5 rounded-lg';

export const menuLabelStyles =
  'px-2.5 pt-1.5 pb-1 text-micro uppercase text-fg-tertiary';

export const menuItemStyles = cva(
  [
    'relative flex w-full items-center gap-2.5',
    'rounded-sm cursor-pointer select-none outline-none',
    'text-fg',
    'transition-[background-color,color]',
    motion.instant,
    'data-[highlighted]:bg-subtle',
    'focus-visible:bg-subtle focus-visible:shadow-[inset_0_0_0_1.5px_var(--border-focus)]',

    disabledStyles.data,
    'data-[disabled]:text-fg-disabled data-[disabled]:cursor-not-allowed',
  ].join(' '),
  {
    variants: {
      variant: {
        default: '',
        destructive:
          'text-danger-fg data-[highlighted]:bg-danger-subtle data-[highlighted]:text-danger-fg',
      },

      size: {
        sm: 'px-2 py-1 text-body-sm',
        md: 'px-2.5 py-2 text-body-md',
        lg: 'px-3 py-2.5 text-body-lg',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export const menuShortcutStyles =
  'ms-auto text-caption tracking-normal text-fg-tertiary font-mono';

export const menuSeparatorStyles = 'h-px my-1.5 -mx-1.5 bg-border-subtle';
