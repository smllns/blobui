import { Icon, type IconProps } from '../Icon';

export function Plane(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='12' y1='3.5' x2='12' y2='17.5' />
      <path d='M3.5 15 12 9.5l8.5 5.5' />
      <path d='M8.5 20.5 12 17.5l3.5 3' />
    </Icon>
  );
}
