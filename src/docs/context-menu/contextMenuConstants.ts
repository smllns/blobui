import type { BasicSize } from '@/components/shared/types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type ContextMenuPlaygroundState = {
  size: BasicSize;
  checkable: boolean;
  disabled: boolean;
};

export const CONTEXT_MENU_INITIAL_STATE: ContextMenuPlaygroundState = {
  size: 'md',
  checkable: false,
  disabled: false,
};

export const CONTEXT_MENU_CONTROLS = [
  selectControl<ContextMenuPlaygroundState>('size', 'Size', [
    'sm',
    'md',
    'lg',
  ]),
  checkboxControl<ContextMenuPlaygroundState>('checkable', 'Checkable'),
  checkboxControl<ContextMenuPlaygroundState>('disabled', 'Disabled'),
];
