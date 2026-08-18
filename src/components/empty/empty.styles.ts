import { cva } from 'class-variance-authority';

export const emptyStyles = cva(
  [
    '[--empty-tile:3rem]',
    '[--empty-icon:var(--icon-xl)]',
    '[--empty-tint:var(--bg-subtle)]',
    '[--empty-ink:var(--text-tertiary)]',

    'flex flex-col items-center gap-2',
    'px-6 py-10 text-center',
  ].join(' '),
  {
    variants: {
      state: {
        'no-data':
          '[--empty-tint:var(--primary-muted)] [--empty-ink:var(--primary-text)]',
        'no-results': '',
        insufficient:
          '[--empty-tint:var(--warning-subtle)] [--empty-ink:var(--warning-text)]',
        error:
          '[--empty-tint:var(--danger-subtle)] [--empty-ink:var(--danger-text)]',
      },

      size: {
        sm: '[--empty-tile:2rem] [--empty-icon:var(--icon-md)] gap-1.5 py-6',
        md: '[--empty-tile:3rem] [--empty-icon:var(--icon-xl)] gap-2 py-10',
        lg: '[--empty-tile:4rem] [--empty-icon:var(--icon-2xl)] gap-2 py-16',
      },

      variant: {
        plain: '',
        bordered: 'rounded-xl border border-dashed border-border bg-surface',
        sunken: 'rounded-xl bg-sunken',
      },
    },

    defaultVariants: {
      state: 'no-data',
      size: 'md',
      variant: 'plain',
    },
  },
);

export const emptyIconStyles = [
  'grid shrink-0 place-items-center size-[var(--empty-tile)] mb-1.5',
  'rounded-full bg-[var(--empty-tint)] text-[var(--empty-ink)]',
  '[&>svg]:size-[var(--empty-icon)] [&>svg]:[stroke-width:1.5]',
].join(' ');

export const emptyTitleStyles = 'm-0 text-body-md font-medium text-fg';

export const emptyTextStyles =
  'm-0 max-w-96 text-body-sm leading-[var(--leading-body-lg)] text-fg-tertiary';

export const emptyActionsStyles =
  'mt-2.5 flex flex-wrap items-center justify-center gap-2';
