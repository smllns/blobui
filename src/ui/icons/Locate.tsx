import { Icon, type IconProps } from '../Icon';

export function Locate(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='12' r='6.5' />
      <circle cx='12' cy='12' r='1' />
      <line x1='12' y1='3' x2='12' y2='6' />
      <line x1='12' y1='18' x2='12' y2='21' />
      <line x1='3' y1='12' x2='6' y2='12' />
      <line x1='18' y1='12' x2='21' y2='12' />
    </Icon>
  );
}
