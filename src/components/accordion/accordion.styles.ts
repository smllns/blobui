import { cva } from 'class-variance-authority';
import { disabledStyles, motion } from '@/components/shared/styles';

export const accordionStyles = cva('w-full rounded-xl overflow-hidden', {
  variants: {
    variant: {
      default: 'bg-surface border border-border-subtle',
      filled: 'bg-sunken border border-transparent',
      outline: 'bg-transparent border border-border',
      ghost: 'bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const accordionItemStyles =
  'overflow-hidden border-b border-border-subtle last:border-b-0';

export const triggerStyles = cva(
  [
    'flex w-full items-center justify-between gap-4',
    'px-5 py-4 text-start',
    'text-body-md font-medium text-fg',
    'cursor-pointer transition-colors',
    motion.fast,
    '[&[data-state=open]>svg]:rotate-180',
    disabledStyles.html,
    'disabled:text-fg-disabled',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'enabled:hovered:bg-sunken',
        filled: 'enabled:hovered:bg-hover',
        outline: 'enabled:hovered:bg-subtle',
        ghost: 'enabled:hovered:bg-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const accordionIconStyles = [
  'shrink-0 text-fg-tertiary',
  'transition-transform',
  motion.base,
].join(' ');

export const accordionContentStyles =
  'overflow-hidden px-5 pb-4 text-body-md leading-[var(--leading-body-lg)] text-fg-secondary';
