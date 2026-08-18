import { forwardRef, useState } from 'react';
import type { MouseEvent } from 'react';
import type { ToggleProps } from './toggle.types';
import { toggleStyles } from './toggle.styles';
import {
  buttonLabelStyles,
  buttonStyles,
} from '@/components/button/button.styles';
import { cn } from '@/lib/cn';
import { Spinner } from '@/ui/icons/Spinner';

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      children,
      variant = 'default',
      size = 'md',
      pressed,
      defaultPressed,
      onPressedChange,
      loading,
      leftIcon,
      rightIcon,
      iconOnly,
      forceState,
      className,
      disabled,
      onClick,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = useState(defaultPressed ?? false);
    const isPressed = pressed ?? internal;
    const isBusy = Boolean(loading) && !disabled;
    const lead = loading ? <Spinner /> : leftIcon;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        {...props}
        aria-pressed={isPressed}
        aria-disabled={isBusy || undefined}
        aria-busy={loading || undefined}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          if (isBusy) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }

          onClick?.(event);
          if (event.defaultPrevented) return;

          const next = !isPressed;

          if (pressed === undefined) {
            setInternal(next);
          }

          onPressedChange?.(next);
        }}
        data-state={isPressed ? 'on' : 'off'}
        data-variant={variant}
        data-force={forceState}
        data-loading={loading || undefined}
        data-icon-only={iconOnly || undefined}
        data-lead={!iconOnly && lead ? '' : undefined}
        data-trail={!iconOnly && rightIcon ? '' : undefined}
        className={cn(
          buttonStyles({
            variant: 'ghost',
            size,
            state: disabled ? 'disabled' : isBusy ? 'loading' : 'idle',
          }),
          toggleStyles({ variant }),
          className,
        )}
      >
        {lead}

        {!iconOnly && (
          <span
            data-loading={loading || undefined}
            className={buttonLabelStyles}
          >
            {children}
          </span>
        )}

        {iconOnly && !loading && children}

        {!iconOnly && rightIcon}
      </button>
    );
  },
);
