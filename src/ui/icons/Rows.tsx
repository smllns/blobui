import { Icon, type IconProps } from '../Icon';

export function Rows(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='3' width='18' height='18' rx='2.5' />
      <line x1='3' y1='12' x2='21' y2='12' />
    </Icon>
  );
}
