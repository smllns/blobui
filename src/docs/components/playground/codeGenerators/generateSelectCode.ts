import type { SelectPlaygroundState } from '../constants/selectConstants';

export function generateSelectCode({
  variant,
  size,
  fullWidth,
  disabled,
  error,
  leftIcon,
  rightIcon,
}: SelectPlaygroundState) {
  const props = [
    variant !== 'default' && `variant="${variant}"`,
    size !== 'md' && `size="${size}"`,
    fullWidth && 'fullWidth',
    disabled && 'disabled',
    error && 'error',
    leftIcon && 'leftIcon={<Icon />}',
    rightIcon && 'rightIcon={<Icon />}',
  ].filter(Boolean);

  if (!props.length) {
    return `<Select defaultValue="">
  <option value="">Choose option</option>
  <option value="react">React</option>
  <option value="vue">Vue</option>
  <option value="angular">Angular</option>
</Select>`;
  }

  return `<Select
  ${props.join('\n  ')}
  defaultValue=""
>
  <option value="">Choose option</option>
  <option value="react">React</option>
  <option value="vue">Vue</option>
  <option value="angular">Angular</option>
</Select>`;
}
