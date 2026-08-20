import {
  COMMON_VARIANTS,
  alignProp,
  childrenProp,
  classNameProp,
  forceStateProp,
  loadingProp,
  onOpenChangeProp,
  openProp,
  portalProp,
  sideProp,
  variantProp,
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

  onOpenChangeProp('Called when the card opens or closes'),

  childrenProp,

  openProp('Controls the card, so a specimen can stand open', 'undefined'),
];

export const hoverCardTriggerProps = [
  variantProp(
    ['underline', 'unstyled'],
    'underline',
    'Dotted underline (the convention for "there is more here if you ask"), or unstyled for an avatar or a real link that already carries its own affordance',
  ),

  forceStateProp,
  classNameProp,
  childrenProp,

  prop(
    '...ButtonProps',
    "Omit<ButtonProps, 'variant'>",
    '-',
    'The trigger is a Button, so size, disabled, loading, fullWidth, leftIcon, rightIcon and iconOnly pass straight through. Only variant is taken over, for the two looks above',
  ),
];

export const hoverCardContentProps = [
  variantProp(COMMON_VARIANTS, 'default', 'Visual style of the card surface'),

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

  loadingProp(
    'Opens the card immediately at its fixed width with inert skeleton rows inside',
  ),

  prop(
    'showCloseButton',
    'boolean',
    'coarse pointer',
    'Shows a close control. Defaults on where the pointer is coarse, because there is no "move the pointer away" on a touch screen',
  ),

  prop(
    'positioning',
    "'floating' | 'static'",
    'floating',
    'static drops the floating layer and lays the card out in flow under the trigger, with no collision handling. For specimens',
  ),

  portalProp,

  classNameProp,
  childrenProp,
];
