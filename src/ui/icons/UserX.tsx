import { Icon, type IconProps } from '../Icon';

export function UserX(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='9' cy='8' r='3' />
      <path d='M3.5 18.5a5.5 5.5 0 0 1 11 0' />
      <line x1='16.5' y1='6' x2='20.5' y2='10' />
      <line x1='20.5' y1='6' x2='16.5' y2='10' />
    </Icon>
  );
}
