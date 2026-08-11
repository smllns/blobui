import { forwardRef, useEffect, useId, useRef } from 'react';
import type { CheckboxProps } from './checkbox.types';
import {
  checkboxCheckStyles,
  checkboxHelperStyles,
  checkboxLabelStyles,
  checkboxRowStyles,
  checkboxStyles,
} from './checkbox.styles';
import { helperErrorStyles, helperStyles } from '../shared/styles';
import { cn } from '@/lib/cn';
import { mergeRefs } from '@/lib/mergeRefs';
import { Check } from '@/ui/icons/Check';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      size = 'md',
      error,
      disabled,
      description,
      errorMessage,
      fullWidth,
      indeterminate,
      className,
      icon,
      id,
      ...props
    },
    ref,
  ) => {
    const isError = error || !!errorMessage;

    const generatedId = useId();
    const inputId = id ?? generatedId;

    const localRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (localRef.current) {
        localRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    return (
      <div
        className={cn(
          'flex flex-col gap-1.5',
          fullWidth && 'w-full',
          className,
        )}
      >
        <div className={checkboxRowStyles}>
          <div className='relative shrink-0'>
            <input
              ref={mergeRefs(localRef, ref)}
              id={inputId}
              type='checkbox'
              disabled={disabled}
              aria-invalid={isError || undefined}
              aria-describedby={
                description || errorMessage ? `${inputId}-helper` : undefined
              }
              className={cn('peer', checkboxStyles({ size, error: isError }))}
              {...props}
            />
            <Check
              aria-hidden='true'
              className={cn(
                checkboxCheckStyles,
                size === 'lg' && '[--cb-size:1.375rem]',
              )}
            />
          </div>

          {icon}
          <div className='flex flex-col'>
            {label && (
              <label
                htmlFor={inputId}
                className={checkboxLabelStyles({ disabled })}
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
                  label ? checkboxHelperStyles({ size }) : 'text-body-sm',
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
