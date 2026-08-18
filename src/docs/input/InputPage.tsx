import { DocsPage } from '../components/DocsPage';
import { InputPlayground } from './InputPlayground';
import { Input } from '@/components/input/Input';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { INPUT_STATES } from './inputStates';

export function InputDocs() {
  return (
    <DocsPage
      header='Input'
      description='A text input component for capturing user data.'
      preview={
        <>
          <Input variant='default' placeholder='Default' />
          <Input variant='filled' placeholder='Filled' />
          <Input variant='outline' placeholder='Outline' />
          <Input variant='ghost' placeholder='Ghost' />
        </>
      }
      states={INPUT_STATES}
      playground={<InputPlayground />}
      installation={getInstallation('input')}
      props={componentProps.input}
    />
  );
}
