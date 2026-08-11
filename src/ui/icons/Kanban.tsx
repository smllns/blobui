import { Icon, type IconProps } from '../Icon';

export function Kanban(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='3' width='18' height='18' rx='2.5' />
      <line x1='9' y1='7' x2='9' y2='17' />
      <line x1='15' y1='7' x2='15' y2='13' />
    </Icon>
  );
}
