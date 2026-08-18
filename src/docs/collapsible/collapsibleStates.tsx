import { Collapsible } from '@/components/collapsible/Collapsible';
import type { CollapsibleProps } from '@/components/collapsible/collapsible.types';
import type { StateSpecimen } from '../components/docsPage.types';

const replies = [
  'Kate — this is the part I keep coming back to.',
  'Miro — same, the second paragraph answers it.',
];

const sample = (props: Omit<CollapsibleProps, 'trigger' | 'children'> = {}) => (
  <Collapsible
    trigger='Show 2 more replies'
    triggerOpen='Show less'
    className='w-64'
    {...props}
  >
    <ul className='flex flex-col gap-2'>
      {replies.map((reply) => (
        <li key={reply}>{reply}</li>
      ))}
    </ul>
  </Collapsible>
);

export const COLLAPSIBLE_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: sample(),
    note: 'closed state — the content is hidden and the chevron points down',
  },
  {
    name: 'open',
    node: sample({ defaultOpen: true }),
    note: 'open state — the content is expanded and the chevron points up',
  },
  {
    name: 'hover',
    node: sample({ forceState: 'hover' }),
    note: 'hover state on the trigger, providing clear feedback that it can be opened or closed',
  },
  {
    name: 'focus',
    node: sample({ forceState: 'active' }),
    note: 'focused trigger — provides a visible focus ring for keyboard navigation',
  },
  {
    name: 'disabled',
    node: sample({ disabled: true, defaultOpen: true }),
    note: 'disabled trigger — the current open or closed state is preserved, but the trigger cannot be interacted with',
  },
  {
    name: 'loading',
    node: sample({ loading: true }),
    note: 'loading state — indicates that the disclosure is processing an action while keeping the content accessible',
  },
];
