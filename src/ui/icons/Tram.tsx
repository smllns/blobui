import { Icon, type IconProps } from '../Icon';

export function Tram(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3.5' y='5.5' width='17' height='12.5' rx='2.5' />
      <line x1='3.5' y1='11.5' x2='20.5' y2='11.5' />
      <path d='M7.5 5.5 12 3l4.5 2.5' />
      <line x1='3.5' y1='3' x2='20.5' y2='3' />
      <circle cx='7.5' cy='19.5' r='1.5' />
      <circle cx='16.5' cy='19.5' r='1.5' />
    </Icon>
  );
}
