import { Icon, type IconProps } from '../Icon';

export function AlignCenter(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 6h16' />
      <path d='M7 12h10' />
      <path d='M5.5 18h13' />
    </Icon>
  );
}
