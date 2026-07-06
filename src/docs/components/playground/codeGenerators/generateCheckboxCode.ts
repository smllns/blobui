import type { CheckboxPlaygroundState } from '../constants/checkboxConstants';

export function generateCheckboxCode({
  size,
  checked,
  disabled,
  error,
  label,
  description,
  errorMessage,
  leftIcon,
}: CheckboxPlaygroundState) {
  const props: string[] = [];
  if (size) props.push(`size="${size}"`);
  if (checked) props.push('checked');
  if (disabled) props.push('disabled');
  if (error) props.push('error');

  if (label) props.push(`label="Subscribe"`);
  if (description) props.push(`description="Helper text"`);
  if (errorMessage) props.push(`errorMessage="Something went wrong"`);
  if (leftIcon) props.push(`leftIcon={<Icon/>}`);

  if (!props.length) {
    return `<Checkbox />`;
  }

  return `<Checkbox
  ${props.join('\n  ')}
/>`;
}
