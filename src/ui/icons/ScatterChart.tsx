import { Icon, type IconProps } from '../Icon';

export function ScatterChart(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 4v16h16' />
      <circle cx='8' cy='15' r='1.5' />
      <circle cx='12' cy='10' r='1.5' />
      <circle cx='16' cy='14' r='1.5' />
      <circle cx='19' cy='7' r='1.5' />
    </Icon>
  );
}
