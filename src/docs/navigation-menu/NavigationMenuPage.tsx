import { DocsPage } from '../components/DocsPage';
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
        <div className='pb-60 -ml-60'>
          <NavigationMenuPreview />
        </div>
      }
      playground={<NavigationMenuPlayground />}
      installation={getInstallation('navigationMenu')}
      props={componentProps.navigationMenu.root}
      subElementProps={componentProps.navigationMenu.item}
      subElementHeader='Navigation Menu Item'
      secondSubElementProps={componentProps.navigationMenu.item2}
      secondSubElementHeader='Navigation Menu Card'
    />
  );
}
