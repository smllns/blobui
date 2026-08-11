import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { generateAvatarCode } from './generateAvatarCode';
import { Avatar } from '../../components/avatar/Avatar';
import { AVATAR_CONTROLS, AVATAR_INITIAL_STATE } from './avatarConstants';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

export function AvatarPlayground() {
  const { state, update } = usePlaygroundState(AVATAR_INITIAL_STATE);
  const code = generateAvatarCode(state);
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
            shape={state.shape}
            size={state.size}
            status={state.status === 'none' ? undefined : state.status}
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
