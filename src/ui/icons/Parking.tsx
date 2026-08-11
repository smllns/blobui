import { Icon, type IconProps } from '../Icon';

export function Parking(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='3' width='18' height='18' rx='2.5' />
      <path d='M9.5 17.5V6.5h3.5a3 3 0 0 1 0 6H9.5' />
    </Icon>
  );
}
