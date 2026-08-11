import { Icon, type IconProps } from '../Icon';

export function IdCard(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='5' width='19' height='14' rx='2.5' />
      <circle cx='8' cy='9.5' r='2' />
      <path d='M4.5 17a3.5 3.5 0 0 1 7 0' />
      <line x1='14.5' y1='10' x2='19' y2='10' />
      <line x1='14.5' y1='14' x2='19' y2='14' />
    </Icon>
  );
}
