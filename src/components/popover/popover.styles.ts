import { cva } from 'class-variance-authority';
import { surfaceStyles } from '../shared/surface.styles';

export const popoverContentStyles = cva('z-50 outline-none', {
  variants: {
    variant: {
      default: '',
      filled: '',
      outline: '',
      ghost: '',
    },
    size: {
      sm: 'w-56 p-3',
      md: 'w-72 p-4',
      lg: 'w-96 p-5',
    },

    rounded: {
      sm: '',
      md: '',
      lg: '',
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'md',
    rounded: 'md',
  },
});

export const popoverContent = (
  args: Parameters<typeof popoverContentStyles>[0],
) => [surfaceStyles(args), popoverContentStyles(args)].join(' ');

export const popoverArrowStyles = cva('block,stroke-2 ', {
  variants: {
    variant: {
      default: 'fill-overlay stroke-border ',
      filled: 'fill-surface stroke-border',
      outline: 'fill-overlay stroke-border-strong',
      ghost: 'fill-overlay ',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

export const popoverTitleStyles = 'm-0 mb-1 text-body-md font-semibold text-fg';

export const popoverDescriptionStyles =
  'm-0 mb-3 text-body-sm text-fg-tertiary';
