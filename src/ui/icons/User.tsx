import { Icon, type IconProps } from '../Icon';

export function User(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='8' r='3.75' />
      <path d='M5.25 20.5a6.75 6.75 0 0 1 13.5 0' />
    </Icon>
  );
}
