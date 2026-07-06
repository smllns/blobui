import { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../lib/cn';
import { toastStyles, toastIconStyles } from './toast.styles';
import type { ToastProps } from './toast.types';
import { Button } from '../button';
import { gsap } from 'gsap';

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    { variant, size, title, description, icon, action, className, onClose },
    ref,
  ) => {
    const localRef = useRef<HTMLDivElement>(null);

    const setRefs = (node: HTMLDivElement | null) => {
      localRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    // ENTER animation
    useEffect(() => {
      if (!localRef.current) return;

      gsap.fromTo(
        localRef.current,
        {
          opacity: 0,
          y: 16,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.25,
          ease: 'power2.out',
        },
      );
    }, []);

    const handleClose = () => {
      if (!localRef.current) {
        onClose?.();
        return;
      }
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
