import { Icon, type IconProps } from '../Icon';

export function Mic(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='9' y='3' width='6' height='11' rx='3' />
      <path d='M5.5 11.5a6.5 6.5 0 0 0 13 0' />
      <line x1='12' y1='18' x2='12' y2='21' />
    </Icon>
  );
}
