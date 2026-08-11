import { Icon, type IconProps } from '../Icon';

export function Clapperboard(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='6' width='18' height='14' rx='2.5' />
      <line x1='3' y1='10.5' x2='21' y2='10.5' />
      <path d='M7.5 6 5 10.5M13 6 10.5 10.5M18.5 6 16 10.5' />
    </Icon>
  );
}
