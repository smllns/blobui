import { BASIC_SIZE_OPTIONS, BUTTON_VARIANTS } from '@/lib/options';
import type {
  ButtonGroupGap,
  ButtonGroupOrientation,
  ButtonGroupRole,
} from '@/components/button-group/button-group.types';
import type { ButtonVariant } from '@/components/button/button.types';
import type { ExtendedSize } from '@/components/shared/types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export const BUTTON_GROUP_ORIENTATIONS: ButtonGroupOrientation[] = [
  'horizontal',
  'vertical',
];

export const BUTTON_GROUP_GAPS: ButtonGroupGap[] = ['joined', 'spaced'];

export const BUTTON_GROUP_ROLES: ButtonGroupRole[] = ['group', 'toolbar'];

export type ButtonGroupPlaygroundState = {
  orientation: ButtonGroupOrientation;
  gap: ButtonGroupGap;
  role: ButtonGroupRole;
  variant: ButtonVariant;
  size: ExtendedSize;
  block: boolean;
  disabled: boolean;
  loading: boolean;
};

export const BUTTON_GROUP_INITIAL_STATE: ButtonGroupPlaygroundState = {
  orientation: 'horizontal',
  gap: 'joined',
  role: 'group',
  variant: 'secondary',
  size: 'md',
  block: false,
  disabled: false,
  loading: false,
};

export const BUTTON_GROUP_CONTROLS = [
  selectControl<ButtonGroupPlaygroundState>(
    'orientation',
    'Orientation',
    BUTTON_GROUP_ORIENTATIONS,
  ),
  selectControl<ButtonGroupPlaygroundState>('gap', 'Gap', BUTTON_GROUP_GAPS),
  selectControl<ButtonGroupPlaygroundState>('role', 'Role', BUTTON_GROUP_ROLES),
  selectControl<ButtonGroupPlaygroundState>(
    'variant',
    'Member variant',
    BUTTON_VARIANTS,
  ),
  selectControl<ButtonGroupPlaygroundState>(
    'size',
    'Member size',
    BASIC_SIZE_OPTIONS,
  ),
  checkboxControl<ButtonGroupPlaygroundState>('block', 'Block'),
  checkboxControl<ButtonGroupPlaygroundState>('disabled', 'Disabled group'),
  checkboxControl<ButtonGroupPlaygroundState>('loading', 'Loading group'),
];
