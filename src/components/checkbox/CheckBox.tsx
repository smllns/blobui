import { forwardRef } from 'react';

import type { CheckboxProps } from './checkbox.types';
import { checkboxWrapperStyles, checkboxBoxStyles } from './checkbox.styles';
import { cn } from '../../lib/cn';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size,
      error,
      disabled,
      description,
      errorMessage,
      fullWidth,
      className,
      leftIcon,
      ...props
    },
    ref,
  ) => {
    const isError = error || !!errorMessage;

    return (
      <label
        className={cn(
          checkboxWrapperStyles({
            size,
            error: isError,
            disabled,
            fullWidth,
          }),
          'flex flex-col gap-1 ',
          className,
        )}
      >
        <div className='flex items-center gap-2'>
          <div
            className={checkboxBoxStyles({
              size,
              checked: !!props.checked,
              error: isError,
              disabled,
            })}
          >
            {props.checked && <span className='text-xs text-white'>✓</span>}
          </div>

          <input
            ref={ref}
            type='checkbox'
            disabled={disabled}
            className='hidden'
            {...props}
          />

          {leftIcon}

          {label && <span className='font-medium'>{label}</span>}
        </div>
        {(description || errorMessage) && (
          <div className='mb-1'>
            {errorMessage ? (
              <p className='text-xs text-red-500'>{errorMessage}</p>
            ) : (
              description && (
                <p className='text-xs text-neutral-500'>{description}</p>
              )
            )}
          </div>
        )}
      </label>
    );
  },
);
