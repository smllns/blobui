import type { PaginationSize } from '@/components/pagination/pagination.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type PaginationSiblings = '0' | '1' | '2';

export type PaginationPlaygroundState = {
  size: PaginationSize;
  siblings: PaginationSiblings;
  showRange: boolean;
  showPages: boolean;
  pageSizeSelect: boolean;
};

export const PAGINATION_SIZE_OPTIONS: PaginationSize[] = ['sm', 'md'];

export const PAGINATION_SIBLING_OPTIONS: PaginationSiblings[] = ['0', '1', '2'];

export const PAGINATION_TOTAL = 348;
export const PAGINATION_PAGE_SIZE = 20;
export const PAGINATION_PAGE_SIZE_OPTIONS = [10, 20, 50];

export const PAGINATION_INITIAL_STATE: PaginationPlaygroundState = {
  size: 'sm',
  siblings: '1',
  showRange: true,
  showPages: true,
  pageSizeSelect: true,
};

export const PAGINATION_CONTROLS = [
  selectControl<PaginationPlaygroundState>(
    'size',
    'Size',
    PAGINATION_SIZE_OPTIONS,
  ),
  selectControl<PaginationPlaygroundState>(
    'siblings',
    'Sibling count',
    PAGINATION_SIBLING_OPTIONS,
  ),
  checkboxControl<PaginationPlaygroundState>('showRange', 'Range'),
  checkboxControl<PaginationPlaygroundState>('showPages', 'Page numbers'),
  checkboxControl<PaginationPlaygroundState>('pageSizeSelect', 'Rows per page'),
];
