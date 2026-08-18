import { NavigationMenu } from '@/components/navigation-menu/NavigationMenu';
import { NavigationMenuCard } from '@/components/navigation-menu/NavigationMenuCard';
import { NavigationMenuLink } from '@/components/navigation-menu/NavigationMenuLink';
import type { NavigationMenuForceState } from '@/components/navigation-menu/navigation-menu.types';
import type { StateSpecimen } from '../components/docsPage.types';
import { PRODUCT_ITEMS } from './navigationMenu.data';

function row({
  force,
  current,
  disabled,
}: {
  force?: NavigationMenuForceState;
  current?: boolean;
  disabled?: boolean;
} = {}) {
  return (
    <NavigationMenu aria-label='Marketing'>
      <NavigationMenuLink
        href='#'
        forceState={force}
        current={current}
        disabled={disabled}
      >
        Pricing
      </NavigationMenuLink>

      <NavigationMenuLink href='#'>Customers</NavigationMenuLink>
    </NavigationMenu>
  );
}

function card(force?: NavigationMenuForceState) {
  return (
    <div className='w-72'>
      <NavigationMenuCard href='#' forceState={force} {...PRODUCT_ITEMS[0]} />
    </div>
  );
}

export const NAVIGATION_MENU_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: row(),
    note: 'default state — secondary text keeps the navigation visually quiet',
  },
  {
    name: 'hover',
    node: row({ force: 'hover' }),
    note: 'hover state — the active item gets a subtle background and stronger text',
  },
  {
    name: 'focus',
    node: row({ force: 'focus' }),
    note: 'focus state — a visible focus ring identifies the keyboard-focused item',
  },
  {
    name: 'current',
    node: row({ current: true }),
    note: 'current page — uses persistent styling to show where the user is',
  },
  {
    name: 'disabled',
    node: row({ disabled: true }),
    note: 'disabled state — the destination remains visible but is unavailable',
  },
  {
    name: 'card · default',
    node: card(),
    note: 'default card — icon, title, and description provide context for the destination',
  },
  {
    name: 'card · hover',
    node: card('hover'),
    note: 'hover state — the card gets a subtle background and accent-colored icon',
  },
  {
    name: 'card · focus',
    node: card('focus'),
    note: 'focus state — a visible ring identifies the keyboard-focused card',
  },
];
