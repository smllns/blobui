import { Icon, type IconProps } from '../Icon';

export function Tv(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='7' width='18' height='13' rx='2.5' />
      <path d='M8 3 12 7 16 3' />
    </Icon>
  );
}
