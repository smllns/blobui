import { Icon, type IconProps } from '../Icon';

export function BarChartH(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 4v16h16' />
      <line x1='4' y1='7' x2='9' y2='7' />
      <line x1='4' y1='11' x2='13' y2='11' />
      <line x1='4' y1='15' x2='17' y2='15' />
    </Icon>
  );
}
