import { forwardRef } from 'react';

import { cn } from '../../lib/cn';
import { inputWrapperStyles } from './input.styles';
import type { InputProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      size,
      fullWidth,
      error,
      disabled,

      leftIcon,
      rightIcon,

      label,
      description,
      errorMessage,

      id,
      className,

      ...props
    },
    ref,
  ) => {
    const inputId = id ?? props.name;

    const isError = error || !!errorMessage;

    return (
      <div className={cn('flex flex-col gap-1', fullWidth && 'w-full')}>
        {/* LABEL */}
        {label && (
          <label
            htmlFor={inputId}
            className='text-sm font-medium text-neutral-700'
          >
            {label}
          </label>
        )}

        {/* DESCRIPTION */}
        {description && !isError && (
          <p className='text-xs text-neutral-500'>{description}</p>
        )}

        {/* ERROR */}
        {errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>}

        {/* INPUT WRAPPER */}
        <div
          className={cn(
            inputWrapperStyles({
              variant,
              size,
              fullWidth,
              error: isError,
              disabled,
            }),
            className,
          )}
        >
          {leftIcon}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              'flex-1 bg-transparent outline-none placeholder:text-neutral-500 disabled:cursor-not-allowed',
            )}
            {...props}
          />

          {rightIcon}
        </div>
      </div>
    );
  },
);

Input.displayName = 'Input';
