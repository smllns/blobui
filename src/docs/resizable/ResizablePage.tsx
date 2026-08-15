import { DocsPage } from '../components/DocsPage';
import { ResizablePreview } from './ResizablePreview';
import { ResizablePlayground } from './ResizablePlayground';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';

export function ResizableDocs() {
  return (
    <DocsPage
      header='Resizable'
      description='A desktop split view, and a divider that can be moved without a pointer.'
      preview={<ResizablePreview />}
      playground={<ResizablePlayground />}
      installation={getInstallation('resizable')}
      props={componentProps.resizable.root}
      subElementHeader='ResizablePanelItem'
      subElementProps={componentProps.resizable.item}
    />
  );
}
