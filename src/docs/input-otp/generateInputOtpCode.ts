import {
  partialCode,
  sampleCode,
  type InputOtpPlaygroundState,
} from './inputOtpConstants';

export function generateInputOtpCode({
  variant,
  size,
  charset,
  length,
  error,
  loading,
  disabled,
  readOnly,
  label,
  description,
  errorMessage,
}: InputOtpPlaygroundState) {
  const props: string[] = [];

  if (variant !== 'default') props.push(`variant="${variant}"`);
  if (size !== 'md') props.push(`size="${size}"`);
  if (charset !== 'numeric') props.push(`charset="${charset}"`);
  if (length !== '6') props.push(`length={${length}}`);

  if (readOnly) {
    props.push(`defaultValue="${sampleCode(charset, length)}"`);
  } else if (loading) {
    props.push(`defaultValue="${partialCode(charset, length)}"`);
  }

  if (error) props.push('error');
  if (loading) props.push('loading');
  if (disabled) props.push('disabled');
  if (readOnly) props.push('readOnly');
  if (label) props.push('label="Verification code"');

  if (description && !errorMessage) {
    props.push(`description="Sent to +44 ••• ••• 4471"`);
  }

  if (errorMessage) {
    props.push(`errorMessage="That code has expired. Request a new one."`);
  }

  props.push('onComplete={(code) => verify(code)}');

  return `<InputOtp
  ${props.join('\n  ')}
/>`;
}
