import { DocsPage } from '../components/DocsPage';
import { CheckboxPlayground } from './CheckBoxPlayground';
import { Checkbox } from '../../components/checkbox/CheckBox';
import { componentProps } from '../../lib/props';

export function CheckboxDocs() {
  return (
    <DocsPage
      header='Checkbox'
      description='A checkbox component for selecting options.'
      preview={
        <>
          <Checkbox label='Unchecked' checked={false} />
          <Checkbox label='Checked' checked />
          <Checkbox label='Disabled' disabled />
          <Checkbox label='Error' error checked />
        </>
      }
      playground={<CheckboxPlayground />}
      props={componentProps.checkbox}
    />
  );
}
