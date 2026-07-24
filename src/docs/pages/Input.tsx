import { DocsPage } from '../components/DocsPage';
import { InputPlayground } from '../components/playground/InputPlayground';
import { Input } from '../../components/input/Input';
import { componentProps } from '../../lib/props';

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
      playground={<InputPlayground />}
      props={componentProps.input}
    />
  );
}
