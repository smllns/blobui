import {
  childrenProp,
  classNameProp,
  defaultOpenProp,
  onOpenChangeProp,
  openProp,
  toneProp,
} from './commonProps';
import { prop } from './helpers';

export const alertDialogProps = [
  openProp(
    'Open state, controlled. Left out, the alert dialog keeps its own and plays the exit animation before it unmounts',
  ),

  defaultOpenProp('Open state before any interaction'),

  onOpenChangeProp(
    'Called by the trigger, by Cancel, by the action and by Escape. A press on the scrim never calls it — that is the point of the component',
  ),

  childrenProp,
];

export const alertDialogContentProps = [
  toneProp(
    ['danger', 'warning', 'info'],
    'danger',
    'The hue of the icon tile and the default variant of the action. danger is the default because that is what this component is for; there is no success tone, because nothing that has already gone right needs to be confirmed',
  ),

  prop(
    'loading',
    'boolean',
    'false',
    'The confirmed action is running. Both buttons go inert — cancelling half-way through a delete is a race, not a feature — and everything in the footer that is not carrying the spinner dims',
  ),

  classNameProp,
];

export const alertDialogIconProps = [
  prop(
    'tone',
    "'danger' | 'warning' | 'info'",
    'from content',
    "Overrides the content's tone for this tile alone",
  ),

  prop(
    'children',
    'ReactNode',
    'per tone',
    'The glyph. Left out, the tile carries the default for its tone. The tile itself is never dropped: a hue is not an acceptable sole carrier of meaning (SC 1.4.1)',
  ),
];

export const alertDialogActionProps = [
  prop(
    'variant',
    'ButtonVariant',
    'destructive',
    "Follows the tone: destructive for danger and warning, primary for info. It sits on the trailing edge, where a Dialog puts its primary — a deliberate collision with muscle memory, so the confirm is never the button pressed by reflex",
  ),

  prop(
    'loading',
    'boolean',
    'false',
    'Puts the spinner on this button. Pair it with loading on the content, and call event.preventDefault() in onClick so the dialog stays open while the work runs',
  ),

  childrenProp,
];
