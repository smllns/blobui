import { createStrictContext } from '@/lib/createContext';
import type { BasicSize } from '@/components/shared/types';

export type ContextMenuContextValue = {
  size: BasicSize;
  checkable: boolean;
};

export const [ContextMenuContext, useContextMenuContext] =
  createStrictContext<ContextMenuContextValue>('ContextMenu');
