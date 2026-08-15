import { CodeBlock } from '../components/CodeBlock';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { NavigationMenu } from '@/components/navigation-menu/NavigationMenu';
import { NavigationMenuCard } from '@/components/navigation-menu/NavigationMenuCard';
import { NavigationMenuFeature } from '@/components/navigation-menu/NavigationMenuFeature';
import { NavigationMenuItem } from '@/components/navigation-menu/NavigationMenuItem';
import { NavigationMenuLink } from '@/components/navigation-menu/NavigationMenuLink';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import type {
  NavigationMenuColumns,
  NavigationMenuRows,
} from '@/components/navigation-menu/navigation-menu.types';
import {
  NAVIGATION_MENU_CONTROLS,
  NAVIGATION_MENU_INITIAL_STATE,
} from './navigationMenuConstants';
import { generateNavigationMenuCode } from './generateNavigationMenuCode';
import { PRODUCT_FEATURE, PRODUCT_ITEMS } from './navigationMenu.data';

export function NavigationMenuPlayground() {
  const { state, update } = usePlaygroundState(NAVIGATION_MENU_INITIAL_STATE);
  const code = generateNavigationMenuCode(state);

  const columns: NavigationMenuColumns =
    state.columns === '1' ? 1 : state.columns === '3' ? 3 : 2;

  const rows: NavigationMenuRows =
    state.rows === '2' ? 2 : state.rows === '3' ? 3 : 'auto';

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={NAVIGATION_MENU_CONTROLS}
        />
      }
      preview={
        <div className='flex min-h-60  w-full items-start justify-center'>
          <NavigationMenu aria-label='Playground' defaultValue='product'>
            <NavigationMenuItem
              className='z-999'
              value='product'
              label='Product'
              align={state.align}
              columns={columns}
              rows={rows}
            >
              {state.withFeature && (
                <NavigationMenuFeature
                  href='#'
                  {...PRODUCT_FEATURE}
                  icon={state.withIcons ? PRODUCT_FEATURE.icon : undefined}
                />
              )}

              {PRODUCT_ITEMS.map((item) => (
                <NavigationMenuCard
                  key={item.title}
                  href='#'
                  {...item}
                  icon={state.withIcons ? item.icon : undefined}
                />
              ))}
            </NavigationMenuItem>

            <NavigationMenuLink href='#'>Pricing</NavigationMenuLink>

            {state.current && (
              <NavigationMenuLink href='#' current>
                Customers
              </NavigationMenuLink>
            )}

            {state.disabled && (
              <NavigationMenuLink disabled>Enterprise</NavigationMenuLink>
            )}
          </NavigationMenu>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
