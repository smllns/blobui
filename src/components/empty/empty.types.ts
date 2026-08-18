import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { emptyStyles } from './empty.styles';

export type EmptyState = NonNullable<VariantProps<typeof emptyStyles>['state']>;

export interface EmptyProps
  extends
    Omit<ComponentPropsWithoutRef<'div'>, 'title'>,
    VariantProps<typeof emptyStyles> {
  title: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
}
