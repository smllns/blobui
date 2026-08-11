import { Icon, type IconProps } from '../Icon';

export function Bus(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3.5' y='3' width='17' height='15' rx='2.5' />
      <line x1='3.5' y1='10' x2='20.5' y2='10' />
      <line x1='12' y1='3' x2='12' y2='10' />
      <circle cx='7.5' cy='19.5' r='1.5' />
      <circle cx='16.5' cy='19.5' r='1.5' />
    </Icon>
  );
}
