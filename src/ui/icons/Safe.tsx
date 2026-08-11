import { Icon, type IconProps } from '../Icon';

export function Safe(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='4' width='18' height='15' rx='2.5' />
      <circle cx='10.5' cy='11.5' r='3.5' />
      <line x1='17' y1='9.5' x2='17' y2='13.5' />
      <path d='M7 19v2M17 19v2' />
    </Icon>
  );
}
