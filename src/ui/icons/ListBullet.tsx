import { Icon, type IconProps } from '../Icon';

export function ListBullet(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='5' cy='6' r='1' />
      <line x1='10' y1='6' x2='20' y2='6' />
      <circle cx='5' cy='12' r='1' />
      <line x1='10' y1='12' x2='20' y2='12' />
      <circle cx='5' cy='18' r='1' />
      <line x1='10' y1='18' x2='20' y2='18' />
    </Icon>
  );
}
