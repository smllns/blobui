import { Icon, type IconProps } from '../Icon';

export function HeavyRain(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M6.5 18h11a3 3 0 0 0 0-6 5.5 5.5 0 0 0-11 0 3 3 0 0 0 0 6Z' />
      <path d='M7 20.5 6 22M9.5 20.5 8.5 22M12 20.5 11 22M14.5 20.5 13.5 22M17 20.5 16 22' />
    </Icon>
  );
}
