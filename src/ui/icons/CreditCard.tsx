import { Icon, type IconProps } from '../Icon';

export function CreditCard(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='5' width='18' height='14' rx='2.5' />
      <line x1='3' y1='9.5' x2='21' y2='9.5' />
      <line x1='6.5' y1='14.5' x2='10.5' y2='14.5' />
    </Icon>
  );
}
