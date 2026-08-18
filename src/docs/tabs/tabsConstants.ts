import type { BasicSize } from '@/components/shared/types';
import type {
  TabsActivation,
  TabsOrientation,
} from '@/components/tabs/tabs.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';
import { BASIC_SIZE_OPTIONS } from '@/lib/options';

export type TabsPlaygroundState = {
  orientation: TabsOrientation;
  size: BasicSize;
  activation: TabsActivation;
  block: boolean;
  icons: boolean;
  panels: boolean;
  disabled: boolean;
};

export const TABS_INITIAL_STATE: TabsPlaygroundState = {
  orientation: 'horizontal',
  size: 'md',
  activation: 'automatic',
  block: false,
  icons: true,
  panels: true,
  disabled: false,
};

const TABS_ORIENTATIONS: TabsOrientation[] = ['horizontal', 'vertical'];
const TABS_ACTIVATIONS: TabsActivation[] = ['automatic', 'manual'];

export const TABS_CONTROLS = [
  selectControl<TabsPlaygroundState>(
    'orientation',
    'Orientation',
    TABS_ORIENTATIONS,
  ),
  selectControl<TabsPlaygroundState>('size', 'Size', BASIC_SIZE_OPTIONS),
  selectControl<TabsPlaygroundState>(
    'activation',
    'Activation',
    TABS_ACTIVATIONS,
  ),
  checkboxControl<TabsPlaygroundState>('block', 'Block'),
  checkboxControl<TabsPlaygroundState>('icons', 'Icons'),
  checkboxControl<TabsPlaygroundState>('panels', 'Panels'),
  checkboxControl<TabsPlaygroundState>('disabled', 'Disable last tab'),
];
