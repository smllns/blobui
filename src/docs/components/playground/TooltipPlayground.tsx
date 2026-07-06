import { useState } from 'react';

import { Tooltip } from '../../../components/tooltip';
import { Button } from '../../../components/button';

import { ControlsRenderer } from './controls/ControlsRenderer';
import { CodeBlock } from '../CodeBlock';
import {
  TOOLTIP_INITIAL_STATE,
  tooltipControls,
} from './constants/tooltipConstants';
import { generateTooltipCode } from './codeGenerators/generateTooltipCode';
import { PlaygroundShell } from './PlaygroundShell';

export function TooltipPlayground() {
  const [state, setState] = useState(TOOLTIP_INITIAL_STATE);

  const code = generateTooltipCode(state);

  const update = (key: string, value: any) => {
    setState((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={tooltipControls}
        />
      }
      preview={
        <div className='flex items-center justify-center p-20'>
          <Tooltip
            content={state.content}
            variant={state.variant}
            size={state.size}
            side={state.side}
            align={state.align}
            startIcon={state.startIcon ? <span>💖</span> : undefined}
            endIcon={state.endIcon ? <span>✨</span> : undefined}
          >
            <Button>Hover me</Button>
          </Tooltip>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
