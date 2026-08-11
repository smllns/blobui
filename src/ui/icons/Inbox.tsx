import { Icon, type IconProps } from '../Icon';

export function Inbox(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='3' y='4' width='18' height='16' rx='2.5' />
      <path d='M3 14h4.5l1.5 2.5h6l1.5-2.5H21' />
    </Icon>
  );
}
