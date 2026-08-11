import { Icon, type IconProps } from '../Icon';

export function Highlighter(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M15 3 19 7 12 14 9 15 7 13 8 10Z' />
      <line x1='4' y1='19' x2='20' y2='19' />
    </Icon>
  );
}
