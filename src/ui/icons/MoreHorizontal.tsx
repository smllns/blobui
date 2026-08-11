import { Icon, type IconProps } from '../Icon';

export function MoreHorizontal(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='5' cy='12' r='1' />
      <circle cx='12' cy='12' r='1' />
      <circle cx='19' cy='12' r='1' />
    </Icon>
  );
}
