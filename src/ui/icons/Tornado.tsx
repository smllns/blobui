import { Icon, type IconProps } from '../Icon';

export function Tornado(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 4.5h18' />
      <path d='M6 9h12' />
      <path d='M9 13.5h6' />
      <path d='M11 18h2.5a2 2 0 0 1-1.5 3' />
    </Icon>
  );
}
