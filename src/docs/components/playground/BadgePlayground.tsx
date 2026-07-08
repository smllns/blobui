import { useState } from 'react';

import { PlaygroundShell } from './PlaygroundShell';
import { ControlsRenderer } from './controls/ControlsRenderer';
import { CodeBlock } from '../CodeBlock';

import {
  BADGE_INITIAL_STATE,
  BADGE_CONTROLS,
} from './constants/badgeConstants';

import { generateBadgeCode } from './codeGenerators/generateBadgeCode';
import { Badge } from '../../../components/badge/Badge';

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
