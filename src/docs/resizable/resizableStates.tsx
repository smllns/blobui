import { Resizable } from '@/components/resizable/Resizable';
import type { ResizablePanelItem } from '@/components/resizable/resizable.types';
import type { StateSpecimen } from '../components/docsPage.types';

const body = (title: string) => (
  <p className='p-3 text-micro uppercase text-fg-tertiary'>{title}</p>
);

function panels(key: string): ResizablePanelItem[] {
  return [
    {
      id: `${key}-files`,
      defaultSize: 40,
      minSize: 20,
      children: body('Files'),
    },
    {
      id: `${key}-editor`,
      minSize: 20,
      children: body('Editor'),
    },
  ];
}

export const RESIZABLE_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: (
      <div className='h-20 w-80 overflow-hidden rounded-lg border border-border-subtle bg-surface'>
        <Resizable panels={panels('default')} />
      </div>
    ),
    note: 'resting state — a subtle divider with enough surrounding space to make the resize target easy to discover',
  },
  {
    name: 'hover',
    node: (
      <div className='h-20 w-80 overflow-hidden rounded-lg border border-border-subtle bg-surface'>
        <Resizable panels={panels('hover')} forceState='hover' />
      </div>
    ),
    note: 'the divider becomes more prominent on hover, making the resize affordance clear before dragging begins',
  },
  {
    name: 'focus',
    node: (
      <div className='h-20 w-80 overflow-hidden rounded-lg border border-border-subtle bg-surface'>
        <Resizable panels={panels('focus')} forceState='focus' />
      </div>
    ),
    note: 'keyboard focus is shown with a ring and highlighted divider, clearly identifying the handle that will resize the panels',
  },
  {
    name: 'dragging',
    node: (
      <div className='h-20 w-80 overflow-hidden rounded-lg border border-border-subtle bg-surface'>
        <Resizable panels={panels('dragging')} forceState='dragging' />
      </div>
    ),
    note: 'active resize state — the divider stays highlighted and the resize cursor indicates that the panels can be moved',
  },
  {
    name: 'disabled',
    node: (
      <div className='h-20 w-80 overflow-hidden rounded-lg border border-border-subtle bg-surface'>
        <Resizable panels={panels('disabled')} disabled />
      </div>
    ),
    note: 'resizing is unavailable — the divider uses disabled styling and the existing panel sizes remain unchanged',
  },
  {
    name: 'collapsed',
    node: (
      <div className='h-20 w-80 overflow-hidden rounded-lg border border-border-subtle bg-surface'>
        <Resizable
          panels={[
            {
              id: 'collapsed-files',
              collapsible: true,
              collapsedSize: 0,
              defaultSize: 0,
              minSize: 25,
              children: body('Files'),
            },
            {
              id: 'collapsed-editor',
              minSize: 20,
              children: body('Editor'),
            },
          ]}
        />
      </div>
    ),
    note: 'one panel is collapsed to its minimum size while the handle remains available to restore it',
  },
];
