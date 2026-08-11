import { Icon, type IconProps } from '../Icon';

export function Sparkles(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M10 3c0 3.5 3.5 7 7 7-3.5 0-7 3.5-7 7 0-3.5-3.5-7-7-7 3.5 0 7-3.5 7-7Z' />
      <path d='M18 14c0 2 2 4 4 4-2 0-4 2-4 4 0-2-2-4-4-4 2 0 4-2 4-4Z' />
    </Icon>
  );
}
