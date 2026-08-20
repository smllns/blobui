import {
  BASIC_SIZES,
  classNameProp,
  disabledProp,
  errorProp,
  fieldPropsOf,
  forceStateProp,
  readOnlyProp,
  requiredProp,
  sizeProp,
} from './commonProps';
import { describe, prop } from './helpers';

export const sliderProps = [
  prop(
    'value',
    'number | [number, number]',
    '-',
    'Controlled value. A pair draws two thumbs, and the callbacks answer in the same shape',
  ),

  prop(
    'defaultValue',
    'number | [number, number]',
    'min',
    'Starting value when the slider owns its own state',
  ),

  prop(
    'onChange',
    '(value: number | [number, number]) => void',
    '-',
    'Called on every move, drag included',
  ),

  prop(
    'onChangeEnd',
    '(value: number | [number, number]) => void',
    '-',
    'Called once the value settles: pointer release, or the key that changed it',
  ),

  prop('min', 'number', '0', 'Lower end of the rail'),

  prop('max', 'number', '100', 'Upper end of the rail'),

  prop(
    'step',
    'number',
    '1',
    'Granularity of the value. Arrow keys move by one step',
  ),

  prop(
    'largeStep',
    'number',
    'step * 10',
    'Distance Page Up and Page Down cover',
  ),

  sizeProp(
    BASIC_SIZES,
    'md',
    'Shrinks the rail and the thumb, never the 44px hit area',
  ),

  readOnlyProp(
    'The value is content: it keeps its paint, its tab stop and its announcement, only the drag is gone',
  ),

  prop(
    'showValue',
    'boolean',
    'false',
    'Renders the readout beside the rail, in tabular figures',
  ),

  prop(
    'formatValue',
    '(value: number) => string',
    '-',
    'Formats the readout and fills aria-valuetext ("$1,200", never "1200")',
  ),

  prop(
    'thumbLabels',
    '[string, string]',
    "['Minimum', 'Maximum']",
    'Names the two thumbs of a range apart from each other for assistive tech',
  ),

  errorProp,
  ...fieldPropsOf('ReactNode'),

  requiredProp('Marks the label with an asterisk'),

  describe(
    disabledProp,
    'The fill drops to the neutral ramp so the value stays readable',
  ),
  forceStateProp,
  classNameProp,
];
