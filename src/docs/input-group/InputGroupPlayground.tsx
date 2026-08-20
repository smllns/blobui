import { useState } from 'react';
import type { ReactNode } from 'react';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import {
  InputGroup,
  InputGroupAddon,
} from '@/components/input-group/InputGroup';
import { Button } from '@/components/button/Button';
import {
  INPUT_GROUP_CONTROLS,
  INPUT_GROUP_COPY,
  INPUT_GROUP_INITIAL_STATE,
  type InputGroupPlaygroundState,
  type InputGroupSlot,
} from './inputGroupConstants';
import { generateInputGroupCode } from './generateInputGroupCode';

function slotNode(
  slot: InputGroupSlot,
  side: 'leading' | 'trailing',
): ReactNode {
  const text =
    side === 'leading'
      ? INPUT_GROUP_COPY.leadingText
      : INPUT_GROUP_COPY.trailingText;

  const bare =
    side === 'leading'
      ? INPUT_GROUP_COPY.leadingBare
      : INPUT_GROUP_COPY.trailingBare;

  switch (slot) {
    case 'none':
      return undefined;
    case 'text':
      return text;
    case 'bare':
      return <InputGroupAddon variant='bare'>{bare}</InputGroupAddon>;
    case 'button':
      return (
        <Button variant='secondary'>{INPUT_GROUP_COPY.buttonLabel}</Button>
      );
  }
}

export function InputGroupPlayground() {
  const [state, setState] = useState(INPUT_GROUP_INITIAL_STATE);

  const update = <K extends keyof InputGroupPlaygroundState>(
    key: K,
    value: InputGroupPlaygroundState[K],
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

      if (key === 'required' && value) {
        next.label = true;
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
          controls={INPUT_GROUP_CONTROLS}
        />
      }
      preview={
        <div className='w-full max-w-md'>
          <InputGroup
            variant={state.variant}
            leading={slotNode(state.leading, 'leading')}
            trailing={slotNode(state.trailing, 'trailing')}
            placeholder={INPUT_GROUP_COPY.placeholder}
            label={state.label ? INPUT_GROUP_COPY.label : undefined}
            required={state.required}
            description={
              state.description && !state.errorMessage
                ? INPUT_GROUP_COPY.description
                : undefined
            }
            errorMessage={
              state.errorMessage ? INPUT_GROUP_COPY.errorMessage : undefined
            }
            error={state.error}
            loading={state.loading}
            loadingSide={state.loadingSide}
            loadingLabel={INPUT_GROUP_COPY.loadingLabel}
            disabled={state.disabled}
            readOnly={state.readOnly}
            fullWidth={state.fullWidth}
          />
        </div>
      }
      code={<CodeBlock code={generateInputGroupCode(state)} />}
    />
  );
}
