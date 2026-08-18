import { forwardRef, useId, useState } from 'react';
import { cn } from '@/lib/cn';
import {
  switchLabelStyles,
  switchRowStyles,
  switchStyles,
  switchThumbStyles,
} from './switch.styles';
import { helperErrorStyles, helperStyles } from '@/components/shared/styles';
import type { SwitchProps } from './switch.types';

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked,
      onChange,
      label,
      description,
      error,
      errorMessage,
      size = 'md',
      disabled,
      forceState,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = useState(defaultChecked ?? false);
    const isChecked = checked ?? internal;
    const isError = error || !!errorMessage;

    const generatedId = useId();
    const switchId = id ?? generatedId;

    const state = isChecked ? 'checked' : 'unchecked';

    const handleToggle = () => {
      if (disabled) return;

      const next = !isChecked;

      if (checked === undefined) {
        setInternal(next);
      }

      onChange?.(next);
    };

    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        <div className={switchRowStyles}>
          <button
            ref={ref}
            id={switchId}
            type='button'
            role='switch'
            aria-checked={isChecked}
            aria-invalid={isError || undefined}
            aria-labelledby={label ? `${switchId}-label` : undefined}
            aria-describedby={
              description || errorMessage ? `${switchId}-helper` : undefined
            }
            data-state={state}
            data-force={forceState}
            disabled={disabled}
            onClick={handleToggle}
            className={cn(switchStyles({ size, error: isError }))}
            {...props}
          >
            <span data-state={state} className={cn(switchThumbStyles)} />
          </button>

          <div className='flex flex-col'>
            {label && (
              <span
                id={`${switchId}-label`}
                onClick={handleToggle}
                className={switchLabelStyles({ disabled })}
              >
                {label}
              </span>
            )}

            {(description || errorMessage) && (
              <p
                id={`${switchId}-helper`}
                className={cn(errorMessage ? helperErrorStyles : helperStyles)}
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
