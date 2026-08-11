import { Icon, type IconProps } from '../Icon';

export function Ticket(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='6' width='19' height='12' rx='2.5' />
      <line x1='15' y1='6' x2='15' y2='9' />
      <line x1='15' y1='15' x2='15' y2='18' />
    </Icon>
  );
}
