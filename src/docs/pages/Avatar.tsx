import { DocsPage } from '../components/DocsPage';
import { AvatarPlayground } from '../components/playground/AvatarPlayground';
import { avatarProps } from '../../lib/avatarProps';
import { Avatar } from '../../components/avatar/Avatar';

export function AvatarDocs() {
  return (
    <DocsPage
      header='Avatar'
      description='Avatars are used to display a small piece of information.'
      preview={
        <>
          <Avatar variant='default' fallback='A' />
          <Avatar variant='outline' fallback='B' />
          <Avatar variant='soft' fallback='C' />
          <Avatar variant='ghost' fallback='D' />
        </>
      }
      playground={<AvatarPlayground />}
      props={avatarProps}
    />
  );
}
