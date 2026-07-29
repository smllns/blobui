import { cva } from 'class-variance-authority';
import { disabledStyles } from '../styles';

export const checkboxWrapperStyles = cva(
  [
    'flex items-center gap-2 rounded-md',
    'transition-all duration-200',
    'cursor-pointer select-none',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },

      disabled: {
        true: disabledStyles.base,
      },

      error: {
        true: 'text-red-600',
      },

      fullWidth: {
        true: 'w-full',
      },
    },

    defaultVariants: {
      size: 'md',
      disabled: false,
      error: false,
      fullWidth: false,
    },
  },
);

export const checkboxBoxStyles = cva(
  [
    'shrink-0 rounded border',
    'flex items-center justify-center',
    'transition-all duration-200',
  ].join(' '),
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
        xl: 'h-6 w-6',
      },

      checked: {
        true: '',
        false: '',
      },

      error: {
        true: '',
      },

      disabled: {
        true: 'opacity-50',
      },
    },

    compoundVariants: [
      {
        checked: true,
        error: false,
        class: 'bg-neutral-900 border-neutral-900',
      },
      {
        checked: true,
        error: true,
        class: 'bg-red-500 border-red-500',
      },
      {
        checked: false,
        error: true,
        class: 'border-red-300 bg-red-50',
      },
      {
        checked: false,
        error: false,
        class: 'bg-white border-neutral-300',
      },
    ],

    defaultVariants: {
      size: 'md',
      checked: false,
      error: false,
    },
  },
);
