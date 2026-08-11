import { Icon, type IconProps } from '../Icon';

export function Fullscreen(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 3H3v6M15 3h6v6' />
      <path d='M3 15v6h6M21 15v6h-6' />
    </Icon>
  );
}
