import {
  childrenProp,
  classNameProp,
  iconProp,
  toneProp,
} from './commonProps';
import { describe, prop } from './helpers';

export const alertProps = [
  toneProp(
    ['neutral', 'info', 'success', 'warning', 'danger'],
    'neutral',
    'Meaning of the message. Sets the fill, the rule and the icon',
  ),

  prop(
    'emphasis',
    "'subtle' | 'bare'",
    'subtle',
    'Tinted panel, or a leading rule with no fill',
  ),

  prop('title', 'ReactNode', '-', 'Optional heading line above the message'),

  describe(
    iconProp,
    'Mark before the copy. Falls back to the icon of the tone, and null drops it',
  ),

  prop(
    'actions',
    'ReactNode',
    '-',
    'Buttons shown under the copy, inside the alert',
  ),

  prop(
    'announce',
    "'off' | 'auto' | 'polite' | 'assertive'",
    'off',
    'How screen readers get the message. Leave off for an alert that was in the page at load; use auto for one that appears in response to an action',
  ),

  prop(
    'focusOnMount',
    'boolean',
    'false',
    'Gives the alert tabindex="-1" and focuses it — for the message shown after a failed submit',
  ),

  prop(
    'onDismiss',
    '() => void',
    '-',
    'Shows the close button and fires once the alert has left',
  ),

  prop('dismissLabel', 'string', 'Dismiss', 'Accessible name of the close button'),

  classNameProp,
  childrenProp,
];
