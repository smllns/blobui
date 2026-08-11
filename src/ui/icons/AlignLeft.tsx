import { Icon, type IconProps } from '../Icon';

export function AlignLeft(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M4 6h16' />
      <path d='M4 12h10' />
      <path d='M4 18h13' />
    </Icon>
  );
}
