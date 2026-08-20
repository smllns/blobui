import type {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  ReactNode,
} from 'react';
import type { ButtonProps } from '@/components/button/button.types';
import type { ForceState } from '@/components/shared/types';

export type PaginationSize = 'sm' | 'md';

export type PaginationForceTarget = number | 'previous' | 'next';

export type PaginationPlacement = 'start' | 'end' | 'none';

export interface PaginationRangeInfo {
  from: number;
  to: number;
  total: number;
  page: number;
  pageCount: number;
}

export type PaginationFormatRange = (range: PaginationRangeInfo) => ReactNode;

export interface PaginationContextValue extends PaginationRangeInfo {
  pageSize: number;
  size: PaginationSize;
  siblingCount: number;
  boundaryCount: number;
  pageSizeOptions?: number[];
  pageSizeLabel: ReactNode;
  previousLabel: ReactNode;
  nextLabel: ReactNode;
  pageLabel: (page: number) => string;
  formatRange: PaginationFormatRange;
  goTo: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  force: (target: PaginationForceTarget) => ForceState | undefined;
}

export interface PaginationProps extends Omit<
  ComponentPropsWithoutRef<'nav'>,
  'onChange'
> {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  children?: ReactNode;
  label?: string;
  size?: PaginationSize;
  showRange?: boolean;
  rangePlacement?: PaginationPlacement;
  formatRange?: PaginationFormatRange;
  showPages?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
  pageLabel?: (page: number) => string;
  previousLabel?: ReactNode;
  nextLabel?: ReactNode;
  pageSizeOptions?: number[];
  pageSizePlacement?: PaginationPlacement;
  onPageSizeChange?: (pageSize: number) => void;
  pageSizeLabel?: ReactNode;
  forceState?: ForceState;
  forceTarget?: PaginationForceTarget;
}

export interface PaginationRangeProps extends HTMLAttributes<HTMLParagraphElement> {
  formatRange?: PaginationFormatRange;
}

export interface PaginationPageSizeProps extends HTMLAttributes<HTMLDivElement> {
  options?: number[];
  label?: ReactNode;
  onPageSizeChange?: (pageSize: number) => void;
}

export type PaginationPrevNextProps = Omit<ButtonProps, 'children'> & {
  children?: ReactNode;
};

export interface PaginationPagesProps extends HTMLAttributes<HTMLDivElement> {
  siblingCount?: number;
  boundaryCount?: number;
  pageLabel?: (page: number) => string;
}
