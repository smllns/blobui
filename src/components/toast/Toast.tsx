import { forwardRef, useEffect, useRef } from 'react';

import { cn } from '../../lib/cn';
import { Button } from '../button';

import { toastStyles, toastIconStyles } from './toast.styles';
import type { ToastProps } from './toast.types';
import { animateToastIn, animateToastOut } from './toast.animation';

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

    const setRefs = (node: HTMLDivElement | null) => {
      localRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.RefObject<HTMLDivElement | null>).current = node;
      }
    };

    useEffect(() => {
      if (!localRef.current) return;

      animateToastIn(localRef.current);
    }, []);

    useEffect(() => {
      const element = localRef.current;

      if (!closing || !element) return;

      animateToastOut(element, () => {
        onClose?.();
      });
    }, [closing, onClose]);

    const handleClose = () => {
      const element = localRef.current;

      if (!element) {
        onClose?.();
        return;
      }

      animateToastOut(element, () => {
        onClose?.();
      });
    };

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
          <Button onClick={handleClose} size='xs' variant='outline'>
            ✕
          </Button>
        )}
      </div>
    );
  },
);

Toast.displayName = 'Toast';
