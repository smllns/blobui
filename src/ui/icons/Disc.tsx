import { Icon, type IconProps } from '../Icon';

export function Disc(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <circle cx='12' cy='12' r='3' />
    </Icon>
  );
}
