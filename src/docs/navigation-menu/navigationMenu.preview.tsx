import { NavigationMenu } from '@/components/navigation-menu/NavigationMenu';
import { NavigationMenuCard } from '@/components/navigation-menu/NavigationMenuCard';
import { NavigationMenuFeature } from '@/components/navigation-menu/NavigationMenuFeature';
import { NavigationMenuItem } from '@/components/navigation-menu/NavigationMenuItem';
import { NavigationMenuLink } from '@/components/navigation-menu/NavigationMenuLink';

import {
  PRODUCT_FEATURE,
  PRODUCT_ITEMS,
  RESOURCES_ITEMS,
} from './navigationMenu.data';

function NavigationCards({ items }: { items: typeof PRODUCT_ITEMS }) {
  return (
    <>
      {items.map((item) => (
        <NavigationMenuCard key={item.title} href='#' {...item} />
      ))}
    </>
  );
}

export function NavigationMenuPreview() {
  return (
    <NavigationMenu aria-label='Marketing' defaultValue='product'>
      <NavigationMenuItem value='product' label='Product' columns={3} rows={2}>
        <NavigationMenuFeature href='#' {...PRODUCT_FEATURE} />

        <NavigationCards items={PRODUCT_ITEMS} />
      </NavigationMenuItem>

      <NavigationMenuItem value='resources' label='Resources' columns={2}>
        <NavigationCards items={RESOURCES_ITEMS} />
      </NavigationMenuItem>

      <NavigationMenuLink href='#'>Pricing</NavigationMenuLink>

      <NavigationMenuLink href='#' current>
        Customers
      </NavigationMenuLink>

      <NavigationMenuLink disabled>Enterprise</NavigationMenuLink>
    </NavigationMenu>
  );
}
