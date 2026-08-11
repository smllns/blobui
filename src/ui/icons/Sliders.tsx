import { Icon, type IconProps } from '../Icon';

export function Sliders(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='4' y1='7' x2='20' y2='7' />
      <circle cx='9' cy='7' r='3' />
      <line x1='4' y1='17' x2='20' y2='17' />
      <circle cx='15' cy='17' r='3' />
    </Icon>
  );
}
