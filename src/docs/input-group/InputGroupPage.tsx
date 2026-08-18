import { DocsPage } from '../components/DocsPage';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { INPUT_GROUP_STATES } from './inputGroupStates';
import { InputGroupPlayground } from './InputGroupPlayground';
import InputGroupPreview from './InputGroupPreview';

export function InputGroupDocs() {
  return (
    <DocsPage
      header='Input group'
      description='A field and its addons in one shell: one border, one focus ring, hairline partitions. Waiting lives here too — the spinner goes in an addon, not in a prop on the field.'
      preview={<InputGroupPreview />}
      states={INPUT_GROUP_STATES}
      playground={<InputGroupPlayground />}
      installation={getInstallation('inputGroup')}
      props={componentProps.inputGroup.root}
      subElementHeader='Addon'
      subElementProps={componentProps.inputGroup.item}
    />
  );
}
