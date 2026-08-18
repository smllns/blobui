import { classNameProp, disabledProp, forceStateProp } from './commonProps';
import { prop } from './helpers';

export const tabsProps = [
  prop('items', 'TabItem[]', '-', 'The tabs, in order, with their panels'),

  prop(
    'value',
    'string',
    '-',
    'Selected tab. Pass it to control the component; the host then owns the value',
  ),

  prop(
    'defaultValue',
    'string',
    'first enabled tab',
    'Selected tab on mount. Exactly one tab is selected at all times — a tablist with nothing selected is a bug in the host, not a state',
  ),

  prop(
    'onValueChange',
    '(value: string) => void',
    '-',
    'Fires when the selection moves to another tab',
  ),

  prop(
    'orientation',
    "'horizontal' | 'vertical'",
    'horizontal',
    'Axis of the rail. The marker moves with it, in logical properties, so this is also the RTL story',
  ),

  prop(
    'size',
    "'sm' | 'md' | 'lg'",
    'md',
    'Height and label size of a tab. md matches the control height, so a tab row and the buttons beside it share a baseline',
  ),

  prop(
    'block',
    'boolean',
    'false',
    'Gives every tab an equal share of the row. For a two- or three-tab row inside a card, and for mobile',
  ),

  prop(
    'activation',
    "'automatic' | 'manual'",
    'automatic',
    'automatic selects the tab the arrow keys land on. manual moves focus only and waits for Enter or Space, for panels that are expensive to load',
  ),

  classNameProp,
];

export const tabItemProps = [
  prop('value', 'string', '-', 'Identity of the tab and of its panel'),

  prop('label', 'ReactNode', '-', 'Text of the tab'),

  prop('icon', 'ReactNode', '-', 'Icon displayed before the label'),

  prop(
    'badge',
    'ReactNode',
    '-',
    'Count or status beside the label. It is decoration on the label and never a second target inside the tab stop',
  ),

  prop(
    'content',
    'ReactNode',
    '-',
    'Panel rendered under the rail. Omit it on every item to render the tablist alone and own the panels yourself',
  ),

  {
    ...disabledProp,
    description:
      'Takes the tab out of the arrow-key order. A disabled tab shows no marker even when it is the selected one',
  },
  forceStateProp,
];
