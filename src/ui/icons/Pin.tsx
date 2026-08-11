import { Icon, type IconProps } from '../Icon';

export function Pin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 3h6v5l2 4H7l2-4Z' />
      <line x1='12' y1='12' x2='12' y2='21' />
    </Icon>
  );
}
