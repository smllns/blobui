import { DocsPage } from '../components/DocsPage';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { BREADCRUMB_STATES } from './breadcrumbStates';
import { BreadcrumbPlayground } from './BreadcrumbPlayground';
import BreadcrumbPreview from './BreadcrumbPreview';

export function BreadcrumbDocs() {
  return (
    <DocsPage
      header='Breadcrumb'
      description='Shows the current page’s location within a hierarchy, with each step linking back to its parent.'
      preview={<BreadcrumbPreview />}
      states={BREADCRUMB_STATES}
      playground={<BreadcrumbPlayground />}
      installation={getInstallation('breadcrumb')}
      props={componentProps.breadcrumb.root}
      subElementProps={componentProps.breadcrumb.item}
      subElementHeader='Breadcrumb Item'
    />
  );
}
