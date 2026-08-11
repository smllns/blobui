import { Icon, type IconProps } from '../Icon';

export function MessageSquare(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M3 20.5V6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v9a2.5 2.5 0 0 1-2.5 2.5H7Z' />
    </Icon>
  );
}
