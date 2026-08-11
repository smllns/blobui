import { Icon, type IconProps } from '../Icon';

export function Invite(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='2.5' y='5.5' width='13' height='10' rx='2' />
      <path d='M3 6.5 9 11 15 6.5' />
      <line x1='16.5' y1='17.5' x2='21.5' y2='17.5' />
      <line x1='19' y1='15' x2='19' y2='20' />
    </Icon>
  );
}
