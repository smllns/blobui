import { Icon, type IconProps } from '../Icon';

export function MessageCircle(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M5 14.5A8 8 0 1 1 9 18.5L3.5 20.5Z' />
    </Icon>
  );
}
