import type { ButtonProps } from './button.types';
import { buttonStyles } from './button.styles';
import { cn } from '@/lib/cn';
import { Spinner } from '../../ui/Spinner';

export function Button({
  children,
  variant,
  size,
  fullWidth,
  loading,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <button
      disabled={isDisabled}
      className={cn(
        buttonStyles({
          variant,
          size,
          fullWidth,
          state: isDisabled ? (loading ? 'loading' : 'disabled') : 'idle',
        }),
        'inline-flex items-center gap-2',
        className,
      )}
      {...props}
    >
      {loading ? (
        <span className='flex items-center gap-2'>
          <Spinner />
          Loading
        </span>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
