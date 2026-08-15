import { childrenProp, classNameProp, iconProp } from './commonProps';
import { prop } from './helpers';

export const navigationMenuProps = [
  prop(
    'defaultValue',
    'string',
    '-',
    'Value of the item whose panel is open on mount',
  ),

  prop(
    'delayDuration',
    'number',
    '150',
    'Hover intent delay before a panel opens, in milliseconds',
  ),

  prop(
    'aria-label',
    'string',
    'Main',
    'Label announced for the navigation landmark',
  ),

  prop(
    'listClassName',
    'string',
    '-',
    'Additional CSS classes for the bar itself',
  ),

  childrenProp,
  classNameProp,
];

export const navigationMenuItemProps = [
  prop('label', 'ReactNode', '-', 'Text of the row that opens the panel'),

  prop(
    'value',
    'string',
    '-',
    'Stable identifier for the item, required only for defaultValue',
  ),

  prop(
    'align',
    "'start' | 'end'",
    'start',
    'Inline edge of the row the panel is pinned to',
  ),

  prop('columns', '1 | 2 | 3', '2', 'Number of columns in the panel grid'),

  prop(
    'rows',
    "'auto' | 2 | 3",
    'auto',
    'Explicit row tracks, needed only so a feature cell has rows to span',
  ),

  prop(
    'disabled',
    'boolean',
    'false',
    'Marks the row aria-disabled: it keeps its tab stop and opens nothing',
  ),

  prop(
    'panelClassName',
    'string',
    '-',
    'Additional CSS classes for the panel surface',
  ),

  prop(
    'gridClassName',
    'string',
    '-',
    'Additional CSS classes for the panel grid',
  ),

  childrenProp,
  classNameProp,
];

export const navigationMenuLinkProps = [
  prop('href', 'string', '-', 'Destination of the top-level link'),

  prop(
    'current',
    'boolean',
    'false',
    "Sets aria-current='page' — where you are, not what you are looking at",
  ),

  prop(
    'disabled',
    'boolean',
    'false',
    'Marks the link aria-disabled while keeping it focusable and readable',
  ),

  childrenProp,
  classNameProp,
];

export const navigationMenuCardProps = [
  prop('title', 'ReactNode', '-', 'Name of the destination'),

  prop(
    'description',
    'ReactNode',
    '-',
    'One line explaining the destination; a card without one belongs in the bar',
  ),

  prop('href', 'string', '-', 'Destination of the card'),

  iconProp,
  classNameProp,
];

export const navigationMenuFeatureProps = [
  prop('title', 'ReactNode', '-', 'Name of the promoted destination'),

  prop('description', 'ReactNode', '-', 'One line explaining the destination'),

  prop('href', 'string', '-', 'Destination of the feature cell'),

  prop(
    'span',
    "'column' | 'cell'",
    'column',
    'Whether the cell spans every row of its column or occupies one',
  ),

  iconProp,
  childrenProp,
  classNameProp,
];
