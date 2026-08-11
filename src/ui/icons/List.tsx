import { Icon, type IconProps } from '../Icon';

export function List(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='4.5' cy='6' r='1' />
      <circle cx='4.5' cy='12' r='1' />
      <circle cx='4.5' cy='18' r='1' />
      <line x1='10' y1='6' x2='20.5' y2='6' />
      <line x1='10' y1='12' x2='20.5' y2='12' />
      <line x1='10' y1='18' x2='20.5' y2='18' />
    </Icon>
  );
}
