import type {
  PaginationPlacement,
  PaginationSize,
} from '@/components/pagination/pagination.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type PaginationSiblings = '0' | '1' | '2';

export type PaginationPlaygroundState = {
  size: PaginationSize;
  siblings: PaginationSiblings;
  rangePlacement: PaginationPlacement;
  pageSizePlacement: PaginationPlacement;
  showPages: boolean;
};

export const PAGINATION_SIZE_OPTIONS: PaginationSize[] = ['sm', 'md'];

export const PAGINATION_SIBLING_OPTIONS: PaginationSiblings[] = ['0', '1', '2'];

export const PAGINATION_PLACEMENT_OPTIONS: PaginationPlacement[] = [
  'start',
  'end',
  'none',
];

export const PAGINATION_TOTAL = 348;
export const PAGINATION_PAGE_SIZE = 20;
export const PAGINATION_PAGE_SIZE_OPTIONS = [10, 20, 50];

export const PAGINATION_INITIAL_STATE: PaginationPlaygroundState = {
  size: 'sm',
  siblings: '1',
  rangePlacement: 'start',
  pageSizePlacement: 'start',
  showPages: true,
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
  selectControl<PaginationPlaygroundState>(
    'rangePlacement',
    'Range',
    PAGINATION_PLACEMENT_OPTIONS,
  ),
  selectControl<PaginationPlaygroundState>(
    'pageSizePlacement',
    'Rows per page',
    PAGINATION_PLACEMENT_OPTIONS,
  ),
  checkboxControl<PaginationPlaygroundState>('showPages', 'Page numbers'),
];
