import type {
  Align,
  BasicSize,
  CommonStylingVariant,
  ExtendedSize,
  Side,
} from '../components/types';

export const SIZE_OPTIONS: ExtendedSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
export const BASIC_SIZE_OPTIONS: BasicSize[] = ['sm', 'md', 'lg'];
export const COMMON_VARIANTS: CommonStylingVariant[] = [
  'default',
  'filled',
  'outline',
  'ghost',
];
export const SIDE_OPTIONS: Side[] = ['top', 'right', 'bottom', 'left'];
export const ALIGN_OPTIONS: Align[] = ['start', 'center', 'end'];
