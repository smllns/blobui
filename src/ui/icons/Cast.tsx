import { Icon, type IconProps } from '../Icon';

export function Cast(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 11V6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5H13' />
      <path d='M4 17a3 3 0 0 1 3 3M4 14a6 6 0 0 1 6 6' />
    </Icon>
  );
}
