import { useState } from 'react';

import { Select } from '../../../components/select';
import { CodeBlock } from '../CodeBlock';
import { PlaygroundShell } from './PlaygroundShell';
import { ControlsRenderer } from './controls/ControlsRenderer';

import {
  SELECT_CONTROLS,
  SELECT_INITIAL_STATE,
  type SelectPlaygroundState,
} from './constants/selectConstants';

import { generateSelectCode } from './codeGenerators/generateSelectCode';
import { SelectItem } from '../../../components/select/SelectItem';

export function SelectPlayground() {
  const [state, setState] = useState(SELECT_INITIAL_STATE);

  const code = generateSelectCode(state);

  const update = <K extends keyof SelectPlaygroundState>(
    key: K,
    value: SelectPlaygroundState[K],
  ) => {
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
          controls={SELECT_CONTROLS}
        />
      }
      preview={
        <Select
          variant={state.variant}
          size={state.size}
          width={state.width}
          disabled={state.disabled}
          error={state.error}
          placeholder='Choose option'
          defaultValue='react'
        >
          <SelectItem value='react'>React</SelectItem>

          <SelectItem value='vue'>Vue</SelectItem>

          <SelectItem value='angular'>Angular</SelectItem>
        </Select>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
