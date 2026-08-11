import { Icon, type IconProps } from '../Icon';

export function ShoppingBag(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='4' y='8' width='16' height='13' rx='2' />
      <path d='M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8' />
    </Icon>
  );
}
