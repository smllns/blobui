import { cva } from 'class-variance-authority';

export const avatarStyles = cva(
  [
    '[--avatar-size:2.5rem]',
    'relative inline-grid place-items-center shrink-0  select-none',
    'size-[var(--avatar-size)]',
    'text-[calc(var(--avatar-size)*0.36)] font-medium leading-none',
    'bg-primary-muted text-primary-fg',
  ].join(' '),
  {
    variants: {
      size: {
        xs: '[--avatar-size:1.5rem]', // 24
        sm: '[--avatar-size:2rem]', // 32
        md: '[--avatar-size:2.5rem]', // 40
        lg: '[--avatar-size:3rem]', // 48
        xl: '[--avatar-size:3.5rem]', // 56
        '2xl': '[--avatar-size:4rem]', // 64
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-[calc(var(--avatar-size)*0.24)]',
      },
    },

    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  },
);

export const avatarStatusStyles = cva(
  [
    'absolute right-0 bottom-0 size-[28%] rounded-full',
    'border-2 border-surface',
  ].join(' '),
  {
    variants: {
      status: {
        online: 'bg-success',
        busy: 'bg-danger',
        away: 'bg-warning',
        offline: 'bg-control-off-hover',
      },
    },
    defaultVariants: {
      status: 'offline',
    },
  },
);
