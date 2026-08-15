type ColourRole = {
  name: string;
  token: string;
  swatch: string;
};

type TypeStep = {
  name: string;
  sample: string;
};

type RadiusStep = {
  name: string;
  corner: string;
};

type ElevationStep = {
  name: string;
  lift: string;
};

type Stat = {
  value: string;
  label: string;
};

type RegistryLine = {
  name: string;
  detail: string;
};

export const ROLES: ColourRole[] = [
  { name: 'bg/canvas', token: '--bg-canvas', swatch: 'bg-canvas' },
  { name: 'bg/surface', token: '--bg-surface', swatch: 'bg-surface' },
  { name: 'bg/raised', token: '--bg-raised', swatch: 'bg-raised' },
  { name: 'bg/sunken', token: '--bg-sunken', swatch: 'bg-sunken' },
  { name: 'bg/subtle', token: '--bg-subtle', swatch: 'bg-subtle' },
  { name: 'border/default', token: '--border-default', swatch: 'bg-border' },
  { name: 'text/primary', token: '--text-primary', swatch: 'bg-fg' },
  {
    name: 'text/secondary',
    token: '--text-secondary',
    swatch: 'bg-fg-secondary',
  },
  { name: 'primary/solid', token: '--primary-solid', swatch: 'bg-primary' },
  {
    name: 'primary/muted',
    token: '--primary-muted',
    swatch: 'bg-primary-muted',
  },
  { name: 'success/solid', token: '--success-solid', swatch: 'bg-success' },
  { name: 'warning/solid', token: '--warning-solid', swatch: 'bg-warning' },
  { name: 'danger/solid', token: '--danger-solid', swatch: 'bg-danger' },
  { name: 'info/solid', token: '--info-solid', swatch: 'bg-info' },
];

export const TYPE: TypeStep[] = [
  { name: 'display-2xl', sample: 'text-display-2xl' },
  { name: 'display-xl', sample: 'text-display-xl' },
  { name: 'display-lg', sample: 'text-display-lg' },
  { name: 'heading-xl', sample: 'text-heading-xl' },
  { name: 'heading-lg', sample: 'text-heading-lg' },
  { name: 'heading-md', sample: 'text-heading-md' },
  { name: 'body-lg', sample: 'text-body-lg' },
  { name: 'body-md', sample: 'text-body-md' },
  { name: 'body-sm', sample: 'text-body-sm' },
  { name: 'caption', sample: 'text-caption' },
  { name: 'micro', sample: 'text-micro' },
  { name: 'field', sample: 'text-field' },
];

export const SPACE: number[] = Array.from({ length: 16 }, (_, step) => step);

export const RADII: RadiusStep[] = [
  { name: 'xs', corner: 'rounded-xs' },
  { name: 'sm', corner: 'rounded-sm' },
  { name: 'md', corner: 'rounded-md' },
  { name: 'lg', corner: 'rounded-lg' },
  { name: 'xl', corner: 'rounded-xl' },
  { name: '2xl', corner: 'rounded-2xl' },
  { name: '3xl', corner: 'rounded-3xl' },
  { name: 'full', corner: 'rounded-full' },
];

export const LIFTS: ElevationStep[] = [
  { name: 'xs', lift: 'shadow-xs' },
  { name: 'sm', lift: 'shadow-sm' },
  { name: 'md', lift: 'shadow-md' },
  { name: 'lg', lift: 'shadow-lg' },
  { name: 'xl', lift: 'shadow-xl' },
  { name: '2xl', lift: 'shadow-2xl' },
];

export const STATS: Stat[] = [
  { value: '20', label: 'components in the React library' },
  { value: '351', label: 'icons, one file each' },
  { value: '22', label: 'color families, 25–950' },
  { value: '2', label: 'themes, four accents' },
  { value: '0', label: 'raw hex values in any component' },
];

export const INSTALL_COMMAND = 'npx blobui add button';

export const REGISTRY_OUTPUT: RegistryLine[] = [
  { name: 'theme', detail: '4 files · the token layer' },
  { name: 'button', detail: '3 files' },
  { name: 'shared', detail: '2 files' },
  { name: 'lib', detail: '1 file' },
  { name: 'ui', detail: '2 files' },
];
