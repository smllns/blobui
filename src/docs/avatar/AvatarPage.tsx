import { DocsPage } from '../components/DocsPage';
import { AvatarPlayground } from './AvatarPlayground';
import { Avatar } from '../../components/avatar/Avatar';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';

export function AvatarDocs() {
  return (
    <DocsPage
      header='Avatar'
      description='Avatars are used to display a small piece of information.'
      preview={
        <>
          <Avatar fallback='A' />
          <Avatar fallback='B' shape='square' />
          <Avatar fallback='C' status='online' />
          <Avatar fallback='D' status='busy' />
        </>
      }
      playground={<AvatarPlayground />}
      installation={getInstallation('avatar')}
      props={componentProps.avatar}
    />
  );
}
