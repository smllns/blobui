import { Icon, type IconProps } from '../Icon';

export function Users(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='8.5' cy='8' r='3' />
      <path d='M3 18.5a5.5 5.5 0 0 1 11 0' />
      <circle cx='17' cy='8' r='2.5' />
      <path d='M17 12.5a4.5 4.5 0 0 1 4.5 4.5' />
    </Icon>
  );
}
