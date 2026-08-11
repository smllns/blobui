import { Icon, type IconProps } from '../Icon';

export function TrafficLight(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='8' y='2.5' width='8' height='16' rx='2' />
      <circle cx='12' cy='6' r='1' />
      <circle cx='12' cy='10.5' r='1' />
      <circle cx='12' cy='15' r='1' />
      <line x1='12' y1='18.5' x2='12' y2='21.5' />
    </Icon>
  );
}
