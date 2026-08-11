import { Icon, type IconProps } from '../Icon';

export function LineChart(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 4v16h16' />
      <path d='M7 16 11 12 14 15 19 8' />
    </Icon>
  );
}
