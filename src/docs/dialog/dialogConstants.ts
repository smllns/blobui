import type { DialogContentProps } from '../../components/dialog/dialog.types';
import type { CommonStylingVariant } from '../../components/shared/types';
import { COMMON_VARIANTS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type DialogPlaygroundState = {
  size: NonNullable<DialogContentProps['size']>;
  variant: CommonStylingVariant;
  overlay: NonNullable<DialogContentProps['overlay']>;
  padding: NonNullable<DialogContentProps['padding']>;
  showCloseButton: boolean;
};

export const DIALOG_INITIAL_STATE: DialogPlaygroundState = {
  size: 'md',
  variant: 'default',
  overlay: 'dark',
  padding: 'md',
  showCloseButton: true,
};

export const DIALOG_CONTROLS = [
  selectControl<DialogPlaygroundState>('size', 'Size', [
    'sm',
    'md',
    'lg',
    'xl',
    'full',
  ]),
  selectControl<DialogPlaygroundState>('variant', 'Variant', COMMON_VARIANTS),
  selectControl<DialogPlaygroundState>('overlay', 'Overlay', ['dark', 'light']),
  selectControl<DialogPlaygroundState>('padding', 'Padding', [
    'none',
    'sm',
    'md',
    'lg',
  ]),
  checkboxControl<DialogPlaygroundState>('showCloseButton', 'Close Button'),
];
