import { Activity } from '@/ui/icons/Activity';
import { Grid } from '@/ui/icons/Grid';
import { Settings } from '@/ui/icons/Settings';

export const SECTIONS = [
  { value: 'overview', label: 'Overview', icon: <Grid />, iconName: 'Grid' },
  {
    value: 'activity',
    label: 'Activity',
    icon: <Activity />,
    iconName: 'Activity',
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: <Settings />,
    iconName: 'Settings',
  },
];

export const PANELS: Record<string, string> = {
  overview: 'One place to see what the workspace is doing right now.',
  activity: 'Everything that happened, newest first.',
  settings: 'Who can see this workspace, and what they may change.',
};
