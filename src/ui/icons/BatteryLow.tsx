import { Icon, type IconProps } from '../Icon';

export function BatteryLow(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='7' width='15' height='10' rx='2' />
      <path d='M21 10.5v3' />
      <path d='M6.5 10.5v3' />
    </Icon>
  );
}
