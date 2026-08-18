import type {
  Align,
  BasicSize,
  CommonStylingVariant,
  Side,
} from '@/components/shared/types';
import {
  ALIGN_OPTIONS,
  BASIC_SIZE_OPTIONS,
  COMMON_VARIANTS,
  SIDE_OPTIONS,
} from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type PopoverPlaygroundState = {
  title: string;
  description: string;
  variant: CommonStylingVariant;
  size: BasicSize;
  rounded: BasicSize;
  side: Side;
  align: Align;
  sideOffset: string;
  showArrow: boolean;
};

export const POPOVER_INITIAL_STATE: PopoverPlaygroundState = {
  title: 'Popover',
  description: 'This is some popover content.',
  variant: 'default',
  size: 'md',
  rounded: 'md',
  side: 'bottom',
  align: 'center',
  sideOffset: '8',
  showArrow: true,
};
export const POPOVER_CONTROLS = [
  selectControl<PopoverPlaygroundState>('variant', 'Variant', COMMON_VARIANTS),
  selectControl<PopoverPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  selectControl<PopoverPlaygroundState>(
    'rounded',
    'Rounded',
    BASIC_SIZE_OPTIONS,
  ),
  selectControl<PopoverPlaygroundState>('side', 'Side', SIDE_OPTIONS),
  selectControl<PopoverPlaygroundState>('align', 'Align', ALIGN_OPTIONS),
  selectControl<PopoverPlaygroundState>('sideOffset', 'Offset', [
    '0',
    '4',
    '8',
    '12',
    '16',
    '24',
  ]),
  checkboxControl<PopoverPlaygroundState>('showArrow', 'Arrow'),
];
