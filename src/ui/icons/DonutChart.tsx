import { Icon, type IconProps } from '../Icon';

export function DonutChart(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <circle cx='12' cy='12' r='4' />
      <line x1='12' y1='8' x2='12' y2='3' />
      <line x1='16' y1='12' x2='21' y2='12' />
    </Icon>
  );
}
