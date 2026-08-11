import { Icon, type IconProps } from '../Icon';

export function Hourglass(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6 3h12' />
      <path d='M6 21h12' />
      <path d='M8 3v2.5c0 2 4 4.5 4 6.5s-4 4.5-4 6.5V21' />
      <path d='M16 3v2.5c0 2-4 4.5-4 6.5s4 4.5 4 6.5V21' />
    </Icon>
  );
}
