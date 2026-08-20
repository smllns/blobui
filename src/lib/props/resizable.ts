import {
  childrenProp,
  classNameProp,
  disabledProp,
  forceStateProp,
  orientationProp,
} from './commonProps';
import { describe, prop } from './helpers';

export const resizableProps = [
  prop(
    'panels',
    'ResizablePanelItem[]',
    '-',
    'The panels of the split, in order. A handle is placed between every pair',
  ),

  orientationProp(
    'Axis the panels are laid out along. The divider runs across it',
  ),

  describe(
    disabledProp,
    'Fixes the split. The handle stays focusable and announces itself as disabled, and the panels keep their sizes',
  ),

  prop(
    'handleLabel',
    'string',
    'Resize panels',
    'Accessible name given to every handle in the split',
  ),

  prop(
    'autoSaveId',
    'string',
    '-',
    'Remembers the layout between visits under this key',
  ),

  prop(
    'onLayout',
    '(sizes: number[]) => void',
    '-',
    'Called with the panel sizes, as percentages, as the layout changes',
  ),

  prop(
    'onCollapse',
    '(panelId: string, collapsed: boolean) => void',
    '-',
    'Called when a collapsible panel folds away or comes back',
  ),

  prop('id', 'string', '-', 'Identifier written to the split container'),

  {
    ...forceStateProp,
    type: "'hover' | 'focus' | 'dragging'",
    description:
      'Paints a pointer or drag state on the handle that a document cannot produce. Docs and visual tests only',
  },
  classNameProp,
];

export const resizablePanelProps = [
  prop(
    'id',
    'string',
    '-',
    'Stable identity of the panel. The handle before it points at this id with aria-controls',
  ),

  childrenProp,

  prop(
    'defaultSize',
    'number',
    '-',
    'Starting size, as a percentage of the split',
  ),

  prop(
    'minSize',
    'number',
    '0',
    'The floor the drag and the Home key both stop at, as a percentage',
  ),

  prop(
    'maxSize',
    'number',
    '100',
    'The ceiling the drag and the End key both stop at, as a percentage',
  ),

  prop(
    'collapsible',
    'boolean',
    'false',
    'The panel can fold away entirely. Enter on the handle before it toggles',
  ),

  prop(
    'collapsedSize',
    'number',
    '0',
    'Size a collapsed panel keeps, as a percentage',
  ),

  classNameProp,
];
