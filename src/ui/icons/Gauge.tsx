import { Icon, type IconProps } from '../Icon';

export function Gauge(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 17a9 9 0 0 1 18 0' />
      <line x1='12' y1='17' x2='16' y2='12' />
    </Icon>
  );
}
