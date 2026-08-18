import {
  BREADCRUMB_SEPARATOR_CHAR,
  type BreadcrumbPlaygroundState,
} from './breadcrumbConstants';

const TRAIL = [
  { label: 'Home', href: '' },
  { label: 'Projects', href: '' },
  { label: 'Blob UI', href: '' },
  { label: 'Components', href: '' },
  { label: 'Breadcrumb' },
];

export function generateBreadcrumbCode(state: BreadcrumbPlaygroundState) {
  const items = TRAIL.map((item, index) => {
    const entry = [
      `label: '${item.label}'`,
      item.href && `href: '${item.href}'`,
      state.icon && index === 0 && 'icon: <Home />',
      state.disabled && index === 1 && 'disabled: true',
    ].filter(Boolean);

    return `  { ${entry.join(', ')} },`;
  }).join('\n');

  const props = [
    state.separator !== 'chevron' &&
      `separator="${BREADCRUMB_SEPARATOR_CHAR[state.separator]}"`,
    state.collapse !== 'off' && `maxItems={${state.collapse}}`,
  ].filter(Boolean);

  return `
const trail = [
${items}
];

<Breadcrumb
  items={trail}${props.length ? `\n  ${props.join('\n  ')}` : ''}
/>
`.trim();
}
