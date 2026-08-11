import { Icon, type IconProps } from '../Icon';

export function Underline(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M7 4v6a5 5 0 0 0 10 0V4' />
      <line x1='5' y1='19' x2='19' y2='19' />
    </Icon>
  );
}
