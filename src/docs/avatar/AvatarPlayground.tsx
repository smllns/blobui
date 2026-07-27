import { useState } from 'react';

import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';

import { generateAvatarCode } from './generateAvatarCode';
import { Avatar } from '../../components/avatar/Avatar';
import { AVATAR_CONTROLS, AVATAR_INITIAL_STATE } from './avatarConstants';

export function AvatarPlayground() {
  const [state, setState] = useState(AVATAR_INITIAL_STATE);

  const code = generateAvatarCode(state);

  const update = (key: string, value: any) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const initials = 'MS';

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={AVATAR_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center  gap-6'>
          <Avatar
            variant={state.variant}
            size={state.size}
            src={
              state.showImage ? 'https://i.pravatar.cc/150?img=3' : undefined
            }
            fallback={state.fallback ? initials : undefined}
          />
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
