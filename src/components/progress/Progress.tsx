import { forwardRef } from 'react';
import type { CSSProperties } from 'react';
import { cn } from '@/lib/cn';
import {
  progressBarStyles,
  progressStyles,
  progressSweepKeyframes,
} from './progress.styles';
import type { ProgressProps, ProgressState } from './progress.types';

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      max = 100,
      indeterminate,
      size,
      tone,
      disabled,
      getValueLabel,
      style,
      className,
      ...props
    },
    ref,
  ) => {
    const resolved = value ?? null;
    const isIndeterminate = indeterminate === true || resolved === null;

    const clamped =
      resolved === null ? 0 : Math.min(Math.max(resolved, 0), max);
    const percent = max > 0 ? (clamped / max) * 100 : 0;

    const state: ProgressState = isIndeterminate
      ? 'indeterminate'
      : clamped >= max
        ? 'complete'
        : 'loading';

    const trackStyle = {
      ...style,
      '--progress-value': `${percent}%`,
    } as CSSProperties;

    return (
      <div
        ref={ref}
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={isIndeterminate ? undefined : clamped}
        aria-valuetext={
          isIndeterminate ? undefined : getValueLabel?.(clamped, max)
        }
        data-state={state}
        data-size={size ?? 'md'}
        data-tone={tone || undefined}
        data-disabled={disabled || undefined}
        style={trackStyle}
        className={cn(progressStyles({ size, tone, disabled }), className)}
        {...props}
      >
        {isIndeterminate && (
          <style href='ds-progress-sweep' precedence='medium'>
            {progressSweepKeyframes}
          </style>
        )}

        <div className={progressBarStyles} />
      </div>
    );
  },
);
