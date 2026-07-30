import type {
  CommonStylingVariant,
  ExtendedSize,
} from '../../components/types';
import { COMMON_VARIANTS, SIZE_OPTIONS } from '../../lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type AvatarPlaygroundState = {
  variant: CommonStylingVariant;
  size: ExtendedSize;
  showImage: boolean;
  fallback: boolean;
};

export const AVATAR_INITIAL_STATE: AvatarPlaygroundState = {
  variant: 'default',
  size: 'md',
  showImage: true,
  fallback: true,
};

export const AVATAR_CONTROLS = [
  selectControl<AvatarPlaygroundState>('variant', 'Variant', COMMON_VARIANTS),
  selectControl<AvatarPlaygroundState>('size', 'Size', SIZE_OPTIONS),
  checkboxControl<AvatarPlaygroundState>('showImage', 'Show Image'),
  checkboxControl<AvatarPlaygroundState>('fallback', 'Fallback'),
];
