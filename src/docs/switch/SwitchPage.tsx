import { DocsPage } from '../components/DocsPage';
import { Switch } from '../../components/switch/Switch';
import { SwitchPlayground } from './SwitchPlayground';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';

export function SwitchDocs() {
  return (
    <DocsPage
      header='Switch'
      description='Switches are used to toggle a value on or off.'
      preview={
        <>
          <Switch size='sm' label='Small' />
          <Switch size='md' label='Medium' defaultChecked />
          <Switch size='lg' label='Large' defaultChecked />
          <Switch size='xl' label='Extra large' />
        </>
      }
      playground={<SwitchPlayground />}
      installation={getInstallation('switch')}
      props={componentProps.switch}
    />
  );
}
