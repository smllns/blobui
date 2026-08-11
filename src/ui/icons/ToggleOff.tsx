import { Icon, type IconProps } from '../Icon';

export function ToggleOff(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2' y='6' width='20' height='12' rx='6' />
      <circle cx='8' cy='12' r='3' />
    </Icon>
  );
}
