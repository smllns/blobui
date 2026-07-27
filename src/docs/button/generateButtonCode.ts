import type { PlaygroundState } from './buttonConstants';

export function generateButtonCode({
  variant,
  size,
  loading,
  disabled,
  fullWidth,
  leftIcon,
  rightIcon,
}: PlaygroundState) {
  const props = [
    variant !== 'primary' && `variant="${variant}"`,
    size !== 'md' && `size="${size}"`,
    loading && 'loading',
    disabled && 'disabled',
    fullWidth && 'fullWidth',
    leftIcon && 'leftIcon={<Icon/>}',
    rightIcon && 'rightIcon={<Icon/>}',
  ].filter(Boolean);

  if (props.length === 0) {
    return `<Button>
  Preview Button
</Button>`;
  }

  return `<Button
  ${props.join('\n  ')}
>
  Preview Button
</Button>`;
}
