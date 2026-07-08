import { useState } from 'react';

import { Checkbox } from '../../../components/checkbox/CheckBox';
import { CodeBlock } from '../CodeBlock';
import { PlaygroundShell } from './PlaygroundShell';
import { ControlsRenderer } from './controls/ControlsRenderer';

import {
  CHECKBOX_INITIAL_STATE,
  checkboxControls,
  type CheckboxPlaygroundState,
} from './constants/checkboxConstants';

import { generateCheckboxCode } from './codeGenerators/generateCheckboxCode';

export function CheckboxPlayground() {
  const [state, setState] = useState(CHECKBOX_INITIAL_STATE);

  const code = generateCheckboxCode(state);

  const update = <K extends keyof CheckboxPlaygroundState>(
    key: K,
    value: CheckboxPlaygroundState[K],
  ) => {
    setState((prev) => {
      const next = { ...prev, [key]: value };

      if (key === 'errorMessage' && value) {
        next.error = true;
        next.description = false;
      }

      if (key === 'description' && value) {
        next.errorMessage = false;
      }

      if (key === 'error' && !value) {
        next.errorMessage = false;
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
          controls={checkboxControls}
        />
      }
      preview={
        <div className='flex flex-col gap-4'>
          <Checkbox
            size={state.size}
            checked={state.checked}
            disabled={state.disabled}
            error={state.error}
            label={state.label ? 'Label' : undefined}
            description={state.description ? 'Description' : undefined}
            errorMessage={
              state.errorMessage ? 'Something went wrong' : undefined
            }
            leftIcon={state.leftIcon ? <span>💖</span> : undefined}
          />
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
