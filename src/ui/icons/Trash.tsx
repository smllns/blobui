import { Icon, type IconProps } from '../Icon';

export function Trash(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='4' y1='6' x2='20' y2='6' />
      <path d='M9 6V4h6v2' />
      <path d='M6 6v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6' />
    </Icon>
  );
}
