import { Icon, type IconProps } from '../Icon';

export function Calendar(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='5' width='18' height='16' rx='2.5' />
      <path d='M8 2.5v5M16 2.5v5' />
      <path d='M3 10h18' />
    </Icon>
  );
}
