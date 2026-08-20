import {
  BASIC_SIZES,
  blockProp,
  classNameProp,
  controlledValueProps,
  disabledProp,
  forceStateProp,
  iconProp,
  idProp,
  loadingProp,
  readOnlyProp,
  sizeProp,
} from './commonProps';
import { describe, prop } from './helpers';

export const segmentedProps = [
  prop('items', 'SegmentedItem[]', '-', 'The segments, in order'),

  prop(
    'type',
    "'single' | 'multiple'",
    'single',
    'single is one tab stop with arrow keys, like a radio group. multiple is n tab stops, because each segment is then an independent toggle',
  ),

  ...controlledValueProps({
    type: 'string | string[]',
    value:
      'Selected segment, or segments when type is multiple. Pass it to control the component',
    defaultValue:
      'Selection on mount. A single group falls back to its first enabled segment, so it can never be empty; a multiple group starts with nothing selected',
    onValueChange:
      'Fires when the selection changes. A string for single, an array for multiple',
    initial: 'first enabled segment, [] when multiple',
    changeType: '((value: string) => void) | ((value: string[]) => void)',
  }),

  sizeProp(
    BASIC_SIZES,
    'md',
    'Height of the track. lg is the touch step: on a phone this height is an accessibility floor, not a size choice',
  ),

  blockProp(
    'Stretches the track and gives every segment an equal share of it. The mobile default',
  ),

  describe(
    disabledProp,
    'Turns the group off and keeps its selection visible: it is still reporting the current mode, it just cannot be changed',
  ),

  readOnlyProp(
    'A disabled group that is still announced. Same paint, different aria',
  ),

  loadingProp(
    'The view is switching. The track takes the disabled paint, pointer and keyboard off, selection stays put; the segments that were not chosen recede',
  ),

  idProp(
    'Id of the group, and the stem every segment id is built from',
    '-',
  ),

  prop(
    'aria-label',
    'string',
    '-',
    'Names the group. A segmented control needs one of this or aria-labelledby, because the segments alone do not say what is being chosen',
  ),

  prop(
    'aria-labelledby',
    'string',
    '-',
    'Names the group from a heading or label already on the page',
  ),

  classNameProp,
];

export const segmentedItemProps = [
  prop('value', 'string', '-', 'Identity of the segment'),

  prop('label', 'ReactNode', '-', 'Text of the segment'),

  describe(iconProp, 'Icon displayed before the label'),

  describe(
    disabledProp,
    'Takes the segment out of the arrow-key order. A disabled segment that is nonetheless the current mode stays legible as the current mode',
  ),
  forceStateProp,
];
