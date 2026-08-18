import type { NavigationMenuAlign } from '@/components/navigation-menu/navigation-menu.types';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export const NAVIGATION_MENU_ALIGN_OPTIONS: NavigationMenuAlign[] = [
  'start',
  'end',
];

export const NAVIGATION_MENU_COLUMN_OPTIONS = ['1', '2', '3'];

export const NAVIGATION_MENU_ROW_OPTIONS = ['auto', '2', '3'];

export type NavigationMenuPlaygroundState = {
  align: NavigationMenuAlign;
  columns: '1' | '2' | '3';
  rows: 'auto' | '2' | '3';
  withIcons: boolean;
  withFeature: boolean;
  current: boolean;
  disabled: boolean;
};

export const NAVIGATION_MENU_INITIAL_STATE: NavigationMenuPlaygroundState = {
  align: 'start',
  columns: '2',
  rows: 'auto',
  withIcons: true,
  withFeature: false,
  current: true,
  disabled: true,
};

export const NAVIGATION_MENU_CONTROLS = [
  selectControl<NavigationMenuPlaygroundState>(
    'align',
    'Panel Align',
    NAVIGATION_MENU_ALIGN_OPTIONS,
  ),
  selectControl<NavigationMenuPlaygroundState>(
    'columns',
    'Panel Columns',
    NAVIGATION_MENU_COLUMN_OPTIONS,
  ),
  selectControl<NavigationMenuPlaygroundState>(
    'rows',
    'Panel Rows',
    NAVIGATION_MENU_ROW_OPTIONS,
  ),
  checkboxControl<NavigationMenuPlaygroundState>('withIcons', 'Card Icons'),
  checkboxControl<NavigationMenuPlaygroundState>('withFeature', 'Feature Cell'),
  checkboxControl<NavigationMenuPlaygroundState>('current', 'Current Row'),
  checkboxControl<NavigationMenuPlaygroundState>('disabled', 'Disabled Row'),
];
