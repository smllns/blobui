import { DocsPage } from '../components/DocsPage';
import { NAVIGATION_MENU_STATES } from './navigationMenuStates';
import { NavigationMenuPlayground } from './NavigationMenuPlayground';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { NavigationMenuPreview } from './navigationMenu.preview';

export function NavigationMenuDocs() {
  return (
    <DocsPage
      header='Navigation Menu'
      description='A navigation menu for site-wide destinations, with optional dropdown panels for grouped links. Built for accessible link-based navigation, not an application-style menubar.'
      preview={
        <div className='w-full min-w-0 pb-60'>
          <NavigationMenuPreview />
        </div>
      }
      states={NAVIGATION_MENU_STATES}
      playground={<NavigationMenuPlayground />}
      installation={getInstallation('navigationMenu')}
      propSections={componentProps.navigationMenu}
    />
  );
}
