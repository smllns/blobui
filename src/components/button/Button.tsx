import { forwardRef } from 'react';
import type { ButtonProps } from './button.types';
import { buttonStyles, buttonLabelStyles } from './button.styles';
import { cn } from '@/lib/cn';
import { Spinner } from '@/ui/icons/Spinner';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      fullWidth,
      loading,
      leftIcon,
      rightIcon,
      iconOnly,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const lead = loading ? <Spinner /> : leftIcon;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        data-loading={loading || undefined}
        data-icon-only={iconOnly || undefined}
        data-lead={!iconOnly && lead ? '' : undefined}
        data-trail={!iconOnly && rightIcon ? '' : undefined}
        className={cn(
          buttonStyles({
            variant,
            size,
            fullWidth,
            state: isDisabled ? (loading ? 'loading' : 'disabled') : 'idle',
          }),
          className,
        )}
        {...props}
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

        {iconOnly && children}

        {!iconOnly && rightIcon}
      </button>
    );
  },
);
