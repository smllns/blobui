import { Icon, type IconProps } from '../Icon';

export function UserCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='9' cy='8' r='3' />
      <path d='M3.5 18.5a5.5 5.5 0 0 1 11 0' />
      <path d='M15.5 8.5 17.5 10.5 21.5 6.5' />
    </Icon>
  );
}
