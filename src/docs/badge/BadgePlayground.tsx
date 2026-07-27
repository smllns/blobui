import { useState } from 'react';
import { BADGE_CONTROLS, BADGE_INITIAL_STATE } from './badgeConstants';
import { generateBadgeCode } from './generateBadgeCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Badge } from '../../components/badge/Badge';
import { CodeBlock } from '../components/CodeBlock';

export function BadgePlayground() {
  const [state, setState] = useState(BADGE_INITIAL_STATE);

  const code = generateBadgeCode(state);

  const update = (key: string, value: any) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={BADGE_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center '>
          <Badge
            variant={state.variant}
            size={state.size}
            leftIcon={state.leftIcon ? <span>🔥</span> : undefined}
            rightIcon={state.rightIcon ? <span>⚡</span> : undefined}
          >
            Badge
          </Badge>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
