import { Icon, type IconProps } from '../Icon';

export function BarChart(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 4v16h16' />
      <line x1='9' y1='20' x2='9' y2='15' />
      <line x1='13' y1='20' x2='13' y2='11' />
      <line x1='17' y1='20' x2='17' y2='7' />
    </Icon>
  );
}
