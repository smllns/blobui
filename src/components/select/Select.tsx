import { useState } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import type { SelectProps } from './select.types';
import {
  selectCaretStyles,
  selectContentStyles,
  selectTrigger,
  selectViewportStyles,
} from './select.styles';
import {
  helperErrorStyles,
  helperStyles,
  labelStyles,
  requiredStyles,
} from '../shared/styles';
import { cn } from '@/lib/cn';
import { animateSelectEnter, animateSelectExit } from './select.animation';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';
import {
  fieldInsideLabelStyles,
  fieldStackStyles,
} from '../shared/field.styles';
import { ChevronDown } from '@/ui/icons/ChevronDown';

export function Select({
  children,
  variant = 'default',
  size = 'md',
  width = 'md',
  labelPlacement = 'above',
  label,
  description,
  errorMessage,
  required,
  error,
  disabled,
  placeholder,
  className,
  ...props
}: SelectProps) {
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateSelectEnter,
      animateExit: animateSelectExit,
    });

  const isError = error || !!errorMessage;
  const isInfield = labelPlacement === 'infield' && !!label;

  const [internalValue, setInternalValue] = useState(props.defaultValue ?? '');
  const value = props.value ?? internalValue;
  const filled = !!value;

  return (
    <div className={cn(fieldStackStyles, width === 'full' && 'w-full')}>
      {label && !isInfield && (
        <label className={labelStyles}>
          {label}
          {required && (
            <span aria-hidden='true' className={requiredStyles}>
              *
            </span>
          )}
        </label>
      )}

      <SelectPrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        disabled={disabled}
        {...props}
        onValueChange={(next) => {
          setInternalValue(next);
          props.onValueChange?.(next);
        }}
      >
        <SelectPrimitive.Trigger
          aria-invalid={isError || undefined}
          data-focused={open || undefined}
          data-filled={filled || undefined}
          data-invalid={isError || undefined}
          data-disabled={disabled || undefined}
          data-interactive={!disabled ? '' : undefined}
          className={cn(
            selectTrigger({
              variant,
              size: isInfield ? 'xl' : size,
              width,
              invalid: isError,
              disabled,
            }),
            className,
          )}
        >
          {isInfield && (
            <span className={fieldInsideLabelStyles}>
              {label}
              {required && (
                <span aria-hidden='true' className={requiredStyles}>
                  *
                </span>
              )}
            </span>
          )}
          <span
            className={cn(
              'min-w-0 truncate',
              isInfield && 'mt-2 leading-(--leading-body-lg)',
              isInfield &&
                'motion-safe:transition-opacity motion-safe:duration-(--field-label-duration)',
              isInfield && !filled && !open && 'opacity-0',
            )}
          >
            <SelectPrimitive.Value placeholder={isInfield ? '' : placeholder} />
          </span>

          <SelectPrimitive.Icon asChild>
            <ChevronDown className={selectCaretStyles} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            ref={setContentRef}
            position='popper'
            sideOffset={6}
            className={selectContentStyles}
          >
            <SelectPrimitive.Viewport className={selectViewportStyles}>
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      {(description || errorMessage) && (
        <p className={errorMessage ? helperErrorStyles : helperStyles}>
          {errorMessage ?? description}
        </p>
      )}
    </div>
  );
}
