import { useState } from 'react';
import { Button } from '../../components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { BTN_CONTROLS, BTN_INITIAL_STATE } from './buttonConstants';
import { generateButtonCode } from './generateButtonCode';

export function ButtonPlayground() {
  const [state, setState] = useState(BTN_INITIAL_STATE);

  const code = generateButtonCode(state);

  const update = <K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K],
  ) => {
    setState((prev) => {
      const next = { ...prev, [key]: value };

      if (key === 'loading' && value) next.disabled = false;
      if (key === 'disabled' && value) next.loading = false;

      return next;
    });
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={BTN_CONTROLS}
        />
      }
      preview={
        <Button
          variant={state.variant}
          size={state.size}
          loading={state.loading}
          disabled={state.disabled}
          fullWidth={state.fullWidth}
          leftIcon={state.leftIcon ? <span>💖</span> : undefined}
          rightIcon={state.rightIcon ? <span>💖</span> : undefined}
        >
          Preview Button
        </Button>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
