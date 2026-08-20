import { createStrictContext } from '@/lib/createContext';
import type { PaginationContextValue } from './pagination.types';

export const [PaginationContext, usePagination] =
  createStrictContext<PaginationContextValue>('Pagination');
