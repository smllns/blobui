import { Icon, type IconProps } from '../Icon';

export function Bold(props: IconProps) {
  return (
    <Icon {...props}>
      <line x1='7' y1='4' x2='7' y2='20' />
      <path d='M7 4h6a4 4 0 0 1 0 8H7' />
      <path d='M7 12h6a4 4 0 0 1 0 8H7' />
    </Icon>
  );
}
