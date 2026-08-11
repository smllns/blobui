import { CHOICE_SIZE_OPTIONS } from '../../lib/options';
import type { ChoiceSize } from '../../components/shared/types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type CheckboxPlaygroundState = {
  size: ChoiceSize;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  error: boolean;
  label: boolean;
  description: boolean;
  errorMessage: boolean;
  icon: boolean;
};

export const CHECKBOX_INITIAL_STATE: CheckboxPlaygroundState = {
  size: 'md',
  checked: false,
  indeterminate: false,
  disabled: false,
  error: false,
  label: false,
  description: false,
  errorMessage: false,
  icon: false,
};

export const CHECKBOX_CONTROLS = [
  selectControl<CheckboxPlaygroundState>('size', 'Size', CHOICE_SIZE_OPTIONS),
  checkboxControl<CheckboxPlaygroundState>('checked', 'Checked'),
  checkboxControl<CheckboxPlaygroundState>('indeterminate', 'Indeterminate'),
  checkboxControl<CheckboxPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<CheckboxPlaygroundState>('error', 'Error'),
  checkboxControl<CheckboxPlaygroundState>('label', 'Label'),
  checkboxControl<CheckboxPlaygroundState>('description', 'Description'),
  checkboxControl<CheckboxPlaygroundState>('errorMessage', 'Error Message'),
  checkboxControl<CheckboxPlaygroundState>('icon', 'Icon'),
];
