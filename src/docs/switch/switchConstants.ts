import type { BasicSize, CommonStylingVariant } from '../../components/types';
import { BASIC_SIZE_OPTIONS, COMMON_VARIANTS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type SwitchPlaygroundState = {
  variant: CommonStylingVariant;
  size: BasicSize;
  checked: boolean;
  disabled: boolean;
  label: string;
  description: string;
  error: boolean;
  errorMessage: string;
};
export const SWITCH_INITIAL_STATE: SwitchPlaygroundState = {
  variant: 'default',
  checked: false,
  disabled: false,
  size: 'md',
  label: '',
  description: '',
  error: false,
  errorMessage: '',
};

export const SWITCH_CONTROLS = [
  selectControl<SwitchPlaygroundState>('variant', 'Variant', COMMON_VARIANTS),
  selectControl<SwitchPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  checkboxControl<SwitchPlaygroundState>('checked', 'Checked'),
  checkboxControl<SwitchPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<SwitchPlaygroundState>('label', 'Label'),
  checkboxControl<SwitchPlaygroundState>('description', 'Description'),
  checkboxControl<SwitchPlaygroundState>('error', 'Error'),
  checkboxControl<SwitchPlaygroundState>('errorMessage', 'Error Message'),
];
