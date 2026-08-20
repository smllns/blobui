import { DocsPage } from '../components/DocsPage';
import { AvatarPlayground } from './AvatarPlayground';
import { Avatar } from '@/components/avatar/Avatar';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { AVATAR_STATES } from './avatarStates';

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
      states={AVATAR_STATES}
      playground={<AvatarPlayground />}
      installation={getInstallation('avatar')}
      propSections={componentProps.avatar}
    />
  );
}
