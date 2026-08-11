import { DocsPage } from '../components/DocsPage';
import { SelectPlayground } from './SelectPlayground';
import { componentProps } from '@/lib/props';
import { SelectPreview } from './SelectPreview';
import { getInstallation } from '../utils/getInstallation';

export function SelectDocs() {
  return (
    <DocsPage
      header='Select'
      description='A select component for capturing user data.'
      preview={<SelectPreview />}
      playground={<SelectPlayground />}
      installation={getInstallation('select')}
      props={componentProps.select.root}
      subElementProps={componentProps.select.item}
      subElementHeader='Select Item'
    />
  );
}
