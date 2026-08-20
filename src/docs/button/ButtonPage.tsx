import { DocsPage } from '../components/DocsPage';
import { getInstallation } from '../utils/getInstallation';
import { ButtonPlayground } from './ButtonPlayground';
import { Button } from '@/components/button/Button';
import { componentProps } from '@/lib/props';
import { BTN_STATES } from './buttonStates';

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
      states={BTN_STATES}
      playground={<ButtonPlayground />}
      installation={getInstallation('button')}
      propSections={componentProps.button}
    />
  );
}
