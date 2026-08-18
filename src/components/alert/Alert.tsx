import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import {
  alertActionsStyles,
  alertBodyStyles,
  alertCloseStyles,
  alertIconStyles,
  alertStyles,
  alertTextStyles,
  alertTitleStyles,
} from './alert.styles';
import type { AlertProps, AlertTone } from './alert.types';

import { mergeRefs } from '@/lib/mergeRefs';
import { Close } from '@/ui/icons/Close';
import { Info } from '@/ui/icons/Info';
import { CheckCircle } from '@/ui/icons/CheckCircle';
import { AlertTriangle } from '@/ui/icons/AlertTriangle';
import { CloseCircle } from '@/ui/icons/CloseCircle';
import { Button } from '@/components/button/Button';

const defaultAlertIcons: Record<AlertTone, ReactNode> = {
  neutral: <Info />,
  info: <Info />,
  success: <CheckCircle />,
  warning: <AlertTriangle />,
  danger: <CloseCircle />,
};

const liveByTone: Record<AlertTone, 'assertive' | 'polite'> = {
  neutral: 'polite',
  info: 'polite',
  success: 'polite',
  warning: 'assertive',
  danger: 'assertive',
};

const EXIT_MS = 140;

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      tone,
      emphasis,
      title,
      icon,
      actions,
      announce = 'off',
      focusOnMount,
      onDismiss,
      dismissLabel = 'Dismiss',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const localRef = useRef<HTMLDivElement | null>(null);
    const timerRef = useRef<number | undefined>(undefined);
    const [closing, setClosing] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    const setRefs = mergeRefs(localRef, ref);

    useEffect(() => {
      if (focusOnMount) localRef.current?.focus();
    }, [focusOnMount]);

    useEffect(() => () => window.clearTimeout(timerRef.current), []);

    const closeAlert = useCallback(() => {
      if (closing) return;

      setClosing(true);

      timerRef.current = window.setTimeout(() => {
        setDismissed(true);
        onDismiss?.();
      }, EXIT_MS);
    }, [closing, onDismiss]);

    if (dismissed) return null;

    const alertTone = tone ?? 'neutral';
    const alertIcon = icon !== undefined ? icon : defaultAlertIcons[alertTone];

    const live =
      announce === 'off'
        ? undefined
        : announce === 'auto'
          ? liveByTone[alertTone]
          : announce;

    return (
      <div
        ref={setRefs}
        role={live && (live === 'assertive' ? 'alert' : 'status')}
        aria-live={live}
        aria-atomic={live ? true : undefined}
        tabIndex={focusOnMount ? -1 : undefined}
        data-state={closing ? 'closed' : 'open'}
        className={cn(alertStyles({ tone, emphasis }), className)}
        {...props}
      >
        {alertIcon && <span className={alertIconStyles}>{alertIcon}</span>}

        <div className={alertBodyStyles}>
          {title && <p className={alertTitleStyles}>{title}</p>}

          {children && (
            <p className={cn(alertTextStyles, title ? 'mt-1' : undefined)}>
              {children}
            </p>
          )}

          {actions && <div className={alertActionsStyles}>{actions}</div>}
        </div>

        {onDismiss && (
          <Button
            variant='ghost'
            size='xs'
            iconOnly
            className={alertCloseStyles}
            aria-label={dismissLabel}
            onClick={closeAlert}
          >
            <Close size='sm' />
          </Button>
        )}
      </div>
    );
  },
);
