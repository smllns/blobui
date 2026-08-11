import { Icon, type IconProps } from '../Icon';

export function RestaurantPin(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M18.5 10c0 4.5-6.5 11-6.5 11s-6.5-6.5-6.5-11a6.5 6.5 0 1 1 13 0Z' />
      <path d='M9 6.5v2a1.5 1.5 0 0 0 3 0V6.5' />
      <line x1='10.5' y1='10' x2='10.5' y2='13' />
      <line x1='15' y1='6.5' x2='15' y2='13' />
    </Icon>
  );
}
