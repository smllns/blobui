import { DocsPage } from '../components/DocsPage';
import { Switch } from '../../components/switch/Switch';
import { SwitchPlayground } from './SwitchPlayground';
import { componentProps } from '../../lib/props';

export function SwitchDocs() {
  return (
    <DocsPage
      header='Switch'
      description='Switches are used to toggle a value on or off.'
      preview={
        <>
          <Switch variant='default' label='Default' />
          <Switch variant='filled' label='Filled' />
          <Switch variant='outline' label='Outline' />
          <Switch variant='ghost' label='Ghost' />
        </>
      }
      playground={<SwitchPlayground />}
      props={componentProps.switch}
    />
  );
}
