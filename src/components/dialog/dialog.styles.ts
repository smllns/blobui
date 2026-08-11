import { cva } from 'class-variance-authority';
import { motion, transitionControl } from '@/components/shared/styles';

export const dialogOverlayStyles = cva(
  'fixed inset-0 z-50 backdrop-blur-[2px]',
  {
    variants: {
      overlay: {
        dark: 'bg-scrim',
        light: 'bg-white/30',
      },
    },

    defaultVariants: {
      overlay: 'dark',
    },
  },
);

export const dialogContentStyles = cva(
  [
    'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
    'w-full max-h-[calc(100vh-var(--space-12))]',
    'rounded-2xl overflow-hidden shadow-2xl border',
    'text-fg',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-overlay  border-border-subtle',
        filled: 'bg-surface  border-border-subtle',
        outline: 'bg-overlay  border-border',
        ghost: 'bg-overlay  border-transparent',
      },

      size: {
        sm: 'max-w-sm',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-[95vw] h-[95vh]',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      padding: 'md',
    },
  },
);

export const dialogHeaderStyles = 'flex flex-col gap-1 text-start pe-8';

export const dialogTitleStyles = 'm-0 text-heading-md font-semibold text-fg';

export const dialogDescriptionStyles =
  'm-0 text-body-sm leading-[var(--leading-body-lg)] text-fg-tertiary';

export const dialogBodyStyles = 'pt-2.5 text-body-md text-fg-secondary';

export const dialogFooterStyles = cva('flex items-center justify-end gap-2', {
  variants: {
    surface: {
      plain: 'pt-6',
      filled:
        'mt-6 -mx-6 -mb-6 px-6 py-3 border-t border-border-subtle bg-sunken',
    },
  },
  defaultVariants: {
    surface: 'plain',
  },
});

export const dialogCloseStyles = [
  'absolute end-4 top-4 grid place-items-center size-6 cursor-pointer',
  'rounded-sm border-0 bg-transparent text-fg-tertiary',
  transitionControl,
  motion.fast,
  'hover:bg-subtle hover:text-fg',
  'focus-visible:focus-ring',
].join(' ');
