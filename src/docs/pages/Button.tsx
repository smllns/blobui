import { DocsPage } from '../components/DocsPage';
import { ButtonPlayground } from '../components/playground/ButtonPlayground';
import { Button } from '../../components/button/Button';
import { componentProps } from '../../lib/props';

export function ButtonDocs() {
  return (
    <DocsPage
      header='Button'
      description='Buttons allow users to trigger actions.'
      preview={
        <>
          <Button>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='destructive'>Destructive</Button>
        </>
      }
      playground={<ButtonPlayground />}
      props={componentProps.button}
    />
  );
}
