import { classNameProp, disabledProp, forceStateProp } from './commonProps';
import { prop } from './helpers';

export const segmentedProps = [
  prop('items', 'SegmentedItem[]', '-', 'The segments, in order'),

  prop(
    'type',
    "'single' | 'multiple'",
    'single',
    'single is one tab stop with arrow keys, like a radio group. multiple is n tab stops, because each segment is then an independent toggle',
  ),

  prop(
    'value',
    'string | string[]',
    '-',
    'Selected segment, or segments when type is multiple. Pass it to control the component',
  ),

  prop(
    'defaultValue',
    'string | string[]',
    'first enabled segment',
    'Selection on mount. A single-select group always holds one of its own options, so it can never be empty',
  ),

  prop(
    'onValueChange',
    '(value: string | string[]) => void',
    '-',
    'Fires when the selection changes. A string for single, an array for multiple',
  ),

  prop(
    'size',
    "'sm' | 'md' | 'lg'",
    'md',
    'Height of the track. lg is the touch step: on a phone this height is an accessibility floor, not a size choice',
  ),

  prop(
    'block',
    'boolean',
    'false',
    'Stretches the track and gives every segment an equal share of it. The mobile default',
  ),

  {
    ...disabledProp,
    description:
      'Turns the group off and keeps its selection visible: it is still reporting the current mode, it just cannot be changed',
  },

  prop(
    'readOnly',
    'boolean',
    'false',
    'A disabled group that is still announced. Same paint, different aria',
  ),

  prop(
    'loading',
    'boolean',
    'false',
    'The view is switching. The track takes the disabled paint, pointer and keyboard off, selection stays put; the segments that were not chosen recede',
  ),

  classNameProp,
];

export const segmentedItemProps = [
  prop('value', 'string', '-', 'Identity of the segment'),

  prop('label', 'ReactNode', '-', 'Text of the segment'),

  prop('icon', 'ReactNode', '-', 'Icon displayed before the label'),

  {
    ...disabledProp,
    description:
      'Takes the segment out of the arrow-key order. A disabled segment that is nonetheless the current mode stays legible as the current mode',
  },
  forceStateProp,
];
