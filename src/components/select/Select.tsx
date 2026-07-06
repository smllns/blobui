import type { SelectProps } from './select.types';
import { selectStyles, selectWrapperStyles } from './select.styles';
import { cn } from '../../lib/cn';
import { ChevronDown } from '../../ui/ChevronDown';

export function Select({
  variant,
  size,
  fullWidth,
  error,
  disabled,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <div
      className={cn(
        selectWrapperStyles({
          variant,
          size,
          fullWidth,
          error,
          disabled,
        }),
      )}
    >
      {leftIcon}

      <select
        disabled={disabled}
        className={cn(selectStyles(), className)}
        {...props}
      >
        {children}
      </select>

      {rightIcon ?? <ChevronDown />}
    </div>
  );
}
