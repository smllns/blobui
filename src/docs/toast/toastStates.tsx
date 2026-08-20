import { Toast } from '@/components/toast/Toast';
import type { ToastProps } from '@/components/toast/toast.types';
import { Button } from '@/components/button/Button';
import { ToastEnterReplay, ToastExitReplay } from './ToastReplay';
import type { StateSpecimen } from '../components/docsPage.types';
import type { ForceState } from '@/components/shared/types';

const sample = (props: Partial<ToastProps> = {}) => (
  <Toast
    size='sm'
    tone='success'
    title='Invoice sent'
    description='A copy is on its way to billing@acme.com.'
    {...props}
  />
);

const withForcedAction = (force: ForceState) =>
  sample({
    action: (
      <Button size='xs' variant='ghost' forceState={force}>
        Undo
      </Button>
    ),
  });

export const TOAST_STATES: StateSpecimen[] = [
  {
    name: 'open',
    node: sample(),
    note: 'the toast is visible and waiting for the user to dismiss it or for its duration to expire',
  },
  {
    name: 'enter',
    node: <ToastEnterReplay />,
    note: 'the toast slides in from below with a short fade and scale transition',
  },
  {
    name: 'closing',
    node: <ToastExitReplay />,
    note: 'the toast slides down and fades out before being removed from the DOM',
  },
  {
    name: 'hover',
    node: withForcedAction('hover'),
    note: 'the toast surface stays unchanged; hover styling belongs to its action buttons',
  },
  {
    name: 'active',
    node: withForcedAction('active'),
    note: 'the action button uses the same pressed state as other buttons',
  },
  {
    name: 'invalid',
    node: sample({
      tone: 'danger',
      title: 'Invoice not sent',
      description: 'The address bounced.',
    }),
    note: 'danger tone communicates an error; persistent or important errors should use an Alert instead',
  },
];
