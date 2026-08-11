import { forwardRef, useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';
import {
  toastContentStyles,
  toastDescriptionStyles,
  toastIconStyles,
  toastStyles,
  toastTitleStyles,
} from './toast.styles';
import type { ToastProps } from './toast.types';
import { animateToastIn, animateToastOut } from './toast.animation';

import { mergeRefs } from '@/lib/mergeRefs';
import { Close } from '@/ui/icons/Close';
import { Info } from '@/ui/icons/Info';
import { CheckCircle } from '@/ui/icons/CheckCircle';
import { AlertTriangle } from '@/ui/icons/AlertTriangle';
import { CloseCircle } from '@/ui/icons/CloseCircle';
import { Button } from '../button/Button';

const defaultToastIcons = {
  neutral: <Info />,
  success: <CheckCircle />,
  warning: <AlertTriangle />,
  danger: <CloseCircle />,
  info: <Info />,
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      tone,
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

    const toastIcon =
      icon !== undefined ? icon : defaultToastIcons[tone ?? 'neutral'];

    return (
      <div
        ref={setRefs}
        role='status'
        data-state='open'
        className={cn(toastStyles({ size }), className)}
      >
        {toastIcon && (
          <div className={toastIconStyles({ tone })}>{toastIcon}</div>
        )}

        <div className={toastContentStyles}>
          <p className={toastTitleStyles}>{title}</p>

          {description && (
            <p className={toastDescriptionStyles}>{description}</p>
          )}
        </div>

        {action && <div className='ms-auto flex items-center'>{action}</div>}

        {onClose && (
          <Button
            variant='ghost'
            className='font-extrabold ms-2 shrink-0'
            aria-label='Dismiss'
            onClick={closeToast}
          >
            <Close size='sm' />
          </Button>
        )}
      </div>
    );
  },
);
