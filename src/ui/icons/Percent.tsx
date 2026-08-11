import { Icon, type IconProps } from '../Icon';

export function Percent(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='18.5' y1='5.5' x2='5.5' y2='18.5' />
      <circle cx='8.5' cy='8.5' r='2.5' />
      <circle cx='15.5' cy='15.5' r='2.5' />
    </Icon>
  );
}
