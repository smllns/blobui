import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from 'react';

export type BreadcrumbForceState = 'hover' | 'active' | 'focus';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
  forceState?: BreadcrumbForceState;
}

export interface BreadcrumbProps extends Omit<
  ComponentPropsWithoutRef<'nav'>,
  'children'
> {
  items: BreadcrumbItem[];
  label?: string;
  separator?: ReactNode;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  ellipsisLabel?: string;
  renderEllipsis?: (hidden: BreadcrumbItem[]) => ReactNode;
  ellipsisForceState?: BreadcrumbForceState;
}
