import { cva } from 'class-variance-authority';
import { motion } from '@/components/shared/styles';

export const progressStyles = cva(
  [
    '[--progress-height:var(--space-4)]', // 8px
    '[--progress-track:var(--primary-muted)]',
    '[--progress-fill:var(--primary-solid)]',
    '[--progress-value:0%]',

    'group relative w-full overflow-hidden rounded-full',
    'h-[var(--progress-height)] bg-[var(--progress-track)]',
  ].join(' '),
  {
    variants: {
      size: {
        sm: '[--progress-height:var(--space-2)]', //  4px
        md: '[--progress-height:var(--space-4)]', //  8px
        lg: '[--progress-height:var(--space-6)]', // 12px
      },
      tone: {
        accent: '',
        success:
          '[--progress-track:var(--success-subtle)] [--progress-fill:var(--success-solid)]',
        warning:
          '[--progress-track:var(--warning-subtle)] [--progress-fill:var(--warning-solid)]',
        danger:
          '[--progress-track:var(--danger-subtle)] [--progress-fill:var(--danger-solid)]',
      },
      disabled: {
        true: '[--progress-track:var(--bg-disabled)] [--progress-fill:var(--text-disabled)]',
      },
    },

    defaultVariants: {
      size: 'md',
      tone: 'accent',
    },
  },
);

export const progressBarStyles = [
  'block h-full w-[var(--progress-value)] rounded-[inherit]',
  'bg-[var(--progress-fill)]',
  'transition-[width,background-color]',
  motion.base,
  'group-data-[state=indeterminate]:transition-none',
  'group-data-[state=indeterminate]:motion-safe:w-[32%]',
  'group-data-[state=indeterminate]:motion-safe:animate-[ds-progress-sweep_1.4s_var(--ease-in-out)_infinite]',
  'group-data-[state=indeterminate]:motion-reduce:w-full',
  'group-data-[state=indeterminate]:motion-reduce:opacity-40',

  'group-data-[disabled]:[animation-play-state:paused]',
].join(' ');

export const progressSweepKeyframes =
  '@keyframes ds-progress-sweep{from{transform:translateX(-110%)}to{transform:translateX(420%)}}';
