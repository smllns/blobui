import type { ExtendedSize } from '../../components/shared/types';
import { SWITCH_SIZE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type SwitchPlaygroundState = {
  size: Exclude<ExtendedSize, 'xs'>;
  checked: boolean;
  disabled: boolean;
  label: string;
  description: string;
  error: boolean;
  errorMessage: string;
};
export const SWITCH_INITIAL_STATE: SwitchPlaygroundState = {
  checked: false,
  disabled: false,
  size: 'md',
  label: '',
  description: '',
  error: false,
  errorMessage: '',
};

export const SWITCH_CONTROLS = [
  selectControl<SwitchPlaygroundState>('size', 'Size', SWITCH_SIZE_OPTIONS),
  checkboxControl<SwitchPlaygroundState>('checked', 'Checked'),
  checkboxControl<SwitchPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<SwitchPlaygroundState>('label', 'Label'),
  checkboxControl<SwitchPlaygroundState>('description', 'Description'),
  checkboxControl<SwitchPlaygroundState>('error', 'Error'),
  checkboxControl<SwitchPlaygroundState>('errorMessage', 'Error Message'),
];
