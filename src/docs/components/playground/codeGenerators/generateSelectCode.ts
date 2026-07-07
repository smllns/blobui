import type { SelectPlaygroundState } from '../constants/selectConstants';

export function generateSelectCode({
  variant,
  size,
  width,
  disabled,
  error,
}: SelectPlaygroundState) {
  const props = [
    variant !== 'default' && `variant="${variant}"`,
    size !== 'md' && `size="${size}"`,
    width !== 'md' && `width="${width}"`,
    disabled && 'disabled',
    error && 'error',
  ].filter(Boolean);

  const selectItems = `
  <SelectItem value="react">
    React
  </SelectItem>

  <SelectItem value="vue">
    Vue
  </SelectItem>

  <SelectItem value="angular">
    Angular
  </SelectItem>`.trim();

  if (!props.length) {
    return `<Select defaultValue="react">
  ${selectItems}
</Select>`;
  }

  return `<Select
  ${props.join('\n  ')}
  defaultValue="react"
>
  ${selectItems}
</Select>`;
}
