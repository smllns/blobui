import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { alertStyles } from './alert.styles';

export type AlertTone = NonNullable<VariantProps<typeof alertStyles>['tone']>;

export type AlertAnnounce = 'off' | 'auto' | 'polite' | 'assertive';

export interface AlertProps
  extends
    Omit<ComponentPropsWithoutRef<'div'>, 'title'>,
    VariantProps<typeof alertStyles> {
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  announce?: AlertAnnounce;
  focusOnMount?: boolean;
  onDismiss?: () => void;
  dismissLabel?: string;
}
