import { DocsPage } from '../components/DocsPage';
import { CheckboxPlayground } from './CheckBoxPlayground';
import { Checkbox } from '@/components/checkbox/CheckBox';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { CHECKBOX_STATES } from './checkboxStates';

export function CheckboxDocs() {
  return (
    <DocsPage
      header='Checkbox'
      description='A checkbox component for selecting options.'
      preview={
        <>
          <Checkbox label='Unchecked' checked={false} onChange={() => {}} />
          <Checkbox label='Checked' checked onChange={() => {}} />
          <Checkbox label='Disabled' disabled />
          <Checkbox label='Error' checked error onChange={() => {}} />
        </>
      }
      states={CHECKBOX_STATES}
      playground={<CheckboxPlayground />}
      installation={getInstallation('checkbox')}
      propSections={componentProps.checkbox}
    />
  );
}
