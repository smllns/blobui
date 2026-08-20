import { useEffect, useId, useRef, useState } from 'react';
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
} from '@/components/shared/styles';
import { cn } from '@/lib/cn';
import { animateSelectEnter, animateSelectExit } from './select.animation';
import { useAnimatedOpen } from '@/hooks/useAnimatedOpen';
import {
  fieldInsideLabelStyles,
  fieldStackStyles,
} from '@/components/shared/field.styles';
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
  forceState,
  id,
  open: openProp,
  onOpenChange,
  onValueChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}: SelectProps) {
  const autoId = useId();
  const triggerId = id ?? autoId;
  const labelId = `${triggerId}-label`;
  const helperId = `${triggerId}-helper`;
  const { open, setContentRef, handleOpenChange } =
    useAnimatedOpen<HTMLDivElement>({
      animateEnter: animateSelectEnter,
      animateExit: animateSelectExit,
    });

  const controlled = openProp !== undefined;

  const syncedOpen = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    if (openProp === undefined || openProp === syncedOpen.current) return;

    syncedOpen.current = openProp;
    handleOpenChange(openProp);
  }, [openProp, handleOpenChange]);

  const isError = error || !!errorMessage;
  const isInfield = labelPlacement === 'infield' && !!label;

  const [internalValue, setInternalValue] = useState(props.defaultValue ?? '');
  const value = props.value ?? internalValue;
  const filled = !!value;

  return (
    <div className={cn(fieldStackStyles, width === 'full' && 'w-full')}>
      {label && !isInfield && (
        <label id={labelId} className={labelStyles}>
          {label}
          {required && (
            <span aria-hidden='true' className={requiredStyles}>
              *
            </span>
          )}
        </label>
      )}

      <SelectPrimitive.Root
        {...props}
        open={open}
        onOpenChange={(next) => {
          if (!controlled) handleOpenChange(next);

          onOpenChange?.(next);
        }}
        disabled={disabled}
        onValueChange={(next) => {
          setInternalValue(next);
          onValueChange?.(next);
        }}
      >
        <SelectPrimitive.Trigger
          id={triggerId}
          aria-label={ariaLabel}
          aria-labelledby={
            ariaLabelledBy ?? (label && !isInfield ? labelId : undefined)
          }
          aria-describedby={
            ariaDescribedBy ??
            (description || errorMessage ? helperId : undefined)
          }
          aria-required={required || undefined}
          aria-invalid={isError || undefined}
          data-focused={open || undefined}
          data-filled={filled || undefined}
          data-invalid={isError || undefined}
          data-disabled={disabled || undefined}
          data-interactive={!disabled ? '' : undefined}
          data-force={forceState}
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
        <p
          id={helperId}
          className={errorMessage ? helperErrorStyles : helperStyles}
        >
          {errorMessage ?? description}
        </p>
      )}
    </div>
  );
}
