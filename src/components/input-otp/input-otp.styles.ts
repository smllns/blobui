import { cva } from 'class-variance-authority';
import { fieldShellStyles } from '@/components/shared/field.styles';

export const inputOtpRowStyles = [
  '[--otp-gap:var(--space-4)] relative inline-flex items-center gap-[var(--otp-gap)]',
  'data-[loading]:pointer-events-none data-[loading]:cursor-wait',
].join(' ');

export const inputOtpControlStyles = [
  'absolute inset-0 size-full p-0 border-0 bg-transparent outline-none',
  'pointer-events-none',
  'text-field text-transparent caret-transparent',
  'selection:bg-transparent',
  'disabled:cursor-not-allowed',
  '[&:-webkit-autofill]:[-webkit-text-fill-color:transparent]',
  '[&:-webkit-autofill]:[-webkit-box-shadow:none]',
].join(' ');

export const inputOtpSlotStyles = cva(
  [
    '[--otp-caret-w:var(--border-width-thick)]',
    '[--otp-caret-inset:var(--space-5)]',
    'relative shrink-0 justify-center px-0',
    'text-fg text-body-lg font-medium',
    'select-none',
    'cursor-text',
  ].join(' '),
  {
    variants: {
      size: {
        sm: 'w-control-sm',
        md: 'w-control-md',
        lg: 'w-control-lg',
        xl: 'w-control-xl',
      },
      charset: {
        numeric: 'font-mono tabular tracking-normal',
        alnum: '',
      },

      disabled: {
        true: 'text-fg-disabled cursor-not-allowed',
      },
      waiting: {
        true: [
          'bg-disabled border-border-disabled shadow-none',
          'text-fg-secondary',
          'motion-safe:animate-otp-wave',
        ].join(' '),
      },
    },

    defaultVariants: {
      size: 'md',
      charset: 'numeric',
      disabled: false,
      waiting: false,
    },
  },
);

export const inputOtpSlot = (
  args: Parameters<typeof fieldShellStyles>[0] &
    Parameters<typeof inputOtpSlotStyles>[0],
) => [fieldShellStyles(args), inputOtpSlotStyles(args)].join(' ');

export const inputOtpSeparatorStyles = [
  'shrink-0 w-[var(--space-6)] h-[var(--border-width-thin)]',
  'mx-[calc(var(--space-2)*-1)] rounded-full bg-border',
].join(' ');

export const inputOtpCaretStyles = [
  'pointer-events-none absolute inset-y-[var(--otp-caret-inset)]',
  'w-[var(--otp-caret-w)] rounded-full bg-fg',
  'motion-safe:animate-otp-caret',
].join(' ');
