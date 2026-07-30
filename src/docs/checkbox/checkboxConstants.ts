import type { ExtendedSize } from '../../components/types';
import { SIZE_OPTIONS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type CheckboxPlaygroundState = {
  size: ExtendedSize;
  checked: boolean;
  disabled: boolean;
  error: boolean;
  label: boolean;
  description: boolean;
  errorMessage: boolean;
  leftIcon: boolean;
};

export const CHECKBOX_INITIAL_STATE: CheckboxPlaygroundState = {
  size: 'md',
  checked: false,
  disabled: false,
  error: false,
  label: false,
  description: false,
  errorMessage: false,
  leftIcon: false,
};

export const CHECKBOX_CONTROLS = [
  selectControl<CheckboxPlaygroundState>('size', 'Size', SIZE_OPTIONS),
  checkboxControl<CheckboxPlaygroundState>('checked', 'Checked'),
  checkboxControl<CheckboxPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<CheckboxPlaygroundState>('error', 'Error'),
  checkboxControl<CheckboxPlaygroundState>('label', 'Label'),
  checkboxControl<CheckboxPlaygroundState>('description', 'Description'),
  checkboxControl<CheckboxPlaygroundState>('errorMessage', 'Error Message'),
  checkboxControl<CheckboxPlaygroundState>('leftIcon', 'Left Icon'),
];
