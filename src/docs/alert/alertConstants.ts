import type { AlertProps, AlertTone } from '@/components/alert/alert.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type AlertEmphasis = NonNullable<AlertProps['emphasis']>;

export type AlertPlaygroundState = {
  tone: AlertTone;
  emphasis: AlertEmphasis;
  title: boolean;
  icon: boolean;
  actions: boolean;
  dismissible: boolean;
};

export const ALERT_TONE_OPTIONS: AlertTone[] = [
  'neutral',
  'info',
  'success',
  'warning',
  'danger',
];

export const ALERT_EMPHASIS_OPTIONS: AlertEmphasis[] = ['subtle', 'bare'];

export const ALERT_INITIAL_STATE: AlertPlaygroundState = {
  tone: 'info',
  emphasis: 'subtle',
  title: true,
  icon: true,
  actions: false,
  dismissible: true,
};

export const ALERT_CONTROLS = [
  selectControl<AlertPlaygroundState>('tone', 'Tone', ALERT_TONE_OPTIONS),
  selectControl<AlertPlaygroundState>(
    'emphasis',
    'Emphasis',
    ALERT_EMPHASIS_OPTIONS,
  ),
  checkboxControl<AlertPlaygroundState>('title', 'Title'),
  checkboxControl<AlertPlaygroundState>('icon', 'Icon'),
  checkboxControl<AlertPlaygroundState>('actions', 'Actions'),
  checkboxControl<AlertPlaygroundState>('dismissible', 'Dismissible'),
];

export const ALERT_COPY = {
  title: 'This table is out of date',
  body: 'Figures were last synced 14 hours ago.',
};
