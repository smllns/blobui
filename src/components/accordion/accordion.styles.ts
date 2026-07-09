import { cva } from 'class-variance-authority';

export const accordionStyles = cva('w-full', {
  variants: {
    variant: {
      default: 'rounded-lg bg-neutral-100 p-2',

      outline: 'rounded-lg border border-border',

      ghost: '',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
});

export const itemStyles = cva(
  'overflow-hidden border-b border-border last:border-b-0',
);

export const triggerStyles = cva(
  `
  flex
  w-full
  items-center
  justify-between
  rounded-md
  px-4
  py-4
  text-left
  font-medium
  cursor-pointer
  transition-colors
  duration-200

  disabled:opacity-50
  disabled:cursor-not-allowed

  [&[data-state=open]>svg]:rotate-180
  `,
  {
    variants: {
      variant: {
        default: 'hover:bg-neutral-200',

        outline: 'hover:text-neutral-500',

        ghost: 'hover:bg-neutral-100/70',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  },
);

export const contentStyles = cva(
  `
  overflow-hidden
  text-sm
  text-muted-foreground
  `,
  {
    variants: {
      variant: {
        default: 'px-4 pb-4',

        outline: 'px-4 pb-4',

        ghost: 'px-4 pb-4',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  },
);
