import {
  alignProp,
  childrenProp,
  classNameProp,
  sideProp,
} from './commonProps';
import { prop } from './helpers';

export const hoverCardProps = [
  prop(
    'openDelay',
    'number',
    '300',
    'How long the pointer must rest on the trigger before the card opens',
  ),

  prop(
    'closeDelay',
    'number',
    '150',
    'How long the card stays open after the pointer leaves — shorter than openDelay, because an arrival has to be intentional and a departure only has to be forgiving',
  ),

  prop(
    'onOpenChange',
    '(open: boolean) => void',
    '-',
    'Called when the card opens or closes',
  ),

  childrenProp,
];

export const hoverCardTriggerProps = [
  prop(
    'variant',
    "'underline' | 'bare'",
    'underline',
    'Dotted underline (the convention for "there is more here if you ask"), or bare for an avatar or a real link that already carries its own affordance',
  ),

  prop(
    'href',
    'string',
    '-',
    'Where the trigger leads. The card must never be the only route to its content, so this is the route',
  ),

  prop(
    'asChild',
    'boolean',
    'false',
    'Renders the trigger as the child element instead of an anchor',
  ),

  classNameProp,
  childrenProp,
];

export const hoverCardContentProps = [
  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of the card surface',
  ),

  prop(
    'rounded',
    "'sm' | 'md' | 'lg'",
    'md',
    'Controls border radius of the card',
  ),

  sideProp,
  { ...alignProp, default: 'start' },

  prop(
    'sideOffset',
    'number',
    '6',
    'Distance between the card and the trigger. The invisible pointer-safe bridge is written from this same number, so the two can never disagree',
  ),

  prop(
    'loading',
    'boolean',
    'false',
    'Opens the card immediately at its fixed width with inert skeleton rows inside',
  ),

  prop(
    'showCloseButton',
    'boolean',
    'coarse pointer',
    'Shows a close control. Defaults on where the pointer is coarse, because there is no "move the pointer away" on a touch screen',
  ),

  classNameProp,
  childrenProp,
];
