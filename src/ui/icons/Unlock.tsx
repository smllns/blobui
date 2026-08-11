import { Icon, type IconProps } from '../Icon';

export function Unlock(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x='4' y='11' width='16' height='10' rx='2' />
      <path d='M8 11V7a4 4 0 0 1 8 0' />
      <line x1='12' y1='14' x2='12' y2='18' />
    </Icon>
  );
}
