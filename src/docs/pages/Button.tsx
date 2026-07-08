import { DocsPage } from '../components/DocsPage';
import { ButtonPlayground } from '../components/playground/ButtonPlayground';
import { buttonProps } from '../../lib/buttonProps';
import { Button } from '../../components/button/Button';

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
      props={buttonProps}
    />
  );
}
