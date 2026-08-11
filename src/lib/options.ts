import type {
  Align,
  IconSize,
  BasicSize,
  CommonStylingVariant,
  Emphasis,
  ExtendedSize,
  Shape,
  Side,
  Tone,
  ChoiceSize,
  LabelPlacement,
} from '../components/shared/types';
import type { ButtonVariant } from '../components/button/button.types';
import type { ToastTone } from '../components/toast/toast.types';

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

export const AVATAR_SIZE_OPTIONS: IconSize[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
];

export const CHOICE_SIZE_OPTIONS: ChoiceSize[] = ['md', 'lg'];

export const SWITCH_SIZE_OPTIONS: ExtendedSize[] = ['sm', 'md', 'lg', 'xl'];

export const BUTTON_VARIANTS: ButtonVariant[] = [
  'primary',
  'secondary',
  'soft',
  'outline',
  'ghost',
  'destructive',
  'link',
];

export const TONE_OPTIONS: Tone[] = [
  'neutral',
  'accent',
  'success',
  'warning',
  'danger',
];
export const EMPHASIS_OPTIONS: Emphasis[] = ['soft', 'solid', 'outline'];
export const SHAPE_OPTIONS: Shape[] = ['pill', 'square'];

export const AVATAR_SHAPE_OPTIONS = ['circle', 'square'] as const;
export const AVATAR_STATUS_OPTIONS = ['online', 'busy', 'away', 'offline'];

export const LABEL_PLACEMENT_OPTIONS: LabelPlacement[] = ['above', 'infield'];

export const TOAST_TONES: ToastTone[] = [
  'neutral',
  'success',
  'warning',
  'danger',
  'info',
];
