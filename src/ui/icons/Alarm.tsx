import { Icon, type IconProps } from '../Icon';

export function Alarm(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='13.5' r='8' />
      <path d='M5.5 7A4 4 0 0 1 9.5 3M18.5 7A4 4 0 0 0 14.5 3' />
      <path d='M12 8.5v5h3.5' />
    </Icon>
  );
}
