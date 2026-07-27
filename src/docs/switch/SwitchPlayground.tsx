import { useState } from 'react';

import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';

import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { SWITCH_INITIAL_STATE, switchControls } from './switchConstants';
import { generateSwitchCode } from './generateSwitchCode';
import { Switch } from '../../components/switch/Switch';

export function SwitchPlayground() {
  const [state, setState] = useState(SWITCH_INITIAL_STATE);

  const code = generateSwitchCode(state);

  const update = (key: string, value: any) => {
    setState((prev) => {
      const next = { ...prev, [key]: value };

      if (key === 'errorMessage' && value) {
        next.error = true;
        next.description = '';
      }

      if (key === 'error' && !value) {
        next.errorMessage = '';
      }

      if (key === 'description' && value) {
        next.errorMessage = '';
      }

      return next;
    });
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={switchControls}
        />
      }
      preview={
        <div className='flex items-center justify-center p-20'>
          <Switch
            variant={state.variant}
            checked={state.checked}
            disabled={state.disabled}
            size={state.size}
            label={state.label ? 'Switch label' : undefined}
            description={state.description ? 'Switch description' : undefined}
            error={state.error}
            errorMessage={state.errorMessage ? 'Error message' : undefined}
          ></Switch>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
