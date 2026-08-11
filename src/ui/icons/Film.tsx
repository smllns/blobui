import { Icon, type IconProps } from '../Icon';

export function Film(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='4' width='18' height='16' rx='2.5' />
      <line x1='7' y1='4' x2='7' y2='20' />
      <line x1='17' y1='4' x2='17' y2='20' />
      <path d='M3 9.5h4M17 9.5h4M3 14.5h4M17 14.5h4' />
    </Icon>
  );
}
