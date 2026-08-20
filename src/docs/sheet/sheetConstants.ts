import type { SheetContentProps } from '@/components/sheet/sheet.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';
import type { Side } from '@/components/shared/types';

export type SheetPlaygroundState = {
  side: Side;
  size: NonNullable<SheetContentProps['size']>;
  showCloseButton: boolean;
  loading: boolean;
};

export const SHEET_INITIAL_STATE: SheetPlaygroundState = {
  side: 'right',
  size: 'md',
  showCloseButton: true,
  loading: false,
};

export const SHEET_CONTROLS = [
  selectControl<SheetPlaygroundState>('side', 'Side', [
    'right',
    'left',
    'bottom',
    'top',
  ]),
  selectControl<SheetPlaygroundState>('size', 'Size', [
    'sm',
    'md',
    'lg',
    'full',
  ]),
  checkboxControl<SheetPlaygroundState>('showCloseButton', 'Close Button'),
  checkboxControl<SheetPlaygroundState>('loading', 'Loading'),
];
