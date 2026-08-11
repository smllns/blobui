import { Icon, type IconProps } from '../Icon';

export function ShoppingCart(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M2.5 3.5h3l2.5 11.5h9.5' />
      <path d='M6 5.5h14.5l-3 9.5' />
      <circle cx='9.5' cy='19.5' r='1.5' />
      <circle cx='16.5' cy='19.5' r='1.5' />
    </Icon>
  );
}
