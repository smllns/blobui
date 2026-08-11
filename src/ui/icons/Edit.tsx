import { Icon, type IconProps } from '../Icon';

export function Edit(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M17 4 20 7 9 18 4.5 19.5 6 15Z' />
      <line x1='6' y1='15' x2='9' y2='18' />
    </Icon>
  );
}
