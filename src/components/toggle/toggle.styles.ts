import { cva } from 'class-variance-authority';

export const toggleStyles = cva(
  [
    'aria-pressed:bg-primary-muted aria-pressed:text-primary-fg',
    'data-[state=on]:bg-primary-muted data-[state=on]:text-primary-fg',

    'enabled:hovered:aria-pressed:bg-primary-muted-hover enabled:hovered:aria-pressed:text-primary-fg',
    'enabled:hovered:data-[state=on]:bg-primary-muted-hover enabled:hovered:data-[state=on]:text-primary-fg',
    'enabled:not-aria-busy:pressed:aria-pressed:bg-primary-muted-active',
    'enabled:not-aria-busy:pressed:data-[state=on]:bg-primary-muted-active',

    'disabled:bg-transparent disabled:text-fg-disabled disabled:shadow-none',
    'data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed',
    'data-[disabled]:bg-transparent data-[disabled]:text-fg-disabled data-[disabled]:shadow-none',

    'disabled:aria-pressed:bg-disabled disabled:aria-pressed:text-fg-disabled',
    'disabled:data-[state=on]:bg-disabled disabled:data-[state=on]:text-fg-disabled',
    'data-[disabled]:aria-pressed:bg-disabled data-[disabled]:aria-pressed:text-fg-disabled',
    'data-[disabled]:data-[state=on]:bg-disabled data-[disabled]:data-[state=on]:text-fg-disabled',
  ].join(' '),
  {
    variants: {
      variant: {
        default: '',
        outline: [
          'bg-surface border-border shadow-xs',
          'enabled:aria-pressed:border-primary-border enabled:data-[state=on]:border-primary-border',
          'disabled:border-border-disabled data-[disabled]:border-border-disabled',
        ].join(' '),
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  },
);
