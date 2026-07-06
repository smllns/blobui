import { useState } from 'react';

import { PlaygroundShell } from './PlaygroundShell';
import { ControlsRenderer } from './controls/ControlsRenderer';
import { CodeBlock } from '../CodeBlock';

import {
  TOAST_CONTROLS,
  TOAST_INITIAL_STATE,
} from './constants/toastConstants';

import { generateToastCode } from './codeGenerators/generateToastCode';
import { Toast } from '../../../components/toast';
import { Button } from '../../../components/button';

export function ToastPlayground() {
  const [state, setState] = useState(TOAST_INITIAL_STATE);

  const code = generateToastCode(state);

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
          controls={TOAST_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center '>
          <Toast
            variant={state.variant}
            size={state.size}
            title={state.title}
            description={
              state.description ? 'This is a toast message' : undefined
            }
            icon={state.icon ? '🔔' : undefined}
            action={
              state.action || state.showClose ? (
                <div className='flex gap-2'>
                  {state.action && (
                    <Button size='xs' variant='outline'>
                      Undo
                    </Button>
                  )}

                  {state.showClose && (
                    <Button size='xs' variant='outline'>
                      ✕
                    </Button>
                  )}
                </div>
              ) : undefined
            }
          />
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
