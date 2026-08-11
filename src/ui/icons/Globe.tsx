import { Icon, type IconProps } from '../Icon';

export function Globe(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='9' />
      <line x1='3' y1='12' x2='21' y2='12' />
      <path d='M12 3a11 11 0 0 1 0 18 11 11 0 0 1 0-18' />
    </Icon>
  );
}
