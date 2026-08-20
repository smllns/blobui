import {
  BASIC_SIZES,
  childrenProp,
  classNameProp,
  disabledProp,
  onOpenChangeProp,
  openProp,
  sizeProp,
} from './commonProps';
import { prop, union } from './helpers';

export const contextMenuProps = [
  prop(
    'trigger',
    'ReactNode',
    '-',
    'The region a right-click opens the menu over. It carries the platform context-menu cursor and stays marked while the menu is open, so the panel keeps a visible relationship to the row it belongs to',
  ),

  openProp('Open state, controlled'),

  onOpenChangeProp(
    'Called on right-click, on Shift+F10 and the Menu key, on Escape and on a press outside',
  ),

  sizeProp(BASIC_SIZES, 'md', 'Row height and type size for every row in the menu'),

  prop(
    'checkable',
    'boolean',
    'false',
    'The menu holds checkable rows. It is a property of the MENU, not of the row: the indent it adds keeps checked and unchecked labels on one line, so a menu of view options does not move every time it is used',
  ),

  disabledProp,

  prop('triggerClassName', 'string', '-', 'Classes for the trigger region'),

  classNameProp,

  childrenProp,
];

export const contextMenuItemProps = [
  prop(
    'variant',
    union(['default', 'destructive']),
    'default',
    'destructive paints the danger ink, and the danger fill under both the pointer and the keyboard cursor — one row cannot be dangerous for the mouse and neutral for the arrows',
  ),

  sizeProp(BASIC_SIZES, 'from menu', 'Overrides the size the menu set'),

  prop(
    'disabled',
    'boolean',
    'false',
    'Dimmed ink, not-allowed cursor, and the row STAYS in the menu: a menu whose length changes with permissions makes the position of every other item unlearnable',
  ),

  prop(
    'highlighted',
    'boolean',
    'false',
    'Paints the keyboard cursor without moving focus. Docs and visual tests only',
  ),

  childrenProp,
];

export const contextMenuCheckboxItemProps = [
  prop(
    'checked',
    'boolean',
    'false',
    'The tick and the accent ink. The mark is painted only when the row is checked — a mark that is always there and only changes colour is a decoration, not a state',
  ),

  prop(
    'onCheckedChange',
    '(checked: boolean) => void',
    '-',
    'Called when the row is activated',
  ),

  childrenProp,
];

export const contextMenuSubProps = [
  prop(
    'trigger',
    'ReactNode',
    '-',
    'The row that opens the submenu. Right opens it, left closes it, and the row stays highlighted while its panel is open — it is still the thing the keyboard is on',
  ),

  sizeProp(BASIC_SIZES, 'from menu', 'Overrides the size the menu set'),

  disabledProp,

  childrenProp,
];
