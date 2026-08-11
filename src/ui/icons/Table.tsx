import { Icon, type IconProps } from '../Icon';

export function Table(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='3' width='18' height='18' rx='2.5' />
      <line x1='3' y1='9' x2='21' y2='9' />
      <line x1='3' y1='15' x2='21' y2='15' />
      <line x1='12' y1='9' x2='12' y2='21' />
    </Icon>
  );
}
