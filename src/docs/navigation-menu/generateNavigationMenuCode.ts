import type { NavigationMenuPlaygroundState } from './navigationMenuConstants';

export function generateNavigationMenuCode({
  align,
  columns,
  rows,
  withIcons,
  withFeature,
  current,
  disabled,
}: NavigationMenuPlaygroundState) {
  const itemProps = [
    align !== 'start' && `align="${align}"`,
    columns !== '2' && `columns={${columns}}`,
    rows !== 'auto' && `rows={${rows}}`,
  ]
    .filter(Boolean)
    .join('\n    ');

  const feature = withFeature
    ? `
      <NavigationMenuFeature
        href="/changelog"
        ${withIcons ? 'icon={<Sparkles size="lg" />}' : ''}
        title="What shipped this quarter"
        description="Twelve components and the migration notes for both."
      />`
    : '';

  const cards = [
    {
      href: '/design-system',
      title: 'Design system',
      description: 'Tokens, components and the rules that keep them honest.',
      icon: 'Layers',
    },
    {
      href: '/automations',
      title: 'Automations',
      description:
        'Wire the boring half of the workflow to something that never forgets.',
      icon: 'Zap',
    },
    {
      href: '/analytics',
      title: 'Analytics',
      description:
        'What people actually did, not what the roadmap hoped they would.',
      icon: 'Gauge',
    },
    {
      href: '/access-control',
      title: 'Access control',
      description: 'Roles, scopes and an audit trail that survives the review.',
      icon: 'Shield',
    },
  ];

  const cardsMarkup = cards
    .map(
      ({ href, title, description, icon }) => `
      <NavigationMenuCard
        href="${href}"
        ${withIcons ? `icon={<${icon} size="lg" />}` : ''}
        title="${title}"
        description="${description}"
      />`,
    )
    .join('\n');

  const links = [
    `<NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>`,
    current
      ? `<NavigationMenuLink href="/customers" current>
      Customers
    </NavigationMenuLink>`
      : null,
    disabled
      ? `<NavigationMenuLink disabled>Enterprise</NavigationMenuLink>`
      : null,
  ]
    .filter(Boolean)
    .join('\n\n');

  return `<NavigationMenu aria-label="Playground" defaultValue="product">
  <NavigationMenuItem
    value="product"
    label="Product"${itemProps ? `\n    ${itemProps}` : ''}
  >${feature}
${cardsMarkup}
  </NavigationMenuItem>

  ${links}
</NavigationMenu>`;
}
