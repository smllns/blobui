import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from 'react';
import type { ForceState } from '@/components/shared/types';

export interface BreadcrumbItem {
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
  forceState?: ForceState;
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
  ellipsisForceState?: ForceState;
}
