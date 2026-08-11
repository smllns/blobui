import { Icon, type IconProps } from '../Icon';

export function Sunrise(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 20h18' />
      <path d='M7 20a5 5 0 0 1 10 0' />
      <path d='M4 16 5.5 17.5M20 16 18.5 17.5' />
      <path d='M12 4.5v6' />
      <path d='M9 7.5 12 4.5 15 7.5' />
    </Icon>
  );
}
