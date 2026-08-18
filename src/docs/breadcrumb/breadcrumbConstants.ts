import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type BreadcrumbSeparatorKind = 'chevron' | 'slash' | 'dot';

export type BreadcrumbCollapse = 'off' | '4' | '3';

export type BreadcrumbPlaygroundState = {
  separator: BreadcrumbSeparatorKind;
  collapse: BreadcrumbCollapse;
  icon: boolean;
  disabled: boolean;
};

export const BREADCRUMB_SEPARATOR_OPTIONS: BreadcrumbSeparatorKind[] = [
  'chevron',
  'slash',
  'dot',
];

export const BREADCRUMB_COLLAPSE_OPTIONS: BreadcrumbCollapse[] = [
  'off',
  '4',
  '3',
];

export const BREADCRUMB_SEPARATOR_CHAR: Record<
  Exclude<BreadcrumbSeparatorKind, 'chevron'>,
  string
> = {
  slash: '/',
  dot: '·',
};

export const BREADCRUMB_INITIAL_STATE: BreadcrumbPlaygroundState = {
  separator: 'chevron',
  collapse: 'off',
  icon: true,
  disabled: false,
};

export const BREADCRUMB_CONTROLS = [
  selectControl<BreadcrumbPlaygroundState>(
    'separator',
    'Separator',
    BREADCRUMB_SEPARATOR_OPTIONS,
  ),
  selectControl<BreadcrumbPlaygroundState>(
    'collapse',
    'Max items',
    BREADCRUMB_COLLAPSE_OPTIONS,
  ),
  checkboxControl<BreadcrumbPlaygroundState>('icon', 'Home icon'),
  checkboxControl<BreadcrumbPlaygroundState>('disabled', 'Disabled level'),
];
