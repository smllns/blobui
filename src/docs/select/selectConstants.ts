import type { SelectWidth } from '../../components/select/select.types';
import type {
  CommonStylingVariant,
  ExtendedSize,
} from '../../components/types';
import { COMMON_VARIANTS, SIZE_OPTIONS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type SelectPlaygroundState = {
  variant: CommonStylingVariant;
  size: ExtendedSize;
  width: SelectWidth;
  disabled: boolean;
  error: boolean;
};

export const SELECT_INITIAL_STATE: SelectPlaygroundState = {
  variant: 'default',
  size: 'md',
  width: 'md',
  disabled: false,
  error: false,
};

export const SELECT_CONTROLS = [
  selectControl<SelectPlaygroundState>('variant', 'Variant', COMMON_VARIANTS),
  selectControl<SelectPlaygroundState>('size', 'Size', SIZE_OPTIONS),
  selectControl<SelectPlaygroundState>('width', 'Width', [
    'auto',
    'sm',
    'md',
    'lg',
    'full',
  ]),
  checkboxControl<SelectPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<SelectPlaygroundState>('error', 'Error'),
];
