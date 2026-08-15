import { forwardRef } from 'react';
import type { MouseEvent } from 'react';
import type { ButtonProps } from './button.types';
import { buttonStyles, buttonLabelStyles } from './button.styles';
import { cn } from '@/lib/cn';
import { Spinner } from '@/ui/icons/Spinner';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size,
      fullWidth,
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
    const lead = loading ? <Spinner /> : leftIcon;
    const isBusy = Boolean(loading) && !disabled;
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        {...props}
        aria-disabled={isBusy || undefined}
        aria-busy={loading || undefined}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          if (isBusy) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }

          onClick?.(event);
        }}
        data-variant={variant}
        data-force={forceState}
        data-loading={loading || undefined}
        data-icon-only={iconOnly || undefined}
        data-lead={!iconOnly && lead ? '' : undefined}
        data-trail={!iconOnly && rightIcon ? '' : undefined}
        className={cn(
          buttonStyles({
            variant,
            size,
            fullWidth,
            state: disabled ? 'disabled' : isBusy ? 'loading' : 'idle',
          }),
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
