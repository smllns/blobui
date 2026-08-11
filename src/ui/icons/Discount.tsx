import { Icon, type IconProps } from '../Icon';

export function Discount(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <line x1='15.5' y1='8.5' x2='8.5' y2='15.5' />
      <circle cx='9.5' cy='9.5' r='1.5' />
      <circle cx='14.5' cy='14.5' r='1.5' />
    </Icon>
  );
}
