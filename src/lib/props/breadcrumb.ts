import {
  classNameProp,
  disabledProp,
  forceStateProp,
  hrefProp,
  iconProp,
} from './commonProps';
import { describe, prop } from './helpers';

export const breadcrumbProps = [
  prop(
    'items',
    'BreadcrumbItem[]',
    '-',
    'The trail, root first. The last item is the page you are on and is rendered as text, not a link',
  ),

  prop('label', 'string', 'Breadcrumb', 'Accessible name of the nav landmark'),

  prop(
    'separator',
    'ReactNode',
    "<ChevronRight size='xs' />",
    'Mark drawn between levels. Decorative and never read out',
  ),

  prop(
    'maxItems',
    'number',
    '0',
    'Collapse the middle of the trail once it is longer than this. 0 never collapses',
  ),

  prop(
    'itemsBeforeCollapse',
    'number',
    '1',
    'Levels kept at the start of a collapsed trail',
  ),

  prop(
    'itemsAfterCollapse',
    'number',
    '2',
    'Levels kept at the end of a collapsed trail',
  ),

  prop(
    'ellipsisLabel',
    'string',
    'Show the levels in between',
    'Accessible name of the button that reveals the collapsed levels',
  ),

  prop(
    'renderEllipsis',
    '(hidden: BreadcrumbItem[]) => ReactNode',
    '-',
    'Replaces the built-in reveal button, for opening the hidden levels as a menu instead',
  ),

  {
    ...forceStateProp,
    name: 'ellipsisForceState',
    description:
      'Paints a pointer state on the reveal button. Docs and visual tests only',
  },

  classNameProp,
];

export const breadcrumbItemProps = [
  prop('label', 'ReactNode', '-', 'Text of the level'),

  forceStateProp,

  hrefProp(
    'Destination. Without one the level renders as a button, for router navigation',
  ),

  iconProp,

  describe(
    disabledProp,
    'A level the user is not permitted to open. It stays readable and takes the pointer off',
  ),

  prop(
    'onClick',
    '(event: MouseEvent<HTMLElement>) => void',
    '-',
    'Called when the level is activated',
  ),

  classNameProp,
];
