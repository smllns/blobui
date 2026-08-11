import { Icon, type IconProps } from '../Icon';

export function Mail(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='5' width='18' height='14' rx='2.5' />
      <path d='M3.5 7.5 12 13 20.5 7.5' />
    </Icon>
  );
}
