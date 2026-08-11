import { Icon, type IconProps } from '../Icon';

export function EyeOff(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 12a10 10 0 0 1 18 0 10 10 0 0 1-18 0Z' />
      <circle cx='12' cy='12' r='3' />
      <line x1='4.5' y1='4.5' x2='19.5' y2='19.5' />
    </Icon>
  );
}
