import { DocsPage } from '../components/DocsPage';
import { AvatarPlayground } from './AvatarPlayground';
import { Avatar } from '../../components/avatar/Avatar';
import { componentProps } from '../../lib/props';

export function AvatarDocs() {
  return (
    <DocsPage
      header='Avatar'
      description='Avatars are used to display a small piece of information.'
      preview={
        <>
          <Avatar variant='default' fallback='A' />
          <Avatar variant='outline' fallback='B' />
          <Avatar variant='filled' fallback='C' />
          <Avatar variant='ghost' fallback='D' />
        </>
      }
      playground={<AvatarPlayground />}
      props={componentProps.avatar}
    />
  );
}
