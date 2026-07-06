import { DocsPage } from '../components/DocsPage';
import { Avatar } from '../../components/avatar';
import { AvatarPlayground } from '../components/playground/AvatarPlayground';
import { avatarProps } from '../../lib/avatarProps';

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
