import type { CommonStylingVariant } from '@/components/shared/types';
import type {
  InputOtpCharset,
  InputOtpSize,
} from '@/components/input-otp/input-otp.types';
import { COMMON_VARIANTS, SWITCH_SIZE_OPTIONS } from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export const OTP_CHARSET_OPTIONS: InputOtpCharset[] = ['numeric', 'alnum'];
export const OTP_LENGTH_OPTIONS = ['4', '6', '8'];

const SAMPLE: Record<InputOtpCharset, string> = {
  numeric: '49201873',
  alnum: 'A7KQ2MX9',
};

export const sampleCode = (charset: InputOtpCharset, length: string) =>
  SAMPLE[charset].slice(0, Number(length));

export type InputOtpPlaygroundState = {
  variant: CommonStylingVariant;
  size: InputOtpSize;
  charset: InputOtpCharset;
  length: string;
  error: boolean;
  disabled: boolean;
  readOnly: boolean;
  label: boolean;
  description: boolean;
  errorMessage: boolean;
};

export const INPUT_OTP_INITIAL_STATE: InputOtpPlaygroundState = {
  variant: 'default',
  size: 'md',
  charset: 'numeric',
  length: '6',
  error: false,
  disabled: false,
  readOnly: false,
  label: false,
  description: false,
  errorMessage: false,
};

export const INPUT_OTP_CONTROLS = [
  selectControl<InputOtpPlaygroundState>('variant', 'Variant', COMMON_VARIANTS),
  selectControl<InputOtpPlaygroundState>('size', 'Size', SWITCH_SIZE_OPTIONS),
  selectControl<InputOtpPlaygroundState>(
    'charset',
    'Charset',
    OTP_CHARSET_OPTIONS,
  ),
  selectControl<InputOtpPlaygroundState>(
    'length',
    'Length',
    OTP_LENGTH_OPTIONS,
  ),
  checkboxControl<InputOtpPlaygroundState>('error', 'Error'),
  checkboxControl<InputOtpPlaygroundState>('disabled', 'Disabled'),
  checkboxControl<InputOtpPlaygroundState>('readOnly', 'Read only'),
  checkboxControl<InputOtpPlaygroundState>('label', 'Label'),
  checkboxControl<InputOtpPlaygroundState>('description', 'Description'),
  checkboxControl<InputOtpPlaygroundState>('errorMessage', 'Error Message'),
];
