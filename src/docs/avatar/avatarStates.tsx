import { Avatar } from '@/components/avatar/Avatar';
import type { StateSpecimen } from '../components/docsPage.types';

const PHOTO = 'https://i.pravatar.cc/150?img=3';

export const AVATAR_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: <Avatar fallback='MS' />,
    note: 'default — shows user initials when no image is provided.',
  },
  {
    name: 'image',
    node: <Avatar src={PHOTO} alt='Maria Sokolova' fallback='MS' />,
    note: 'image — displays a user image with initials as a fallback.',
  },
  {
    name: 'empty',
    node: <Avatar />,
    note: 'empty — no image or initials; the avatar still preserves its size and layout.',
  },
  {
    name: 'status',
    node: (
      <div className='flex flex-row gap-2'>
        <Avatar fallback='MS' status='online' />
        <Avatar fallback='MS' status='busy' />
        <Avatar fallback='MS' status='away' />
        <Avatar fallback='MS' status='offline' />
      </div>
    ),
    note: 'status — indicates the person’s presence: online, busy, away, or offline.',
  },
];
