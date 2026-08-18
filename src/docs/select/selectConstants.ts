import type { SelectWidth } from '@/components/select/select.types';
import type {
  CommonStylingVariant,
  ExtendedSize,
  LabelPlacement,
} from '@/components/shared/types';
import {
  COMMON_VARIANTS,
  LABEL_PLACEMENT_OPTIONS,
  SIZE_OPTIONS,
} from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type SelectPlaygroundState = {
  variant: CommonStylingVariant;
  size: ExtendedSize;
  width: SelectWidth;
  labelPlacement: LabelPlacement;
  disabled: boolean;
  error: boolean;
  label: React.ReactNode;
};

export const SELECT_INITIAL_STATE: SelectPlaygroundState = {
  variant: 'default',
  size: 'md',
  width: 'md',
  labelPlacement: 'above',
  disabled: false,
  error: false,
  label: '',
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
  selectControl<SelectPlaygroundState>(
    'labelPlacement',
    'Label placement',
    LABEL_PLACEMENT_OPTIONS,
  ),
  checkboxControl<SelectPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<SelectPlaygroundState>('error', 'Error'),
  checkboxControl<SelectPlaygroundState>('label', 'Label'),
];
