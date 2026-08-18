import type { InputGroupSide } from '@/components/input-group/input-group.types';
import type { CommonStylingVariant } from '@/components/shared/types';
import { COMMON_VARIANTS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type InputGroupSlot = 'none' | 'text' | 'bare' | 'button';

export type InputGroupPlaygroundState = {
  variant: CommonStylingVariant;
  leading: InputGroupSlot;
  trailing: InputGroupSlot;
  loadingSide: InputGroupSide;
  loading: boolean;
  error: boolean;
  errorMessage: boolean;
  description: boolean;
  label: boolean;
  required: boolean;
  disabled: boolean;
  readOnly: boolean;
  fullWidth: boolean;
};

export const INPUT_GROUP_SLOT_OPTIONS: InputGroupSlot[] = [
  'none',
  'text',
  'bare',
  'button',
];

export const INPUT_GROUP_SIDE_OPTIONS: InputGroupSide[] = [
  'leading',
  'trailing',
];

export const INPUT_GROUP_COPY = {
  leadingText: 'https://',
  leadingBare: '$',
  trailingText: '.com',
  trailingBare: 'USD',
  buttonLabel: 'Copy',
  placeholder: 'blob.ui',
  label: 'Domain',
  description: 'Anything you can point a CNAME at.',
  errorMessage: 'That domain is already taken',
  loadingLabel: 'Checking availability…',
};

export const INPUT_GROUP_INITIAL_STATE: InputGroupPlaygroundState = {
  variant: 'default',
  leading: 'text',
  trailing: 'text',
  loadingSide: 'trailing',
  loading: false,
  error: false,
  errorMessage: false,
  description: false,
  label: false,
  required: false,
  disabled: false,
  readOnly: false,
  fullWidth: false,
};

export const INPUT_GROUP_CONTROLS = [
  selectControl<InputGroupPlaygroundState>(
    'variant',
    'Variant',
    COMMON_VARIANTS,
  ),
  selectControl<InputGroupPlaygroundState>(
    'leading',
    'Leading',
    INPUT_GROUP_SLOT_OPTIONS,
  ),
  selectControl<InputGroupPlaygroundState>(
    'trailing',
    'Trailing',
    INPUT_GROUP_SLOT_OPTIONS,
  ),
  selectControl<InputGroupPlaygroundState>(
    'loadingSide',
    'Loading side',
    INPUT_GROUP_SIDE_OPTIONS,
  ),
  checkboxControl<InputGroupPlaygroundState>('loading', 'Loading'),
  checkboxControl<InputGroupPlaygroundState>('error', 'Error'),
  checkboxControl<InputGroupPlaygroundState>('errorMessage', 'Error message'),
  checkboxControl<InputGroupPlaygroundState>('description', 'Description'),
  checkboxControl<InputGroupPlaygroundState>('label', 'Label'),
  checkboxControl<InputGroupPlaygroundState>('required', 'Required'),
  checkboxControl<InputGroupPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<InputGroupPlaygroundState>('readOnly', 'Read only'),
  checkboxControl<InputGroupPlaygroundState>('fullWidth', 'Full width'),
];
