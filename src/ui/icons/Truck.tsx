import { Icon, type IconProps } from '../Icon';

export function Truck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M5 18H2.5V7.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V18' />
      <line x1='9' y1='18' x2='15' y2='18' />
      <path d='M13.5 9h3.5l3 3.5V18h-1' />
      <circle cx='7' cy='18' r='2' />
      <circle cx='17' cy='18' r='2' />
    </Icon>
  );
}
