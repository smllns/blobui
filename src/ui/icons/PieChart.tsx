import { Icon, type IconProps } from '../Icon';

export function PieChart(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <path d='M12 3v9h9' />
    </Icon>
  );
}
