import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const alertStyles = cva(
  [
    '[--alert-bg:var(--bg-subtle)]',
    '[--alert-border:var(--border-default)]',
    '[--alert-ink:var(--text-secondary)]',

    'flex items-start gap-2.5 px-4 py-3',
    'rounded-lg border border-[color:var(--alert-border)] bg-[var(--alert-bg)]',
    'text-fg-secondary',

    'transition-[opacity,transform]',
    motion.fast,
    'data-[state=closed]:-translate-y-1 data-[state=closed]:opacity-0',

    'focus:focus-ring',
  ].join(' '),
  {
    variants: {
      tone: {
        neutral: '',
        info: '[--alert-bg:var(--info-subtle)] [--alert-border:var(--info-border)] [--alert-ink:var(--info-text)]',
        success:
          '[--alert-bg:var(--success-subtle)] [--alert-border:var(--success-border)] [--alert-ink:var(--success-text)]',
        warning:
          '[--alert-bg:var(--warning-subtle)] [--alert-border:var(--warning-border)] [--alert-ink:var(--warning-text)]',
        danger:
          '[--alert-bg:var(--danger-subtle)] [--alert-border:var(--danger-border)] [--alert-ink:var(--danger-text)]',
      },

      emphasis: {
        subtle: '',
        bare: [
          'rounded-none border-transparent bg-transparent py-2 ps-3',
          'border-s-[length:var(--border-width-thick)] border-s-[color:var(--alert-border)]',
        ].join(' '),
      },
    },

    defaultVariants: {
      tone: 'neutral',
      emphasis: 'subtle',
    },
  },
);

export const alertIconStyles = [
  'mt-px flex shrink-0 text-[var(--alert-ink)]',
  '[&>svg]:size-icon-lg [&>svg]:shrink-0',
].join(' ');

export const alertBodyStyles = 'min-w-0 flex-1';

export const alertTitleStyles = 'm-0 text-body-md font-medium text-fg';

export const alertTextStyles =
  'm-0 text-body-sm leading-[var(--leading-body-lg)] text-fg-secondary';

export const alertActionsStyles = 'mt-3 flex flex-wrap items-center gap-2';

export const alertCloseStyles =
  '-mt-px -me-1 shrink-0 [--btn-icon:var(--icon-sm)]';
