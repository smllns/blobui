import { useState } from 'react';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Alert } from '@/components/alert/Alert';
import { Button } from '@/components/button/Button';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import {
  ALERT_CONTROLS,
  ALERT_COPY,
  ALERT_INITIAL_STATE,
} from './alertConstants';
import { generateAlertCode } from './generateAlertCode';

export function AlertPlayground() {
  const { state, update } = usePlaygroundState(ALERT_INITIAL_STATE);
  const [run, setRun] = useState(0);

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={ALERT_CONTROLS}
        />
      }
      preview={
        <div className='flex w-full justify-center'>
          <div className='w-full max-w-xl'>
            <Alert
              key={run}
              tone={state.tone}
              emphasis={state.emphasis}
              title={state.title ? ALERT_COPY.title : undefined}
              icon={state.icon ? undefined : null}
              onDismiss={
                state.dismissible ? () => setRun((n) => n + 1) : undefined
              }
              actions={
                state.actions ? (
                  <>
                    <Button size='sm' variant='secondary'>
                      Refresh
                    </Button>

                    <Button size='sm' variant='ghost'>
                      Keep the old figures
                    </Button>
                  </>
                ) : undefined
              }
            >
              {ALERT_COPY.body}
            </Alert>
          </div>
        </div>
      }
      code={<CodeBlock code={generateAlertCode(state)} />}
    />
  );
}
