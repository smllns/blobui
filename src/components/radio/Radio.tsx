import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { labelSizeMap, radioStyles } from './radio.styles';
import type { RadioProps } from './radio.types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      description,
      variant,
      size = 'md',
      error,
      errorMessage,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const safeSize = size ?? 'md';
    return (
      <label className='flex items-center gap-1 flex-col cursor-pointer'>
        <div className='flex items-center flex-row gap-2'>
          <div className='flex h-5 items-center'>
            <input
              ref={ref}
              type='radio'
              disabled={disabled}
              className={cn(
                radioStyles({ variant, size, error }),
                disabled && 'opacity-50 cursor-not-allowed',
                className,
              )}
              {...props}
            />
          </div>

          {label && (
            <span className={cn('text-neutral-900 ', labelSizeMap[safeSize])}>
              {label}
            </span>
          )}
        </div>

        {(description || errorMessage) && (
          <span
            className={cn(
              'mt-1 text-xs leading-4',
              errorMessage ? 'text-red-500' : 'text-neutral-500',
            )}
          >
            {errorMessage ?? description}
          </span>
        )}
      </label>
    );
  },
);
