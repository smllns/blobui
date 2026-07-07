import { cva } from 'class-variance-authority';

export const selectTriggerStyles = cva(
  [
    'flex items-center justify-between gap-2',
    'rounded-lg shadow-sm',
    'transition-colors duration-300',
    'focus:outline-none',
    'focus:ring-1 focus:ring-neutral-300',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'data-[state=open]:ring-1 data-[state=open]:ring-neutral-300',
  ],
  {
    variants: {
      variant: {
        default: 'bg-neutral-50 border border-white/70 hover:bg-white',
        filled: 'bg-white border border-transparent hover:bg-neutral-50',
        outline: 'bg-white/20 border border-white hover:bg-white/40',
        ghost: 'bg-transparent hover:bg-neutral-50/30',
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
export const selectContentStyles = cva([
  'z-50',
  'w-(--radix-select-trigger-width)',
  'overflow-hidden',

  'rounded-lg',
  'border border-neutral-200',

  'bg-white',
  'shadow-lg',

  'p-1',

  // animation
  'animate-in fade-in-0',
  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',

  // placement
  'data-[side=bottom]:slide-in-from-top-2',
  'data-[side=top]:slide-in-from-bottom-2',
]);

export const selectViewportStyles = cva(['max-h-72', 'overflow-y-auto']);

export const selectItemStyles = cva([
  'relative flex items-center',

  'w-full',
  'cursor-pointer',

  'rounded-md',

  'px-3 py-2',

  'text-sm',
  'text-neutral-700',

  'outline-none',
  'select-none',

  'transition-colors',

  // hover/focus
  'data-[highlighted]:bg-neutral-100',
  'data-[highlighted]:text-neutral-900',

  // selected
  'data-[state=checked]:bg-neutral-100',
  'data-[state=checked]:font-medium',

  // disabled
  'data-[disabled]:pointer-events-none',
  'data-[disabled]:opacity-50',
]);

export const selectIconStyles = cva(['h-4 w-4', 'opacity-50']);
