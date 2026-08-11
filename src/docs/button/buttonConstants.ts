import type { ButtonVariant } from '../../components/button/button.types';
import type { ExtendedSize } from '../../components/shared/types';
import { BUTTON_VARIANTS, SIZE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

const VARIANTS: ButtonVariant[] = BUTTON_VARIANTS;

export type BtnPlaygroundState = {
  variant: ButtonVariant;
  size: ExtendedSize;
  loading: boolean;
  disabled: boolean;
  fullWidth: boolean;
  leftIcon: boolean;
  rightIcon: boolean;
};
export const BTN_INITIAL_STATE: BtnPlaygroundState = {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  fullWidth: false,
  leftIcon: false,
  rightIcon: false,
};

export const BTN_CONTROLS = [
  selectControl<BtnPlaygroundState>('variant', 'Variant', VARIANTS),
  selectControl<BtnPlaygroundState>('size', 'Size', SIZE_OPTIONS),
  checkboxControl<BtnPlaygroundState>('loading', 'Loading'),
  checkboxControl<BtnPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<BtnPlaygroundState>('fullWidth', 'Full width'),
  checkboxControl<BtnPlaygroundState>('leftIcon', 'Left Icon'),
  checkboxControl<BtnPlaygroundState>('rightIcon', 'Right Icon'),
];
