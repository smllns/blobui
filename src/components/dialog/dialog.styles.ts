import { cva } from 'class-variance-authority';

export const dialogOverlayStyles = cva('fixed inset-0 z-50 backdrop-blur-sm', {
  variants: {
    overlay: {
      dark: 'bg-black/50',
      light: 'bg-white/30',
    },
  },

  defaultVariants: {
    overlay: 'dark',
  },
});

export const dialogContentStyles = cva(
  [
    'relative fixed  left-1/2 top-1/2 z-50',
    '-translate-x-1/2 -translate-y-1/2',
    'w-full rounded-lg shadow-lg',
    'transition-all duration-200',
  ].join(' '),
  {
    variants: {
      variant: {
        default: 'bg-neutral-100 border',

        filled: 'bg-white',

        outline: 'bg-transparent border',

        ghost: 'bg-transparent',
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

export const dialogHeaderStyles = 'flex flex-col space-y-2 text-left';

export const dialogFooterStyles = 'pt-6 flex justify-end gap-2';

export const dialogTitleStyles = 'text-lg font-semibold';

export const dialogDescriptionStyles = 'text-sm text-muted-foreground';

export const dialogCloseStyles = [
  'absolute right-4 top-4 cursor-pointer rounded-md p-1',
  'opacity-70 transition-opacity hover:opacity-100',
  ' hover:ring hover:ring-neutral-400 hover:bg-neutral-200',
  'transition-all duration-200',
].join(' ');
