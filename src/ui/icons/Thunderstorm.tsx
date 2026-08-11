import { Icon, type IconProps } from '../Icon';

export function Thunderstorm(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6.5 18h11a3 3 0 0 0 0-6 5.5 5.5 0 0 0-11 0 3 3 0 0 0 0 6Z' />
      <path d='M13.5 9.5 10.5 13h2.5L11 15.5' />
    </Icon>
  );
}
