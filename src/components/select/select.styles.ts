import { cva } from 'class-variance-authority';
import { fieldShellStyles } from '@/components/shared/field.styles';
import {
  menuItemStyles,
  menuStyles,
  surfaceStyles,
} from '@/components/shared/surface.styles';
import { motion } from '@/components/shared/styles';

export const selectTriggerStyles = cva(
  [
    'justify-between cursor-pointer text-start text-fg text-field',
    'data-[state=open]:border-border-focus',
    'focus-visible:border-border-focus focus-visible:focus-ring',
    'data-[placeholder]:text-fg-placeholder',
    'disabled:text-fg-disabled disabled:cursor-not-allowed ',
  ].join(' '),
  {
    variants: {
      width: {
        auto: 'w-auto',
        sm: 'w-32',
        md: 'w-48',
        lg: 'w-64',
        full: 'w-full',
      },
    },

    defaultVariants: {
      width: 'md',
    },
  },
);

export const selectTrigger = (
  args: Parameters<typeof fieldShellStyles>[0] &
    Parameters<typeof selectTriggerStyles>[0],
) => [fieldShellStyles(args), selectTriggerStyles(args)].join(' ');

export const selectCaretStyles = [
  'shrink-0 text-fg-tertiary',
  'transition-transform',
  motion.fast,
  'group-data-[state=open]:rotate-180',
].join(' ');

export const selectContentStyles = [
  surfaceStyles(),
  menuStyles,
  'z-50 w-(--radix-select-trigger-width) overflow-hidden',
].join(' ');

export const selectViewportStyles = 'max-h-64 overflow-y-auto';

export const selectItemStyles = [
  menuItemStyles(),
  'justify-between',
  'data-[state=checked]:text-primary-fg data-[state=checked]:font-medium',
].join(' ');

export const selectCheckSlotStyles = 'size-icon-sm shrink-0';
