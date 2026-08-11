import { useState } from 'react';
import {
  CHECKBOX_INITIAL_STATE,
  CHECKBOX_CONTROLS,
  type CheckboxPlaygroundState,
} from './checkboxConstants';
import { generateCheckboxCode } from './generateCheckboxCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Checkbox } from '../../components/checkbox/CheckBox';
import { CodeBlock } from '../components/CodeBlock';
import { Sun } from '@/ui/icons/Sun';

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
          controls={CHECKBOX_CONTROLS}
        />
      }
      preview={
        <div className='flex flex-col gap-4'>
          <Checkbox
            size={state.size}
            checked={state.checked}
            indeterminate={state.indeterminate}
            disabled={state.disabled}
            error={state.error}
            label={state.label ? 'Label' : undefined}
            description={state.description ? 'Description' : undefined}
            errorMessage={
              state.errorMessage ? 'Something went wrong' : undefined
            }
            icon={
              state.icon ? (
                <Sun className='text-orange-400  h-5 w-5 ' />
              ) : undefined
            }
          />
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
