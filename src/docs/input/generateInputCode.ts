import type { InputPlaygroundState } from './inputConstants';

export function generateInputCode({
  variant,
  size,
  labelPlacement,
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
  if (labelPlacement !== 'above') props.push(`labelPlacement="${labelPlacement}"`);
  if (fullWidth) props.push('fullWidth');
  if (error) props.push('error');

  if (leftIcon) props.push('leftIcon={<Search />}');
  if (rightIcon) props.push('rightIcon={<Eye />}');
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
