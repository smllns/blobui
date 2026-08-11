import { Icon, type IconProps } from '../Icon';

export function Wifi(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 9.5a12.73 12.73 0 0 1 18 0' />
      <path d='M6 12.5a8.49 8.49 0 0 1 12 0' />
      <path d='M9 15.5a4.24 4.24 0 0 1 6 0' />
      <circle cx='12' cy='18.5' r='1' />
    </Icon>
  );
}
