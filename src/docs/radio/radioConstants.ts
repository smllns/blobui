import type { ChoiceSize } from '@/components/shared/types';
import { CHOICE_SIZE_OPTIONS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type RadioPlaygroundState = {
  size: ChoiceSize;
  checked: boolean;
  disabled: boolean;
  label: string;
  description: string;
  error: boolean;
  errorMessage: string;
};

export const RADIO_INITIAL_STATE: RadioPlaygroundState = {
  checked: false,
  disabled: false,
  size: 'md',
  label: '',
  description: '',
  error: false,
  errorMessage: '',
};

export const RADIO_CONTROLS = [
  selectControl<RadioPlaygroundState>('size', 'Size', CHOICE_SIZE_OPTIONS),
  checkboxControl<RadioPlaygroundState>('checked', 'Checked'),
  checkboxControl<RadioPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<RadioPlaygroundState>('label', 'Label'),
  checkboxControl<RadioPlaygroundState>('description', 'Description'),
  checkboxControl<RadioPlaygroundState>('error', 'Error'),
  checkboxControl<RadioPlaygroundState>('errorMessage', 'Error Message'),
];
