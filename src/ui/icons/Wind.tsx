import { Icon, type IconProps } from '../Icon';

export function Wind(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 9.5h10.5a2.5 2.5 0 1 0-2.5-2.5' />
      <path d='M3 14h14.5a2.5 2.5 0 1 1-2.5 2.5' />
      <path d='M3 18.5h8' />
    </Icon>
  );
}
