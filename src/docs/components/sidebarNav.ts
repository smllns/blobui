export type NavItem = {
  label: string;
  to: string;
  anchor?: boolean;
};
export type NavGroup = { label: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    label: 'Get started',
    items: [
      { label: 'Overview', to: '/#overview', anchor: true },
      { label: 'Install', to: '/#install', anchor: true },
    ],
  },
  {
    label: 'Foundations',
    items: [
      { label: 'Colour', to: '/#colour', anchor: true },
      { label: 'Typography', to: '/#type', anchor: true },
      { label: 'Space & radius', to: '/#space', anchor: true },
      { label: 'Elevation', to: '/#elevation', anchor: true },
    ],
  },
  {
    label: 'Atoms',
    items: [
      { label: 'Button', to: '/button' },
      { label: 'Badge', to: '/badge' },
      { label: 'Avatar', to: '/avatar' },
      { label: 'Checkbox', to: '/checkbox' },
      { label: 'Radio', to: '/radio' },
      { label: 'Switch', to: '/switch' },
      { label: 'Toggle', to: '/toggle' },
      { label: 'Progress', to: '/progress' },
      { label: 'Breadcrumb', to: '/breadcrumb' },
      { label: 'Kbd', to: '/kbd' },
    ],
  },
  {
    label: 'Molecules',
    items: [
      { label: 'Button group', to: '/button-group' },
      { label: 'Input', to: '/input' },
      { label: 'Input group', to: '/input-group' },
      { label: 'Input OTP', to: '/input-otp' },
      { label: 'Select', to: '/select' },
      { label: 'Card', to: '/card' },
      { label: 'Toast', to: '/toast' },
      { label: 'Alert', to: '/alert' },
      { label: 'Slider', to: '/slider' },
      { label: 'Tabs', to: '/tabs' },
      { label: 'Segmented', to: '/segmented' },
      { label: 'Collapsible', to: '/collapsible' },
      { label: 'Pagination', to: '/pagination' },
      { label: 'Empty state', to: '/empty' },
    ],
  },
  {
    label: 'Organisms',
    items: [
      { label: 'Accordion', to: '/accordion' },
      { label: 'Dialog', to: '/dialog' },
      { label: 'Alert dialog', to: '/alert-dialog' },
      { label: 'Sheet', to: '/sheet' },
      { label: 'Dropdown', to: '/dropdown' },
      { label: 'Context menu', to: '/context-menu' },
      { label: 'Popover', to: '/popover' },
      { label: 'Tooltip', to: '/tooltip' },
      { label: 'Hover card', to: '/hover-card' },
      { label: 'Navigation menu', to: '/navigation-menu' },
      { label: 'Resizable', to: '/resizable' },
    ],
  },
];

export const navTotal = navGroups
  .flatMap((g) => g.items)
  .filter((i) => !i.anchor && i.to !== '/').length;

export const componentLabels = new Set(
  navGroups
    .flatMap((g) => g.items)
    .filter((i) => !i.anchor && i.to !== '/')
    .map((i) => i.label),
);

export function matchLabel(label: string, query: string) {
  if (!query) return null;
  const at = label.toLowerCase().indexOf(query.toLowerCase());
  return at < 0 ? null : { at, length: query.length };
}
