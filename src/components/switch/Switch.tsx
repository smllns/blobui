import { forwardRef, useState } from 'react';
import { cn } from '../../lib/cn';
import { switchStyles, switchThumbStyles } from './switch.styles';
import type { SwitchProps } from './switch.types';
import { labelSizeMap } from '../styles';

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
      variant,
      size = 'md',
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = useState(defaultChecked ?? false);
    const safeSize = size ?? 'md';
    const isChecked = checked ?? internal;

    const handleToggle = () => {
      if (disabled) return;

      const next = !isChecked;

      if (checked === undefined) {
        setInternal(next);
      }

      onChange?.(next);
    };

    return (
      <div className='flex items-center flex-col gap-2'>
        <div className='flex h-6 flex-row gap-2 items-center '>
          <button
            ref={ref}
            type='button'
            role='switch'
            aria-checked={isChecked}
            data-state={isChecked ? 'checked' : 'unchecked'}
            disabled={disabled}
            onClick={handleToggle}
            className={cn(
              switchStyles({ variant, size, error: error || !!errorMessage }),
              className,
            )}
            {...props}
          >
            <span
              data-state={isChecked ? 'checked' : 'unchecked'}
              className={cn(switchThumbStyles({ size }))}
            />
          </button>
          {label && (
            <span className={cn('text-neutral-900 ', labelSizeMap[safeSize])}>
              {label}
            </span>
          )}{' '}
        </div>

        {(description || errorMessage) && (
          <span
            className={cn(
              'text-xs',
              errorMessage ? 'text-red-500' : 'text-neutral-500',
            )}
          >
            {errorMessage ?? description}
          </span>
        )}
      </div>
    );
  },
);
