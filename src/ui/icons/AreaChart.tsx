import { Icon, type IconProps } from '../Icon';

export function AreaChart(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 4v16h16' />
      <path d='M7 20v-4l4-4 3 3 5-7v12' />
    </Icon>
  );
}
