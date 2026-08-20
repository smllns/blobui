import { DocsPage } from '../components/DocsPage';
import { PAGINATION_STATES } from './paginationStates';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { PaginationPlayground } from './PaginationPlayground';
import { PaginationPreview } from './PaginationPreview';

export function PaginationDocs() {
  return (
    <DocsPage
      header='Pagination'
      description='A compact control for navigating between pages of content and showing the current position within a larger set.'
      preview={<PaginationPreview />}
      states={PAGINATION_STATES}
      playground={<PaginationPlayground />}
      installation={getInstallation('pagination')}
      propSections={componentProps.pagination}
    />
  );
}
