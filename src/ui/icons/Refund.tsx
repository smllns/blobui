import { Icon, type IconProps } from '../Icon';

export function Refund(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='7' width='19' height='10' rx='2.5' />
      <line x1='16.5' y1='12' x2='7.5' y2='12' />
      <path d='M10 9.5 7.5 12l2.5 2.5' />
    </Icon>
  );
}
