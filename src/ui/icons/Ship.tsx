import { Icon, type IconProps } from '../Icon';

export function Ship(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 16h18l-2.5 4.5h-13Z' />
      <rect x='13' y='10' width='5.5' height='6' rx='1.5' />
      <rect x='5' y='12.5' width='6' height='3.5' rx='1' />
      <line x1='15.5' y1='10' x2='15.5' y2='6' />
    </Icon>
  );
}
