import { forwardRef, useId, useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import {
  helperErrorStyles,
  helperStyles,
  labelStyles,
  requiredStyles,
} from '@/components/shared/styles';
import {
  fieldControlStyles,
  fieldShellStyles,
  fieldStackStyles,
} from '@/components/shared/field.styles';
import { Spinner } from '@/ui/icons/Spinner';
import { inputGroupAddonStyles, inputGroupStyles } from './input-group.styles';
import type {
  InputGroupAddonProps,
  InputGroupProps,
} from './input-group.types';

export const InputGroupAddon = forwardRef<
  HTMLSpanElement,
  InputGroupAddonProps
>(({ variant = 'fill', iconOnly, className, children, ...props }, ref) => (
  <span
    ref={ref}
    data-addon=''
    data-variant={variant}
    data-icon-only={iconOnly || undefined}
    className={cn(inputGroupAddonStyles({ variant, iconOnly }), className)}
    {...props}
  >
    {children}
  </span>
));

const toSlot = (node: ReactNode) =>
  typeof node === 'string' || typeof node === 'number' ? (
    <InputGroupAddon>{node}</InputGroupAddon>
  ) : (
    node
  );

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  (
    {
      variant,
      fullWidth,
      leading,
      trailing,
      error,
      loading,
      loadingSide = 'trailing',
      loadingLabel = 'Loading',
      disabled,
      readOnly,
      label,
      description,
      errorMessage,
      required,
      id,
      className,
      forceState,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? props.name ?? generatedId;

    const isError = error || !!errorMessage;

    const [hasValue, setHasValue] = useState(
      String(props.defaultValue ?? '').length > 0,
    );

    const filled =
      props.value !== undefined ? String(props.value).length > 0 : hasValue;

    const helperId =
      description || errorMessage ? `${inputId}-helper` : undefined;

    const busy = loading || undefined;
    const spinner = (
      <InputGroupAddon iconOnly>
        <Spinner />
      </InputGroupAddon>
    );

    const lead = busy && loadingSide === 'leading' ? spinner : toSlot(leading);
    const trail =
      busy && loadingSide === 'trailing' ? spinner : toSlot(trailing);

    return (
      <div className={cn(fieldStackStyles, fullWidth && 'w-full')}>
        {label && (
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
          data-filled={filled || undefined}
          data-invalid={isError || undefined}
          data-disabled={disabled || undefined}
          data-readonly={readOnly || undefined}
          data-loading={busy}
          data-interactive={!disabled && !readOnly && !loading ? '' : undefined}
          data-force={forceState}
          aria-busy={busy}
          className={cn(
            fieldShellStyles({
              variant,
              invalid: isError,
              disabled,
              readOnly,
            }),
            inputGroupStyles,
            className,
          )}
        >
          {lead}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-invalid={isError || undefined}
            aria-describedby={helperId}
            className={fieldControlStyles}
            onChange={(event) => {
              setHasValue(event.target.value.length > 0);
              onChange?.(event);
            }}
            {...props}
          />

          {trail}
        </div>

        <span role='status' aria-live='polite' className='sr-only'>
          {loading ? loadingLabel : ''}
        </span>

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
