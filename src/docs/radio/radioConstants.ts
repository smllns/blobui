import type { BasicSize, CommonStylingVariant } from '../../components/types';
import { BASIC_SIZE_OPTIONS, COMMON_VARIANTS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type RadioPlaygroundState = {
  variant: CommonStylingVariant;
  size: BasicSize;
  checked: boolean;
  disabled: boolean;
  label: string;
  description: string;
  error: boolean;
  errorMessage: string;
};

export const RADIO_INITIAL_STATE: RadioPlaygroundState = {
  variant: 'default',
  checked: false,
  disabled: false,
  size: 'md',
  label: '',
  description: '',
  error: false,
  errorMessage: '',
};

export const RADIO_CONTROLS = [
  selectControl<RadioPlaygroundState>('variant', 'Variant', COMMON_VARIANTS),
  selectControl<RadioPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  checkboxControl<RadioPlaygroundState>('checked', 'Checked'),
  checkboxControl<RadioPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<RadioPlaygroundState>('label', 'Label'),
  checkboxControl<RadioPlaygroundState>('description', 'Description'),
  checkboxControl<RadioPlaygroundState>('error', 'Error'),
  checkboxControl<RadioPlaygroundState>('errorMessage', 'Error Message'),
];
