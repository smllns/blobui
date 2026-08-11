import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  [
    '[--badge-h:1.375rem]', // 22px
    '[--badge-dot:0.375rem]', // 6px
    '[--badge-icon:0.75rem]', // 12px

    'inline-flex items-center h-[var(--badge-h)]',
    'border border-transparent rounded-full',
    'text-caption font-medium leading-none whitespace-nowrap',

    '[&>svg]:size-[var(--badge-icon)] [&>svg]:shrink-0',
  ].join(' '),
  {
    variants: {
      size: {
        sm: '[--badge-h:1.25rem] [--badge-dot:0.3125rem] [--badge-icon:0.625rem] px-1.5 gap-1 text-micro',
        md: '[--badge-h:1.375rem] [--badge-dot:0.375rem] [--badge-icon:0.75rem] px-2 gap-1.5 text-caption',
        lg: '[--badge-h:1.625rem] [--badge-dot:0.4375rem] [--badge-icon:0.875rem] px-2.5 gap-1.5 text-body-sm',
        xl: '[--badge-h:1.875rem] [--badge-dot:0.5rem] [--badge-icon:1rem] px-3 gap-2 text-body-md',
      },

      tone: {
        neutral: '',
        accent: '',
        success: '',
        warning: '',
        danger: '',
      },

      emphasis: {
        soft: '',
        solid: '',
        outline: 'bg-transparent',
      },

      shape: {
        pill: 'rounded-full',
        square: 'rounded-sm',
      },
    },

    compoundVariants: [
      /* --- soft ---------------------------------------------------------- */
      {
        emphasis: 'soft',
        tone: 'neutral',
        class: 'bg-subtle text-fg-secondary',
      },
      {
        emphasis: 'soft',
        tone: 'accent',
        class: 'bg-primary-muted text-primary-fg',
      },
      {
        emphasis: 'soft',
        tone: 'success',
        class: 'bg-success-subtle text-success-fg',
      },
      {
        emphasis: 'soft',
        tone: 'warning',
        class: 'bg-warning-subtle text-warning-fg',
      },
      {
        emphasis: 'soft',
        tone: 'danger',
        class: 'bg-danger-subtle text-danger-fg',
      },

      /* --- solid ---------------------------------------------------------- */
      {
        emphasis: 'solid',
        tone: 'neutral',
        class: 'bg-inverse text-fg-inverse',
      },
      {
        emphasis: 'solid',
        tone: 'accent',
        class: 'bg-primary text-on-primary',
      },
      { emphasis: 'solid', tone: 'success', class: 'bg-success text-on-solid' },
      {
        emphasis: 'solid',
        tone: 'warning',
        class: 'bg-warning text-on-warning',
      },
      { emphasis: 'solid', tone: 'danger', class: 'bg-danger text-on-solid' },

      /* --- outline ------------------------------------------------------- */
      {
        emphasis: 'outline',
        tone: 'neutral',
        class: 'border-border text-fg-secondary',
      },
      {
        emphasis: 'outline',
        tone: 'accent',
        class: 'border-primary-border text-primary-fg',
      },
      {
        emphasis: 'outline',
        tone: 'success',
        class: 'border-success-border text-success-fg',
      },
      {
        emphasis: 'outline',
        tone: 'warning',
        class: 'border-warning-border text-warning-fg',
      },
      {
        emphasis: 'outline',
        tone: 'danger',
        class: 'border-danger-border text-danger-fg',
      },

      { size: 'xl', shape: 'square', class: 'rounded-md' },
    ],

    defaultVariants: {
      size: 'md',
      tone: 'neutral',
      emphasis: 'soft',
      shape: 'pill',
    },
  },
);

export const badgeDotStyles =
  'size-[var(--badge-dot)] shrink-0 rounded-full bg-current';
