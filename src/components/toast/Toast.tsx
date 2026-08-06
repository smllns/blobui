import { forwardRef, useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';
import { toastStyles, toastIconStyles } from './toast.styles';
import type { ToastProps } from './toast.types';
import { animateToastIn, animateToastOut } from './toast.animation';
import { Button } from '../button/Button';
import { mergeRefs } from '@/lib/mergeRefs';

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant,
      size,
      title,
      description,
      icon,
      action,
      className,
      closing,
      onClose,
    },
    ref,
  ) => {
    const localRef = useRef<HTMLDivElement | null>(null);

    const setRefs = mergeRefs(localRef, ref);

    useEffect(() => {
      if (!localRef.current) return;

      animateToastIn(localRef.current);
    }, []);

    const closeToast = useCallback(() => {
      const element = localRef.current;

      if (!element) {
        onClose?.();
        return;
      }

      animateToastOut(element, () => {
        onClose?.();
      });
    }, [onClose]);

    useEffect(() => {
      if (closing) {
        closeToast();
      }
    }, [closing, closeToast]);

    return (
      <div
        ref={setRefs}
        role='status'
        data-state='open'
        className={cn(toastStyles({ variant, size }), className)}
      >
        {icon && <div className={cn(toastIconStyles({ variant }))}>{icon}</div>}

        <div className='flex flex-col gap-0.5 flex-1'>
          <div className='font-medium leading-tight'>{title}</div>

          {description && (
            <div className='text-xs opacity-80'>{description}</div>
          )}
        </div>

        {action && <div className='ml-auto flex items-center'>{action}</div>}

        {onClose && (
          <Button onClick={closeToast} size='xs' variant='outline'>
            ✕
          </Button>
        )}
      </div>
    );
  },
);
