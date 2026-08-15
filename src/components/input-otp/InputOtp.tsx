import { Fragment, forwardRef, useId, useRef, useState } from 'react';
import type {
  ChangeEvent,
  FocusEvent,
  PointerEvent,
  SyntheticEvent,
} from 'react';
import { cn } from '@/lib/cn';
import { mergeRefs } from '@/lib/mergeRefs';
import {
  helperErrorStyles,
  helperStyles,
  labelStyles,
  requiredStyles,
} from '@/components/shared/styles';
import { fieldStackStyles } from '@/components/shared/field.styles';
import type { InputOtpCharset, InputOtpProps } from './input-otp.types';
import {
  inputOtpCaretStyles,
  inputOtpControlStyles,
  inputOtpRowStyles,
  inputOtpSeparatorStyles,
  inputOtpSlot,
} from './input-otp.styles';

const CHARSET_NOISE: Record<InputOtpCharset, RegExp> = {
  numeric: /[^0-9]/g,
  alnum: /[^0-9a-zA-Z]/g,
};

function sanitize(raw: string, charset: InputOtpCharset, length: number) {
  return raw.replace(CHARSET_NOISE[charset], '').slice(0, length);
}

export const InputOtp = forwardRef<HTMLInputElement, InputOtpProps>(
  (
    {
      variant,
      size = 'md',
      charset = 'numeric',
      length = 6,
      groupSize = 3,
      value,
      defaultValue = '',
      onValueChange,
      onComplete,
      error,
      disabled,
      readOnly,
      label,
      description,
      errorMessage,
      required,
      id,
      className,
      onChange,
      onFocus,
      onBlur,
      onSelect,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? props.name ?? generatedId;

    const helperId =
      description || errorMessage ? `${inputId}-helper` : undefined;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [uncontrolledValue, setUncontrolledValue] = useState(() =>
      sanitize(defaultValue, charset, length),
    );
    const [focused, setFocused] = useState(false);
    const [caret, setCaret] = useState(0);

    const isError = error || !!errorMessage;
    const code = sanitize(value ?? uncontrolledValue, charset, length);
    const activeIndex = focused ? Math.min(caret, length - 1) : -1;
    const grouped =
      groupSize > 0 && length > groupSize && length % groupSize === 0;

    const landCaret = (input: HTMLInputElement) => {
      const end = input.value.length;

      input.setSelectionRange(end, end);
      setCaret(end);
    };

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
      if (disabled) return;

      event.preventDefault();
      inputRef.current?.focus();

      if (inputRef.current) landCaret(inputRef.current);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      const next = sanitize(input.value, charset, length);
      const nextCaret = Math.min(
        input.selectionStart ?? next.length,
        next.length,
      );

      input.value = next;
      input.setSelectionRange(nextCaret, nextCaret);
      setCaret(nextCaret);

      if (value === undefined) setUncontrolledValue(next);

      onChange?.(event);
      onValueChange?.(next);

      if (next.length === length) onComplete?.(next);
    };

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      landCaret(event.currentTarget);
      onFocus?.(event);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    };

    const handleSelect = (event: SyntheticEvent<HTMLInputElement>) => {
      setCaret(event.currentTarget.selectionStart ?? code.length);
      onSelect?.(event);
    };

    return (
      <div className={cn(fieldStackStyles, 'items-start')}>
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
          data-charset={charset}
          className={cn(inputOtpRowStyles, className)}
          onPointerDown={handlePointerDown}
        >
          <input
            ref={mergeRefs(inputRef, ref)}
            id={inputId}
            value={code}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            autoComplete='one-time-code'
            inputMode={charset === 'numeric' ? 'numeric' : 'text'}
            pattern={charset === 'numeric' ? '\\d*' : undefined}
            aria-label={
              ariaLabel ??
              (label
                ? undefined
                : `Verification code, ${length} ${
                    charset === 'numeric' ? 'digits' : 'characters'
                  }`)
            }
            aria-invalid={isError || undefined}
            aria-describedby={helperId}
            className={inputOtpControlStyles}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onSelect={handleSelect}
            {...props}
          />

          {Array.from({ length }, (_, index) => {
            const char = code[index] ?? '';
            const isActive = index === activeIndex;
            const showCaret = isActive && !char && !disabled && !readOnly;

            return (
              <Fragment key={index}>
                {grouped && index > 0 && index % groupSize === 0 && (
                  <span
                    aria-hidden='true'
                    className={inputOtpSeparatorStyles}
                  />
                )}
                <div
                  aria-hidden='true'
                  data-filled={char ? '' : undefined}
                  data-focused={isActive || undefined}
                  data-invalid={isError || undefined}
                  data-disabled={disabled || undefined}
                  data-readonly={readOnly || undefined}
                  data-interactive={!disabled && !readOnly ? '' : undefined}
                  className={cn(
                    inputOtpSlot({
                      variant,
                      size,
                      charset,
                      focused: isActive,
                      invalid: isError,
                      disabled,
                      readOnly,
                      dimmed: !char,
                    }),
                  )}
                >
                  {char}

                  {showCaret && <span className={inputOtpCaretStyles} />}
                </div>
              </Fragment>
            );
          })}
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
