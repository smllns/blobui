import { useState } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { InputOtp } from '@/components/input-otp/InputOtp';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { generateInputOtpCode } from './generateInputOtpCode';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import {
  INPUT_OTP_CONTROLS,
  INPUT_OTP_INITIAL_STATE,
  sampleCode,
  type InputOtpPlaygroundState,
} from './inputOtpConstants';

export function InputOtpPlayground() {
  const [state, setState] = useState(INPUT_OTP_INITIAL_STATE);

  const code = generateInputOtpCode(state);

  const prefilled = state.readOnly;

  const update = <K extends keyof InputOtpPlaygroundState>(
    key: K,
    value: InputOtpPlaygroundState[K],
  ) => {
    setState((prev) => {
      const next = {
        ...prev,
        [key]: value,
      };

      if (key === 'errorMessage' && value) {
        next.error = true;
        next.description = false;
      }

      if (key === 'description' && value) {
        next.errorMessage = false;
        next.error = false;
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
          controls={INPUT_OTP_CONTROLS}
        />
      }
      preview={
        <InputOtp
          key={`${state.charset}-${state.length}-${String(prefilled)}`}
          defaultValue={
            prefilled ? sampleCode(state.charset, state.length) : undefined
          }
          variant={state.variant}
          size={state.size}
          charset={state.charset}
          length={Number(state.length)}
          error={state.error}
          disabled={state.disabled}
          readOnly={state.readOnly}
          label={state.label ? 'Verification code' : undefined}
          description={
            state.description && !state.errorMessage
              ? 'Sent to +44 ••• ••• 4471'
              : undefined
          }
          errorMessage={
            state.errorMessage
              ? 'That code has expired. Request a new one.'
              : undefined
          }
        />
      }
      code={<CodeBlock code={code} />}
    />
  );
}
