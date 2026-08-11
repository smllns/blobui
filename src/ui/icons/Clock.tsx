import { Icon, type IconProps } from '../Icon';

export function Clock(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='8' />
      <path d='M12 7v5h3.5' />
    </Icon>
  );
}
