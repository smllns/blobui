import { forwardRef, useId } from 'react';
import { cn } from '@/lib/cn';
import {
  radioHelperStyles,
  radioLabelStyles,
  radioRowStyles,
  radioStyles,
} from './radio.styles';
import { helperErrorStyles, helperStyles } from '@/components/shared/styles';
import type { RadioProps } from './radio.types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      description,
      size = 'md',
      error,
      errorMessage,
      disabled,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const isError = error || !!errorMessage;

    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        <div className={radioRowStyles}>
          <input
            ref={ref}
            id={inputId}
            type='radio'
            disabled={disabled}
            aria-invalid={isError || undefined}
            aria-describedby={
              description || errorMessage ? `${inputId}-helper` : undefined
            }
            className={cn(radioStyles({ size, error: isError }))}
            {...props}
          />
          <div className='flex flex-col'>
            {label && (
              <label
                htmlFor={inputId}
                className={radioLabelStyles({ disabled })}
              >
                {label}
              </label>
            )}
            {(description || errorMessage) && (
              <p
                id={`${inputId}-helper`}
                className={cn(
                  'pl-0',
                  errorMessage ? helperErrorStyles : helperStyles,
                  radioHelperStyles({ size }),
                )}
              >
                {errorMessage ?? description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  },
);
