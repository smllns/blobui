import { InputOtp } from '@/components/input-otp/InputOtp';
import type { StateSpecimen } from '../components/docsPage.types';

export const INPUT_OTP_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: <InputOtp aria-label='Verification code' />,
    note: 'default state — all slots are ready for input',
  },
  {
    name: 'hover',
    node: <InputOtp aria-label='Verification code' forceState='hover' />,
    note: 'hover state — highlights the slot under the pointer',
  },
  {
    name: 'focus',
    node: <InputOtp aria-label='Verification code' forceState='focus' />,
    note: 'focus state — the active slot shows the focus ring and caret',
  },
  {
    name: 'filled',
    node: <InputOtp aria-label='Verification code' defaultValue='492018' />,
    note: 'filled state — entered digits are displayed in their individual slots',
  },
  {
    name: 'empty',
    node: <InputOtp aria-label='Verification code' defaultValue='492' />,
    note: 'partially filled state — entered and empty slots remain clearly distinguishable',
  },
  {
    name: 'invalid',
    node: (
      <InputOtp
        aria-label='Verification code'
        defaultValue='492018'
        errorMessage='That code has expired'
      />
    ),
    note: 'invalid state — all slots use the error styling and the message explains the problem',
  },
  {
    name: 'read-only',
    node: (
      <InputOtp aria-label='Verification code' readOnly defaultValue='492018' />
    ),
    note: 'read-only state — the code remains visible but cannot be edited',
  },
  {
    name: 'disabled',
    node: (
      <InputOtp aria-label='Verification code' disabled defaultValue='492018' />
    ),
    note: 'disabled state — the code is unavailable for interaction',
  },
  {
    name: 'loading',
    node: (
      <InputOtp
        aria-label='Verification code'
        defaultValue='4920'
        loading
        loadingLabel='Verifying code…'
      />
    ),
    note: 'loading state — the entered code remains visible while verification is in progress',
  },
];
