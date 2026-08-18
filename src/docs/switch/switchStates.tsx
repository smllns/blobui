import { Switch } from '@/components/switch/Switch';
import type { StateSpecimen } from '../components/docsPage.types';

export const SWITCH_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: <Switch label='Notify me' />,
    note: 'resting state — the switch is off and ready to be toggled',
  },
  {
    name: 'hover',
    node: <Switch label='Notify me' forceState='hover' />,
    note: 'hover state — the control becomes more prominent to indicate that it is interactive',
  },
  {
    name: 'focus',
    node: <Switch label='Notify me' forceState='focus' />,
    note: 'focus state — a visible ring identifies the switch when reached by keyboard',
  },
  {
    name: 'on',
    node: <Switch label='Notify me' defaultChecked />,
    note: 'on state — the switch clearly indicates that the setting is enabled',
  },
  {
    name: 'on · hover',
    node: <Switch label='Notify me' defaultChecked forceState='hover' />,
    note: 'hovering an enabled switch adds the hover treatment while keeping the on state visible',
  },
  {
    name: 'disabled',
    node: <Switch label='Notify me' disabled />,
    note: 'disabled state — the switch cannot be changed and uses muted styling',
  },
  {
    name: 'disabled · on',
    node: <Switch label='Notify me' defaultChecked disabled />,
    note: 'disabled and enabled — the current setting remains visible even though it cannot be changed',
  },
  {
    name: 'invalid',
    node: (
      <Switch
        label='Notify me'
        error
        errorMessage='Pick a channel before turning this on'
      />
    ),
    note: 'invalid state — the switch uses danger styling and the message explains what needs to be fixed',
  },
];
