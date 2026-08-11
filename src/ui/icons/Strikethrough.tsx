import { Icon, type IconProps } from '../Icon';

export function Strikethrough(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M15.5 8.5a3.5 3.5 0 1 0-3.5 3.5 3.5 3.5 0 1 1-3.5 3.5' />
      <line x1='4' y1='12' x2='20' y2='12' />
    </Icon>
  );
}
