import type { ToastProps } from '../../components/toast/toast.types';
import type { BasicSize } from '../../components/shared/types';
import { BASIC_SIZE_OPTIONS, TOAST_TONES } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type ToastPlaygroundState = {
  tone: NonNullable<ToastProps['tone']>;
  size: BasicSize;
  title: string;
  description: boolean;
  icon: boolean;
  action: boolean;
  showClose: boolean;
};

export const TOAST_INITIAL_STATE: ToastPlaygroundState = {
  tone: 'neutral',
  size: 'md',
  title: 'Notification title',
  description: true,
  icon: true,
  action: false,
  showClose: true,
};

export const TOAST_CONTROLS = [
  selectControl<ToastPlaygroundState>('tone', 'Tone', TOAST_TONES),
  selectControl<ToastPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  checkboxControl<ToastPlaygroundState>('description', 'Description'),
  checkboxControl<ToastPlaygroundState>('icon', 'Show Icon'),
  checkboxControl<ToastPlaygroundState>('action', 'Show Action Button'),
  checkboxControl<ToastPlaygroundState>('showClose', 'Show Close Button'),
];
