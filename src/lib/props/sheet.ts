import {
  childrenProp,
  classNameProp,
  defaultOpenProp,
  onOpenChangeProp,
  openProp,
  sideProp,
  sizeProp,
} from './commonProps';
import { prop } from './helpers';

export const sheetProps = [
  openProp(
    'Open state, controlled. Left out, the sheet keeps its own and plays the exit animation before it unmounts',
  ),

  defaultOpenProp('Open state before any interaction'),

  onOpenChangeProp(
    'Called by the trigger, the close button, the grabber, a press on the scrim and Escape',
  ),

  childrenProp,
];

export const sheetContentProps = [
  sideProp,
  sizeProp(
    ['sm', 'md', 'lg', 'full'],
    'md',
    'Width for a side sheet: 20 / 24 / 32rem, or one gutter short of the viewport for full. Top and bottom sheets are always full width and never taller than 85svh',
  ),

  prop(
    'grabber',
    'boolean',
    'top and bottom',
    'The drag handle. A real button and a real tab stop: dragging it past a quarter of the panel dismisses the sheet, and pressing it does the same from the keyboard. Never shown on a side sheet, where it would promise a gesture the mouse cannot make',
  ),

  prop('showCloseButton', 'boolean', 'true', 'The cross in the corner'),

  prop(
    'loading',
    'boolean',
    'false',
    'The body is still arriving. The panel is already open — that is the point, a sheet opens immediately and fills in — so the body dims and the footer goes inert: a confirm pressed against a form that has not finished arriving submits the wrong thing',
  ),

  classNameProp,
];
