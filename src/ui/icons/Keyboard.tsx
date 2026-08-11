import { Icon, type IconProps } from '../Icon';

export function Keyboard(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2' y='6' width='20' height='12' rx='2.5' />
      <path d='M5.5 10h2M11 10h2M16.5 10h2' />
      <path d='M8 14h8' />
    </Icon>
  );
}
