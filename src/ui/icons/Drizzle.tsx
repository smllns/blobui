import { Icon, type IconProps } from '../Icon';

export function Drizzle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6.5 18h11a3 3 0 0 0 0-6 5.5 5.5 0 0 0-11 0 3 3 0 0 0 0 6Z' />
      <path d='M8.5 21v1M12 21v1M15.5 21v1' />
    </Icon>
  );
}
