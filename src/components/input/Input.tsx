import { forwardRef, useId, useState } from 'react';
import { cn } from '@/lib/cn';
import {
  helperErrorStyles,
  helperStyles,
  labelStyles,
  requiredStyles,
} from '../shared/styles';
import type { InputProps } from './input.types';
import {
  fieldControlStyles,
  fieldInfieldControlStyles,
  fieldInsideLabelStyles,
  fieldShellStyles,
  fieldStackStyles,
} from '../shared/field.styles';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      size,
      labelPlacement = 'above',
      fullWidth,
      error,
      disabled,
      readOnly,
      leftIcon,
      rightIcon,
      label,
      description,
      errorMessage,
      required,
      id,
      className,
      onFocus,
      onBlur,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? props.name ?? generatedId;

    const isError = error || !!errorMessage;
    const isInfield = labelPlacement === 'infield' && !!label;

    const [focused, setFocused] = useState(false);

    const [hasValue, setHasValue] = useState(() =>
      props.value !== undefined
        ? String(props.value).length > 0
        : String(props.defaultValue ?? '').length > 0,
    );

    const controlledValue = props.value;
    const filled =
      (controlledValue !== undefined
        ? String(controlledValue).length > 0
        : hasValue) || !!props.placeholder;

    const helperId =
      description || errorMessage ? `${inputId}-helper` : undefined;

    return (
      <div className={cn(fieldStackStyles, fullWidth && 'w-full')}>
        {label && !isInfield && (
          <label htmlFor={inputId} className={labelStyles}>
            {label}
            {required && (
              <span aria-hidden='true' className={requiredStyles}>
                *
              </span>
            )}
          </label>
        )}

        <div
          data-leading={leftIcon ? '' : undefined}
          data-focused={focused || undefined}
          data-filled={filled || undefined}
          data-invalid={isError || undefined}
          data-disabled={disabled || undefined}
          data-interactive={!disabled && !readOnly ? '' : undefined}
          className={cn(
            fieldShellStyles({
              variant,
              size: isInfield ? 'xl' : size,
              focused,
              invalid: isError,
              disabled,
              readOnly,
            }),
            className,
          )}
        >
          {leftIcon}

          {isInfield && (
            <label htmlFor={inputId} className={fieldInsideLabelStyles}>
              {label}
              {required && (
                <span aria-hidden='true' className={requiredStyles}>
                  *
                </span>
              )}
            </label>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-invalid={isError || undefined}
            aria-describedby={helperId}
            className={cn(
              fieldControlStyles,
              isInfield && fieldInfieldControlStyles,
            )}
            onFocus={(event) => {
              setFocused(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setFocused(false);
              onBlur?.(event);
            }}
            onChange={(event) => {
              setHasValue(event.target.value.length > 0);
              onChange?.(event);
            }}
            {...props}
          />

          {rightIcon}
        </div>

        {(description || errorMessage) && (
          <p
            id={helperId}
            className={errorMessage ? helperErrorStyles : helperStyles}
          >
            {errorMessage ?? description}
          </p>
        )}
      </div>
    );
  },
);
