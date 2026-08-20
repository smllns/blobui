import type { AlertDialogTone } from '@/components/alert-dialog/alert-dialog.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type AlertDialogPlaygroundState = {
  tone: AlertDialogTone;
  loading: boolean;
};

export const ALERT_DIALOG_INITIAL_STATE: AlertDialogPlaygroundState = {
  tone: 'danger',
  loading: false,
};

export const ALERT_DIALOG_CONTROLS = [
  selectControl<AlertDialogPlaygroundState>('tone', 'Tone', [
    'danger',
    'warning',
    'info',
  ]),
  checkboxControl<AlertDialogPlaygroundState>('loading', 'Loading on confirm'),
];
