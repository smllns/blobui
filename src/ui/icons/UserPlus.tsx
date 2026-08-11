import { Icon, type IconProps } from '../Icon';

export function UserPlus(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='9' cy='8' r='3' />
      <path d='M3.5 18.5a5.5 5.5 0 0 1 11 0' />
      <line x1='15.5' y1='8' x2='21.5' y2='8' />
      <line x1='18.5' y1='5' x2='18.5' y2='11' />
    </Icon>
  );
}
