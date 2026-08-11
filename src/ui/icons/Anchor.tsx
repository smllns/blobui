import { Icon, type IconProps } from '../Icon';

export function Anchor(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx='12' cy='5.5' r='2.5' />
      <line x1='12' y1='8' x2='12' y2='20.5' />
      <line x1='7.5' y1='10.5' x2='16.5' y2='10.5' />
      <path d='M4 15a8.5 8.5 0 0 0 16 0' />
    </Icon>
  );
}
