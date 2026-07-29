import { cva } from 'class-variance-authority';
import { disabledStyles } from '../styles';

export const accordionStyles = cva('w-full rounded-lg', {
  variants: {
    variant: {
      default: 'border border-neutral-300 bg-neutral-100',
      filled: 'bg-white',
      outline: 'border border-black',
      ghost: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const accordionItemStyles =
  'overflow-hidden border-b border-black last:border-b-0';

export const triggerStyles = cva(
  `flex w-full items-center justify-between
  rounded-md px-4 py-4 text-left font-medium
  cursor-pointer transition-colors duration-200
  ${disabledStyles.html}
  [&[data-state=open]>svg]:rotate-180
  `,
  {
    variants: {
      variant: {
        default: 'hover:bg-neutral-200/80',
        filled: 'hover:bg-neutral-100',
        outline: 'hover:text-neutral-500',
        ghost: 'hover:bg-neutral-100/70',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const accordionContentStyles = `overflow-hidden text-sm text-muted-foreground px-4 pb-4`;
