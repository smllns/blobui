import { Icon, type IconProps } from '../Icon';

export function BatteryCharging(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='7' width='15' height='10' rx='2' />
      <path d='M21 10.5v3' />
      <path d='M13 9.5 8.5 12h4L8 14.5' />
    </Icon>
  );
}
