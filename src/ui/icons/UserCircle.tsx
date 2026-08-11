import { Icon, type IconProps } from '../Icon';

export function UserCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <circle cx='12' cy='8.5' r='3' />
      <path d='M6.5 19a5.5 5.5 0 0 1 11 0' />
    </Icon>
  );
}
