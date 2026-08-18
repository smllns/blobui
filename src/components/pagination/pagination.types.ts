import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type PaginationSize = 'sm' | 'md';

export type PaginationForceTarget = number | 'previous' | 'next';

export interface PaginationRange {
  from: number;
  to: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface PaginationProps extends Omit<
  ComponentPropsWithoutRef<'nav'>,
  'children' | 'onChange'
> {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  label?: string;
  size?: PaginationSize;
  showRange?: boolean;
  formatRange?: (range: PaginationRange) => ReactNode;
  showPages?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
  pageLabel?: (page: number) => string;
  previousLabel?: string;
  nextLabel?: string;
  pageSizeOptions?: number[];
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeLabel?: string;
  forceState?: 'hover' | 'active' | 'focus';
  forceTarget?: PaginationForceTarget;
}
