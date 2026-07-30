import type { ToastProps } from '../../components/toast/toast.types';
import type { BasicSize } from '../../components/types';
import { BASIC_SIZE_OPTIONS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type ToastPlaygroundState = {
  variant: NonNullable<ToastProps['variant']>;
  size: BasicSize;
  title: string;
  description: boolean;
  icon: boolean;
  action: boolean;
  showClose: boolean;
};

export const TOAST_INITIAL_STATE: ToastPlaygroundState = {
  variant: 'default',
  size: 'md',
  title: 'Notification title',
  description: true,
  icon: true,
  action: false,
  showClose: true,
};

export const TOAST_CONTROLS = [
  selectControl<ToastPlaygroundState>('variant', 'Variant', [
    'default',
    'success',
    'warning',
    'destructive',
    'info',
  ]),
  selectControl<ToastPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  checkboxControl<ToastPlaygroundState>('description', 'Description'),
  checkboxControl<ToastPlaygroundState>('icon', 'Show Icon'),
  checkboxControl<ToastPlaygroundState>('action', 'Show Action Button'),
  checkboxControl<ToastPlaygroundState>('showClose', 'Show Close Button'),
];
