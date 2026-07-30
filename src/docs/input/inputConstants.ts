import type {
  CommonStylingVariant,
  ExtendedSize,
} from '../../components/types';
import { COMMON_VARIANTS, SIZE_OPTIONS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type InputPlaygroundState = {
  variant: CommonStylingVariant;
  size: ExtendedSize;
  fullWidth: boolean;
  error: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
  disabled: boolean;
  label: boolean;
  description: boolean;
  errorMessage: boolean;
};

export const INPUT_INITIAL_STATE: InputPlaygroundState = {
  variant: 'default',
  size: 'md',
  fullWidth: false,
  error: false,
  leftIcon: false,
  rightIcon: false,
  disabled: false,
  label: false,
  description: false,
  errorMessage: false,
};

export const INPUT_CONTROLS = [
  selectControl<InputPlaygroundState>('variant', 'Variant', COMMON_VARIANTS),
  selectControl<InputPlaygroundState>('size', 'Size', SIZE_OPTIONS),
  checkboxControl<InputPlaygroundState>('error', 'Error'),
  checkboxControl<InputPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<InputPlaygroundState>('fullWidth', 'Full width'),
  checkboxControl<InputPlaygroundState>('leftIcon', 'Left Icon'),
  checkboxControl<InputPlaygroundState>('rightIcon', 'Right Icon'),
  checkboxControl<InputPlaygroundState>('label', 'Label'),
  checkboxControl<InputPlaygroundState>('description', 'Description'),
  checkboxControl<InputPlaygroundState>('errorMessage', 'Error Message'),
];
