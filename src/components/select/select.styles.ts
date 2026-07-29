import { cva } from 'class-variance-authority';
import { disabledStyles } from '../styles';

export const selectTriggerStyles = cva(
  [
    'flex items-center justify-between gap-2 border',
    'rounded-lg shadow-sm transition-colors duration-300',
    'focus:outline-none focus:ring-1 focus:ring-neutral-300',
    disabledStyles.html,
    'data-[state=open]:ring-1 data-[state=open]:ring-neutral-300',
  ],
  {
    variants: {
      variant: {
        default: 'bg-neutral-50 border-white/70 hover:bg-white',
        filled: 'bg-white border-transparent hover:bg-neutral-50',
        outline: 'bg-white/20 border-white hover:bg-white/40',
        ghost: 'bg-transparent border-transparent hover:bg-neutral-50/30',
      },

      size: {
        xs: 'h-6 px-2 text-xs',
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
        xl: 'h-14 px-6 text-xl',
      },

      width: {
        auto: 'w-auto',
        sm: 'w-32',
        md: 'w-48',
        lg: 'w-64',
        full: 'w-full',
      },

      error: {
        true: 'border-red-300 bg-red-50 focus:ring-red-200',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'md',
      width: 'md',
      error: false,
    },
  },
);
export const selectContentStyles = [
  'z-50 w-(--radix-select-trigger-width)',
  'overflow-hidden rounded-lg shadow-lg',
  'border border-neutral-200 bg-white p-1',
  'animate-in fade-in-0',
  'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
  'data-[side=bottom]:slide-in-from-top-2',
  'data-[side=top]:slide-in-from-bottom-2',
].join(' ');

export const selectViewportStyles = 'max-h-72 overflow-y-auto';

export const selectItemStyles = [
  'relative flex items-center w-full cursor-pointer',
  'rounded-md px-3 py-2 text-sm text-neutral-700',
  'outline-none select-none transition-colors duration-200',
  'data-[highlighted]:bg-neutral-100 data-[highlighted]:text-neutral-900',
  'data-[state=checked]:bg-neutral-100 data-[state=checked]:font-medium',
  disabledStyles.data,
].join(' ');
