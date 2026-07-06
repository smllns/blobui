import type { InputPlaygroundState } from '../constants/inputConstants';

export function generateInputCode({
  variant,
  size,
  fullWidth,
  error,
  leftIcon,
  rightIcon,
  disabled,
  label,
  description,
  errorMessage,
}: InputPlaygroundState) {
  const props: string[] = [];

  if (variant !== 'default') props.push(`variant="${variant}"`);
  if (size !== 'md') props.push(`size="${size}"`);
  if (fullWidth) props.push('fullWidth');
  if (error) props.push('error');

  if (leftIcon) props.push('leftIcon={<Icon />}');
  if (rightIcon) props.push('rightIcon={<Icon />}');
  if (disabled) props.push('disabled');
  if (label) props.push('label="Label"');

  if (description && !errorMessage) {
    props.push(`description="Input description"`);
  }

  if (errorMessage) {
    props.push(`errorMessage="Something went wrong"`);
  }

  if (!props.length) {
    return `<Input placeholder="Type something..." />`;
  }

  return `<Input
  placeholder="Type something..."
  ${props.join('\n  ')}
/>`;
}
